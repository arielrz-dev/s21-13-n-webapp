"use client";
import React from 'react'

export default function Eliminarcuenta() {
  return (
<div>
  <div className="w-full md:w-3/3 bg-white rounded-xl">
    {/* Título */}
    <div className="w-full h-auto bg-pink-600 text-white text-base md:text-xl font-bold rounded-t-xl p-1 pl-3 md:pl-6">
      Eliminar tu cuenta
    </div>

    {/* Contenido principal */}
    <div className="text-gray-800 font-normal mx-2 md:mx-4 grid grid-cols-1 md:grid-cols-2 gap-2 my-3 md:my-4">
      {/* Correo electrónico y Contraseña*/}
      <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <h2 className="text-sm md:text-base mt-2">Ingresar correo electrónico</h2>
          <input
            type="text"
            className="h-8 md:h-10 w-full border-2 border-gray-500 rounded-lg bg-pink-50"
          />
        </div>
        <div>
          <h2 className="text-sm md:text-base mt-2">Contraseña</h2>
          <input
            type="text"
            className="h-8 md:h-10 w-full border-2 border-gray-500 rounded-lg bg-pink-50"
          />
        </div>
      </div>
    </div>

    {/* Botones */}
    <div className="mx-2 md:mx-4 flex flex-col md:flex-row gap-1 md:gap-2 mt-3 md:mt-4">
      <button className="bg-lime-500 text-white text-sm md:text-base font-semibold rounded-lg p-1 md:p-2 w-full md:w-auto md:px-8">
        Aceptar
      </button>
      <button className="bg-pink-600 text-white text-sm md:text-base font-bold rounded-lg p-1 md:p-2 w-full md:w-auto md:px-8">
        Cancelar
      </button>
    </div>
  </div>
</div>
  );
}
