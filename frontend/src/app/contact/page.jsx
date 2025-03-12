import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white p-4">
      <h1 className="text-2xl font-extrabold text-center text-[#D23065] pb-4 mb-2">
        CONTÁCTANOS
      </h1>

      <p className="mb-4 mx-8 text-black text-2xl">
        ¿Tienes alguna consulta, sugerencia o simplemente quieres saber más sobre nuestros deliciosos
        helados? En Fresko, estamos aquí para escucharte. Escríbenos y con gusto te atenderemos.
        ¡Tu opinión es importante para nosotros!
      </p>
      <div className="w-[900px] mt-8 max-w-2xl border border-[#D23065] bg-[#d2306613] bg-opacity-90 rounded-2xl shadow-lg p-6">
        <form className="grid gap-4">
          <div className="flex gap-4 border">
            <div className="border">
              <label className="block font-semibold text-black">Nombre <span className="text-[#D23065]">*</span> </label>
              <input
                type="text"
                className="w-full border-[#D23065] px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D23065]"
                placeholder="Tu Nombre"
              />
            </div>
            <div>
              <label className="block font-semibold text-black">Apellido <span className="text-[#D23065]">*</span> </label>
              <input
                type="text"
                className="w-full border-[#D23065] px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D23065]"
                placeholder="Tu Apellido"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <label className="block font-semibold text-black">
                Correo electrónico
                <span className="text-[#D23065]">*</span>
              </label>
              <input
                type="email"
                className="w-full border-[#D23065] px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D23065]"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div>
              <label className="block font-semibold text-black">
                Número de teléfono
                <span className="text-[#D23065]">*</span>
              </label>
              <input
                type="tel"
                className="w-full border-[#D23065] px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D23065]"
                placeholder="Tu Número"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-semibold text-black">Mensaje 
              <span className="text-[#D23065]">*</span>
            </label>
            <textarea
              className="w-full border-[#D23065] px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D23065]"
              placeholder="Escribe tu mensaje"
              rows="4"
            />
          </div>
          <button className="w-full border-[#D23065] mt-6 bg-[#D23065] hover:bg-[#d2306686] text-white font-semibold py-2 rounded-lg transition duration-300">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
