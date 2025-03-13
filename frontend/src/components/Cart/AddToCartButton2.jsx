"use client";
import { useState } from 'react';
import useCartStore from '@/store/cartStore';
import { IoMdCart } from 'react-icons/io';
import { toast } from 'react-toastify';

export default function AddToCartButton2({ product, amount = 1 }) {
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
      const maxLength = 20; // Define la longitud máxima del nombre del producto
      const productName =
        product.name.length > maxLength
          ? product.name.substring(0, maxLength) + "..."
          : product.name;

      toast.success(`"${productName}" agregado al carrito`, {
        position: "top-right",
        autoClose: 2000,
        className: "text-xs", // Hace el texto más pequeño ???
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
      className={`btn btn-sm btn-wide rounded-full border-pink-600 ${isLoading
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-transparent text-pink-600 hover:bg-pink-700 hover:text-white"
        }`}
    >
      {isLoading ? "Cargando..." : "Agregar al Carrito"}
    </button>
  );
}