"use client";
import Link from "next/link";
import React from 'react'

export default function Cambiarcontra() {
  return (
    <div className=" flex flex-row w-[90%] h-auto mx-auto my-10 gap-10">
    <div className="flex flex-col w-1/3 bg-white rounded-2xl py-2 px-2">

      <div className="flex flex-row border-gray-400 border-b-2 py-4">
        <div className="w-[100px] h-[100px] bg-pink-600 rounded-full items-center justify-center flex">
          <img
            src="/images/account.png"
            alt="profile"
            className="w-auto h-auto rounded-full"
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
        Cambiar contraseña
      </div>
      <div className=" text-gray-800 font-normal mx-10 grid grid-cols-2 gap-4">
        <div className="col-span-2">
        <h2 className="text-3xl mt-8 mb-2">Contraseña actual</h2>
        <input  type="text" className="h-16 w-full border-2 border-gray-500 rounded-2xl bg-pink-50"/>
        </div>
        <h2 className="text-3xl mt-2">Nueva contraseña</h2>
        <h2 className="text-3xl mt-2">Repetir nueva contraseña</h2>
        <input  type="text" className="h-16 border-2 border-gray-500 rounded-2xl bg-pink-50"/>
        <input  type="text" className="h-16 border-2 border-gray-500 rounded-2xl bg-pink-50"/>
      </div>

      <div className="mx-10 flex flex-row gap-8">
        <button className="bg-lime-500 text-white text-2xl font-semibold rounded-2xl p-4 px-20 mt-10">Aceptar</button>
        <button className="bg-pink-600 text-white text-2xl font-bold rounded-2xl p-4 px-20 mt-10">Cancelar</button>
      </div>
    </div>
  </div>
  );
}
