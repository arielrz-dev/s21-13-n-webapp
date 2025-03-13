"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/cartStore";
import Link from "next/link";

export default function SuccessPage() {
  const { clearCart } = useCartStore();
  const [hasCleared, setHasCleared] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!hasCleared) {
      clearCart();  // Vacía el carrito solo si aún no se limpió
      setHasCleared(true); // Evita que se vuelva a ejecutar en re-renders
    }
  }, [hasCleared]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-green-500 text-2xl font-bold">¡Pago exitoso! 🎉</h1>
      <p className="text-lg mt-2">Tu pedido está en camino.</p>
      <Link href="/" className="btn btn-primary mt-4">Volver a la tienda</Link>
    </div>
  );
}
