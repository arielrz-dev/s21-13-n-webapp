"use client";
import { useState } from 'react';
import useCartStore from '@/store/cartStore';
import { IoMdCart } from 'react-icons/io';
import {toast} from 'react-toastify';

export default function AddToCartButton({ product, amount = 1 }) {
  const [isLoading, setIsLoading] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = async () => {
    if (!product || !product.id) {
      console.error('Invalid product data:', product);
      return;
    }

    setIsLoading(true);
    try {
      const productData = {
        id: product.id,
        name: product.name || 'Unknown Product',
        price: product.price || 0,
        description: product.description || '',
      };

      await addItem(productData, amount);
      // Success notification can be added here 7
      // toast.success('Producto agregado al carrito');
      toast.success("Producto agregado al carrito", {
        position: "top-right",
        autoClose: 2000,
      });

    } catch (error) {
      console.error('Error adding to cart:', error);
      // Error notification can be added here
      toast.error('Error al agregar al carrito');
    } finally {
      setIsLoading(false);
    }
  };

  return (
        <button 
            onClick={handleAddToCart}
            disabled={isLoading}
            className="text-pink-600 p-1 sm:p-2 rounded-full hover:bg-pink-100"
        >
            {isLoading ? <IoMdCart size={20} className='text-gray-800'/> : <IoMdCart size={20} />}
        </button>

  );
}