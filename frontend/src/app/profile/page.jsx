"use client";
import React from 'react';

export default function Profile() {
  return (
    <div>
    <div className="w-full bg-white rounded-xl">
      {/* Título */}
      <div className="w-full bg-pink-600 text-white text-base md:text-xl font-bold rounded-t-xl p-1 pl-3 md:pl-6">
        Mis pedidos
      </div>
  
      {/* Tabla de pedidos */}
      <div className="mx-2 md:mx-4 my-2 md:my-4 overflow-x-auto">
        <table className="w-full text-xs md:text-sm text-center">
          <thead className="bg-pink-600 text-white">
            <tr>
              {["#pedido", "Descripción", "Fecha", "Estado", "Pago", "Total"].map((col, i) => (
                <th key={i} className="px-2 py-1 md:px-4 md:py-2">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-black">
            {[
              {
                id: "#0000",
                desc: "Dulce de leche, 1/2 kg, chips de chocolate, helado",
                fecha: "04/03/2025",
                estado: "Entregado",
                pago: "Efectivo",
                total: "$7,722.50",
              },
              {
                id: "#0001",
                desc: "Milkshake de Chocolate con Fresa y Coca",
                fecha: "11/03/2025",
                estado: "Pendiente",
                pago: "Tarjeta",
                total: "$2,500.00",
              },
            ].map((pedido, i) => (
              <tr
                key={i}
                className={`${i % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
              >
                <td className="px-2 py-1 md:px-4 md:py-2">{pedido.id}</td>
                <td className="px-2 py-1 md:px-4 md:py-2">{pedido.desc}</td>
                <td className="px-2 py-1 md:px-4 md:py-2">{pedido.fecha}</td>
                <td
                  className={`px-2 py-1 md:px-4 md:py-2 ${
                    pedido.estado === "Entregado"
                      ? "bg-green-600 text-white"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {pedido.estado}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2">{pedido.pago}</td>
                <td className="px-2 py-1 md:px-4 md:py-2">{pedido.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}