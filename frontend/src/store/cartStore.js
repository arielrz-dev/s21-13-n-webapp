"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: async (productId, quantity) => {
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const token = Cookies.get("token");

        if (!token) {
          console.error("Usuario no autenticado");
          return;
        }

        try {
          const response = await fetch(`${API_BASE_URL}/cart/add`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId, quantity })
          });

          if (!response.ok) {
            throw new Error('Error al agregar al carrito');
          }

          const updatedCart = await response.json();
          set({ items: updatedCart.items });
        } catch (error) {
          console.error('Error:', error);
          throw error;
        }
      },

      getCartItems: async () => {
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
        const token = Cookies.get("token");

        if (!token) return;

        try {
          const response = await fetch(`${API_BASE_URL}/cart`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (!response.ok) {
            throw new Error('Error al obtener el carrito');
          }

          const cart = await response.json();
          set({ items: cart.items });
        } catch (error) {
          console.error('Error:', error);
        }
      },

      clearCart: () => set({ items: [] }),
      
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCartStore;