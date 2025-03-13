import { create } from "zustand";
import { persist } from "zustand/middleware";
import Cookies from "js-cookie";

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,
      error: null,
      
      addItem: async (product, amount) => {
        const token = Cookies.get("token");
        set({ isLoading: true, error: null });
        
        try {
          if (false) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cartItem/create`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                cart: { id: 1 },
                product: { id: product.id },
                amount: amount
              })
            });

            if (!response.ok) throw new Error('Error adding item to cart');
            await get().fetchCartItems();
          } else {
            set((state) => {
              const existingItem = state.items.find(item => item.productId === product.id);
              
              if (existingItem) {
                return {
                  items: state.items.map(item =>
                    item.productId === product.id
                      ? { ...item, amount: item.amount + amount }
                      : item
                  )
                };
              }
              
              return {
                items: [...state.items, {
                  productId: product.id,
                  productName: product.name,
                  productPrice: product.price,
                  productDescription: product.description,
                  amount: amount
                }]
              };
            });
          }
        } catch (error) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      removeItem: async (productId) => {
        const token = Cookies.get("token");
        set({ isLoading: true, error: null });
        
        try {
          if (false) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cartItem/${productId}`, {
              method: 'DELETE',
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });

            if (!response.ok) throw new Error('Error removing item from cart');
            await get().fetchCartItems();
          } else {
            set((state) => ({
              items: state.items.filter(item => item.productId !== productId)
            }));
          }
        } catch (error) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      updateItemQuantity: async (productId, amount) => {
        if (amount < 1) return;
        
        const token = Cookies.get("token");
        set({ isLoading: true, error: null });
        
        try {
          if (false) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cartItem/${productId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({ amount })
            });

            if (!response.ok) throw new Error('Error updating item quantity');
            await get().fetchCartItems();
          } else {
            set((state) => ({
              items: state.items.map(item => 
                item.productId === productId 
                  ? { ...item, amount }
                  : item
              )
            }));
          }
        } catch (error) {
          set({ error: error.message });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },

      fetchCartItems: async () => {
        const token = Cookies.get("token");
        set({ isLoading: true, error: null });
        
        if (false) {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cartItem/cart/1`, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            
            if (!response.ok) throw new Error('Error fetching cart');
            
            const data = await response.json();
            set({ items: data, error: null });
          } catch (error) {
            set({ error: error.message });
          } finally {
            set({ isLoading: false });
          }
        }
      },

      clearCart: () => set({ items: [], error: null }),
      
      getTotalItems: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.amount, 0);
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + (item.productPrice * item.amount), 0);
      },

      getIsLoading: () => get().isLoading,
      getError: () => get().error,
      clearError: () => set({ error: null })
    }),
    {
      name: "cart-storage"
    }
  )
);

export default useCartStore;