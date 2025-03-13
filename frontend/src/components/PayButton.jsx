"use client";
import { useState } from "react";

export default function PayButton({ items }) {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items }),
            });

            const data = await response.json();
            if (data.init_point) {
                window.location.href = data.init_point; // Redirige a Mercado Pago
            } else {
                alert("Error al procesar el pago");
            }
        } catch (error) {
            console.error("Error en el pago:", error);
            alert("Hubo un problema con el pago");
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handlePayment}
            className="btn btn-primary btn-block"
            disabled={loading}
        >
            {loading ? "Procesando..." : "Pagar"}
        </button>
    );
}
