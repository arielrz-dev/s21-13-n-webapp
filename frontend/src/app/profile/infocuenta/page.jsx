"use client";
import React, { useState } from 'react';

export default function Infocuenta() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
<div>
  {/* Título */}
  <div className="w-full h-auto bg-pink-600 text-white text-base md:text-xl font-bold rounded-t-xl p-1 pl-3 md:pl-6">
    Información de tu cuenta
  </div>

  {/* Contenido principal */}
  <div className="text-gray-800 font-normal mx-2 md:mx-4 grid grid-cols-1 md:grid-cols-2 gap-2">
    {/* Nombre y Apellido en una fila */}
    <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <h2 className="text-sm md:text-base mt-2 md:mt-4">Nombre(s)</h2>
        <input
          type="text"
          className="h-8 md:h-10 w-full border-2 border-gray-500 rounded-lg bg-pink-50"
        />
      </div>
      <div>
        <h2 className="text-sm md:text-base mt-2 md:mt-4">Apellido(s)</h2>
        <input
          type="text"
          className="h-8 md:h-10 w-full border-2 border-gray-500 rounded-lg bg-pink-50"
        />
      </div>
    </div>

    {/* Correo Electrónico y Fecha de nacimiento en una fila */}
    <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <h2 className="text-sm md:text-base mt-2">Correo Electrónico</h2>
        <input
          type="text"
          className="h-8 md:h-10 w-full border-2 border-gray-500 rounded-lg bg-pink-50"
        />
      </div>
      <div>
        <h2 className="text-sm md:text-base mt-2">Fecha de nacimiento</h2>
        <input
          type="date"
          className="h-8 md:h-10 w-full border-2 border-gray-500 rounded-lg bg-pink-50 px-2 md:px-3"
        />
      </div>
    </div>

    {/* Género */}
    <h2 className="text-gray-500 font-normal text-sm md:text-base my-2 col-span-1 md:col-span-2">
      Género
    </h2>

    {/* Opciones de género */}
    <div className="col-span-1 md:col-span-2">
      <div className="text-gray-800 font-normal flex flex-col md:flex-row gap-1">
        <label className="flex items-center space-x-1">
          <input
            type="radio"
            name="option"
            value="hombre"
            checked={selectedOption === "hombre"}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-4 h-4"
          />
          <span className="text-sm md:text-base">Hombre</span>
        </label>

        <label className="flex items-center space-x-1">
          <input
            type="radio"
            name="option"
            value="mujer"
            checked={selectedOption === "mujer"}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-4 h-4"
          />
          <span className="text-sm md:text-base">Mujer</span>
        </label>
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
  );
}