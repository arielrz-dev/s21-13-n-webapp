import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white p-4">
      <h1 className="text-2xl md:text-3xl font-extrabold text-center text-[#D23065] pb-4">
        CONTÁCTANOS
      </h1>

      <p className="text-center text-black text-lg md:text-xl mx-4 md:mx-12">
  ¿Tienes alguna consulta, sugerencia o simplemente quieres saber más sobre nuestros deliciosos
  helados? En Fresko, estamos aquí para escucharte. Escríbenos y con gusto te atenderemos.
  ¡Tu opinión es importante para nosotros!
</p>

      <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl mt-8 border border-[#D23065] bg-[#d2306613] rounded-2xl shadow-lg p-6">
        <form className="grid gap-4">
          
          {/* Nombre y Apellido */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <label className="block font-semibold text-black">Nombre <span className="text-[#D23065]">*</span> </label>
              <input
                type="text"
                className="w-full border-[#D23065] px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D23065]"
                placeholder="Tu Nombre"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block font-semibold text-black">Apellido <span className="text-[#D23065]">*</span> </label>
              <input
                type="text"
                className="w-full border-[#D23065] px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D23065]"
                placeholder="Tu Apellido"
              />
            </div>
          </div>

          {/* Correo y Teléfono */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <label className="block font-semibold text-black">
                Correo electrónico <span className="text-[#D23065]">*</span>
              </label>
              <input
                type="email"
                className="w-full border-[#D23065] px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D23065]"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block font-semibold text-black">
                Número de teléfono <span className="text-[#D23065]">*</span>
              </label>
              <input
                type="tel"
                className="w-full border-[#D23065] px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D23065]"
                placeholder="Tu Número"
              />
            </div>
          </div>

          {/* Mensaje */}
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

          {/* Botón */}
          <button className="w-full md:w-1/3 mx-auto mt-6 bg-[#D23065] hover:bg-[#d2306686] text-white font-semibold py-2 rounded-lg transition duration-300">
            Enviar
          </button>

        </form>
      </div>
    </div>
  );
}
