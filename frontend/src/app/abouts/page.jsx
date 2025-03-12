import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white p-4">
      <h1 className="text-2xl font-semibold text-center text-[#D23065]  pb-4 mb-2">
        CONTÁCTANOS
      </h1>

      <p className="mx-4 mb-4 text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut
        deleniti laudantium, praesentium corrupti voluptates illum cupiditate
        fugit eveniet, nemo voluptatibus doloribus exercitationem ipsum!
        Laboriosam labore architecto aliquid commodi unde? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Obcaecati aut deleniti laudantium,
        praesentium corrupti voluptates illum cupiditate fugit eveniet, nemo
        voluptatibus doloribus exercitationem ipsum! Labor
      </p>
      <div className="w-full max-w-md border border-[#D23065] bg-[#d2306613] bg-opacity-90 rounded-2xl shadow-lg p-6">
        <form className="mt-6">
          <div className="flex">
            <div>
              <label className="block font-semibold text-black">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28f1d5]"
                placeholder="Tu Nombre"
              />
            </div>
            <div>
              <label className="block font-semibold text-black">Apellido</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28f1d5]"
                placeholder="Tu Nombre"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <label className="block font-semibold text-black">
                Correo electronico
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28f1d5]"
                placeholder="Tu Nombre"
              />
            </div>
            <div>
              <label className="block font-semibold text-black">
                Numero de telefono
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28f1d5]"
                placeholder="Tu Nombre"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-semibold text-black">Contraseña</label>
            <textarea
              type=""
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28f1d5]"
              placeholder="******"
            />
          </div>
          <button className="w-full mt-6 bg-[#D23065] hover:bg-[#28f1d6bb] text-white font-semibold py-2 rounded-lg transition duration-300">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
