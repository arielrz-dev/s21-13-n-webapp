"use client";
import Link from "next/link";
import React from "react";

export default function Profile() {
  return (
    <div className=" flex flex-row w-[90%] h-auto mx-auto my-10 gap-10">
      <div className="flex flex-col w-1/3 bg-white rounded-2xl py-2 px-2">

        <div className="flex flex-row border-gray-400 border-b-2 py-4">
        <div className="w-[100px] h-[100px] bg-pink-600 rounded-full flex items-center justify-center overflow-hidden aspect-square">
  <img
    src="/images/account.png"
    alt="profile"
    className="w-full h-full object-cover"
  />
</div>
          <div className="flex flex-col mx-8 my-auto">
            <h2 className="font-bold text-xl text-gray-400">Mi perfil</h2>
            <h2 className="font-bold text-3xl text-black">
              Nombre del usuario
            </h2>
          </div>
        </div>

        <div className="border-gray-400 border-b-2">
          <div className="flex flex-row mx-8 my-auto py-6 ">
            <div className="w-[40px] h-[40px] rounded-full items-center justify-center flex ">
              <img
                src="/images/configured.png"
                alt="account"
                className="w-auto h-auto rounded-full"
              />
            </div>
            <div className="flex flex-col mx-4 my-auto">
              <h2 className="font-semibold text-2xl text-black cursor-pointer hover:underline">
                <Link href="/profile/infocuenta">Información de la cuenta</Link>
              </h2>
            </div>
          </div>
        </div>

        <div className="border-gray-400 border-b-2">
          <div className="flex flex-row mx-8 my-auto py-6 ">
            <div className="w-[40px] h-[40px] rounded-full items-center justify-center flex ">
              <img
                src="/images/contactodireccion.png"
                alt="account"
                className="w-auto h-auto rounded-full"
              />
            </div>
            <div className="flex flex-col mx-4 my-auto">
              <h2 className="font-semibold text-2xl text-black cursor-pointer hover:underline">
                  <Link href="/profile/contactodireccion">Contacto y dirección</Link>
              </h2>
            </div>
          </div>
        </div>

        <div className="border-gray-400 border-b-2">
          <div className="flex flex-row mx-8 my-auto py-6 ">
            <div className="w-[40px] h-[40px] rounded-full items-center justify-center flex ">
              <img
                src="/images/mispedidos.png"
                alt="account"
                className="w-auto h-auto rounded-full"
              />
            </div>
            <div className="flex flex-col mx-4 my-auto">
              <h2 className="font-semibold text-2xl text-black cursor-pointer hover:underline">
                  <Link href="/profile">Mis pedidos</Link>
              </h2>
            </div>
          </div>
        </div>

        <div className="border-gray-400 border-b-2">
          <div className="flex flex-row mx-8 my-auto py-6 ">
            <div className="w-[40px] h-[40px] rounded-full items-center justify-center flex ">
              <img
                src="/images/cambiarcontra.png"
                alt="account"
                className="w-auto h-auto rounded-full"
              />
            </div>
            <div className="flex flex-col mx-4 my-auto">
              <h2 className="font-semibold text-2xl text-black cursor-pointer hover:underline">
                  <Link href="/profile/cambiarcontra">Cambiar contraseña</Link>
              </h2>
            </div>
          </div>
        </div>

        <div className="border-gray-400 border-b-2">
          <div className="flex flex-row mx-8 my-auto py-6 ">
            <div className="w-[40px] h-[40px] rounded-full items-center justify-center flex ">
              <img
                src="/images/ayuda.png"
                alt="account"
                className="w-auto h-auto rounded-full"
              />
            </div>
            <div className="flex flex-col mx-4 my-auto">
              <h2 className="font-semibold text-2xl text-black cursor-pointer hover:underline">
                  <Link href="/profile/ayuda">Centro de ayuda</Link>
              </h2>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-row mx-8 my-auto py-6 ">
            <div className="w-[40px] h-[40px] rounded-full items-center justify-center flex ">
              <img
                src="/images/eliminet.png"
                alt="account"
                className="w-auto h-auto rounded-full"
              />
            </div>
            <div className="flex flex-col mx-4 my-auto">
              <h2 className="font-semibold text-2xl text-black cursor-pointer hover:underline">
                  <Link href="/profile/eliminarcuenta">Eliminar tu cuenta</Link>
              </h2>
            </div>
          </div>
        </div>

      </div>

      <div className="w-2/3 bg-white rounded-2xl">
        <div className="w-full h-auto bg-pink-600 text-white text-4xl font-bold rounded-t-2xl p-2 pl-10">
          Mis pedidos
        </div>
        <div className="mx-10">
          <table className="w-full my-4 py-8">
            <thead className="bg-pink-600 text-white text-sm font-normal">
              <tr>
                <th className="px-4 py-2">#pedido</th>
                <th className="px-4 py-2">Descripción del pedido</th>
                <th className="px-4 py-2">Fecha del pedido</th>
                <th className="px-4 py-2">Estado del pedido</th>
                <th className="px-4 py-2">Método de pago</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody className="text-center text-sm font-normal text-black">
              <tr className="px-4 py-2 odd:bg-white even:bg-gray-100 bg-opacity-100">
                <td>#0000</td>
                <td>
                  Dulce de leche, 1/2 kg, chips de chocolate, helado clásico
                </td>
                <td>04/03/2025</td>
                <td className="bg-green-600 text-white">Entregado</td>
                <td>Efectivo</td>
                <td>$7,722.50</td>
              </tr>
              <tr className="px-4 py-2 odd:bg-white even:bg-gray-100 bg-opacity-100">
                <td>#0001</td>
                <td>Milkshake de Chocolate con Fresa y Bebida de Coca</td>
                <td>11/03/2025</td>
                <td className="bg-yellow-700 text-white">En Camino</td>
                <td>Efectivo</td>
                <td>$2,722.50</td>
              </tr>
              <tr className="px-4 py-2 odd:bg-white even:bg-gray-100 bg-opacity-100">
                <td>#0002</td>
                <td>Postre de Chocolate con Fresa y Bebida de Coca</td>
                <td>08/03/2025</td>
                <td className="bg-red-700 text-white">Cancelado</td>
                <td>Efectivo</td>
                <td>$5,722.50</td>
              </tr>
              <tr className="px-4 py-2 odd:bg-white even:bg-gray-100 bg-opacity-100">
                <td>#0003</td>
                <td>Torta de Chocolate con Fresa y Bebida de Coca</td>
                <td>11/03/2025</td>
                <td className="bg-orange-400 text-white">En preparación</td>
                <td>Efectivo</td>
                <td>$4,722.50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
