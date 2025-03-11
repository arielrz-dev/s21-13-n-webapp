"use client";

import { useState } from "react";
import useAuthStore from "@/store/authStore";

export default function AddToCartButton({ productId, quantity = 1 }) {
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuthStore();

  const handleAddToCart = async () => {
    setIsLoading(true);
    
    try {
      if (!token) {
        // Aquí manejaremos después la lógica para carrito local
        console.log("Usuario no autenticado - Guardando en carrito local");
        return;
      }

      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(`${API_BASE_URL}/api/v1/cartItem/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cartId: 1, // Esto debería ser el ID del carrito del usuario
          productId,
          amount: 8,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al agregar al carrito");
      }

      // Aquí puedes agregar una notificación de éxito
      console.log("Producto agregado al carrito exitosamente");

    } catch (error) {
      console.error("Error:", error);
      // Aquí puedes agregar una notificación de error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isLoading}
      className="btn-xs btn-primary"
    >
      {isLoading ? (
        <span>Agregando...</span>
      ) : (
        <span>Agregar al carrito</span>
      )}
    </button>
  );
}