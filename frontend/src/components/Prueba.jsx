"use client";
import { useState, useEffect } from "react";

export default function IceCreamForm() {
    const [sizes, setSizes] = useState([]);
    const [size, setSize] = useState("");
    const [price, setPrice] = useState(0);
    const [flavors, setFlavors] = useState([]);
    const [selectedFlavors, setSelectedFlavors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("/api/sizes")
            .then((res) => res.json())
            .then((data) => {
                setSizes(data);
                setSize(data[0]?.size || "");
                setPrice(data[0]?.price || 0);
            })
            .catch((err) => console.error("Error cargando tamaños:", err));

        fetch("/api/flavors")
            .then((res) => res.json())
            .then(setFlavors)
            .catch((err) => console.error("Error cargando sabores:", err));
    }, []);

    const handleSizeChange = (selectedSize) => {
        setSize(selectedSize);
        const selectedPrice = sizes.find((s) => s.size === selectedSize)?.price || 0;
        setPrice(selectedPrice);
    };

    const handleFlavorSelection = (flavor) => {
        let maxFlavors = size === "1/4 kg" ? 2 : size === "1/2 kg" ? 3 : 4;
        if (selectedFlavors.includes(flavor)) {
            setSelectedFlavors(selectedFlavors.filter((f) => f !== flavor));
        } else if (selectedFlavors.length < maxFlavors) {
            setSelectedFlavors([...selectedFlavors, flavor]);
        }
    };

    const handleCheckout = async () => {
        if (selectedFlavors.length === 0) {
            alert("Selecciona al menos un sabor.");
            return;
        }

        setLoading(true);
        const response = await fetch("/api/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                size,
                flavors: selectedFlavors,
                price,
            }),
        });

        const data = await response.json();
        setLoading(false);
        if (data.init_point) {
            window.location.href = data.init_point;
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md w-96 mx-auto">
            <h2 className="text-lg font-semibold mb-4">Elige tu helado</h2>

            <label className="block font-medium mb-2">Tamaño:</label>
            <select
                className="select select-bordered w-full mb-4"
                value={size}
                onChange={(e) => handleSizeChange(e.target.value)}
            >
                {sizes.map(({ size, price }) => (
                    <option key={size} value={size}>
                        {size} - ${price}
                    </option>
                ))}
            </select>

            <label className="block font-medium mb-2">Sabores:</label>
            <div className="grid grid-cols-2 gap-2">
                {flavors.map((flavor) => (
                    <button
                        key={flavor}
                        className={`btn ${selectedFlavors.includes(flavor) ? "btn-primary" : "btn-outline"}`}
                        onClick={() => handleFlavorSelection(flavor)}
                    >
                        {flavor}
                    </button>
                ))}
            </div>

            <p className="mt-4 font-bold">Total: ${price}</p>

            <button
                className="btn btn-success w-full mt-4"
                onClick={handleCheckout}
                disabled={loading}
            >
                {loading ? "Procesando..." : "Pagar con Mercado Pago"}
            </button>
        </div>
    );
}
