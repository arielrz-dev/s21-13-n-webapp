import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="bg-white w-full py-4 flex flex-row font-bold text-pink-600 text-base flex-wrap md:flex-nowrap md:text-lg md:gap-6 lg:text-lg xl:text-lg items-center justify-center gap-6">
        <h2>VER TODO</h2>
        <h2>ARMA TU HELADO</h2>
        <h2>HELADOS</h2>
        <h2>POSTRES</h2>
        <h2>TORTAS</h2>
        <h2>MILKSHAKES</h2>
        <h2>BEBIDAS</h2>
        <h2>PROMOS</h2>
      </div>
      <div className="ml-[20%] my-10">
        <h1 className="text-3xl flex-wrap md:flex-nowrap md:text-4xl md:gap-6 lg:text-5xl xl:text-5xl font-bold text-pink-600 mb-3 ">
          MENÚ
        </h1>
      </div>
      <div>
        <div className="max-w-4xl mx-auto bg-white mb-4 border-4 border-pink-600 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="w-full md:w-1/3">
            <img
              src="/images/menu-arma-tu-helado.jpg"
              alt="Helado con conos"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-3/3">
            <h2 className="text-lg flex-wrap md:flex-nowrap md:text-xl md:gap-6 lg:text-2xl xl:text-2xl font-bold text-black">
              ARMA TU HELADO
            </h2>
            <p className="text-pink-600 text-base flex-wrap md:flex-nowrap md:text-lg md:gap-6 lg:text-xl xl:text-xl font-bold ml-6">
              Agrega tus ingredientes favoritos:
            </p>
            <div className="flex gap-4 mt-2 ml-16 text-gray-700 font-bold">
              <ul className="list-disc list-inside">
                <li>
                  <span className="text-zinc-700">Tamaño</span>
                </li>
                <li>
                  <span className="text-zinc-700">Sabores</span>
                </li>
                <li>
                  <span className="text-zinc-700">Salsas</span>
                </li>
              </ul>
              <ul className="list-disc list-inside">
                <li>
                  <span className="text-zinc-700">Toppings</span>
                </li>
                <li>
                  <span className="text-zinc-700">Extras</span>
                </li>
                <li>
                  <span className="text-zinc-700">Chips y confites</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white mb-4 border-4 border-pink-600 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="w-full md:w-1/3">
            <img
              src="/images/menu-helados.jpg"
              alt="Helado con conos"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-3/3">
            <h2 className="text-lg flex-wrap md:flex-nowrap md:text-xl md:gap-6 lg:text-2xl xl:text-2xl font-bold text-black">
              HELADOS
            </h2>
            <p className="text-pink-600 text-base flex-wrap md:flex-nowrap md:text-lg md:gap-6 lg:text-xl xl:text-xl font-bold ml-6">
            Elige entre nuestros sabores exclusivos, creados para brindarte la mejor experiencia en cada porción.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white mb-4 border-4 border-pink-600 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="w-full md:w-1/3">
            <img
              src="/images/menu-postres.jpg"
              alt="Helado con conos"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-3/3">
            <h2 className="text-lg flex-wrap md:flex-nowrap md:text-xl md:gap-6 lg:text-2xl xl:text-2xl font-bold text-black">
            POSTRES
            </h2>
            <p className="text-pink-600 text-base flex-wrap md:flex-nowrap md:text-lg md:gap-6 lg:text-xl xl:text-xl font-bold ml-6">
            Elige entre nuestros postres exclusivos, creados para brindarte una experiencia deliciosa en cada bocado.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white mb-4 border-4 border-pink-600 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="w-full md:w-1/3">
            <img
              src="/images/menu-tortas.jpg"
              alt="Helado con conos"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-3/3">
            <h2 className="text-lg flex-wrap md:flex-nowrap md:text-xl md:gap-6 lg:text-2xl xl:text-2xl font-bold text-black">
            TORTAS
            </h2>
            <p className="text-pink-600 text-base flex-wrap md:flex-nowrap md:text-lg md:gap-6 lg:text-xl xl:text-xl font-bold ml-6">
            Descubre nuestras tortas heladas, con la combinación perfecta de sabores y texturas para un placer refrescante en cada porción.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white mb-4 border-4 border-pink-600 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="w-full md:w-1/3">
            <img
              src="/images/menu-milkshakes.jpg"
              alt="Helado con conos"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-3/3">
            <h2 className="text-lg flex-wrap md:flex-nowrap md:text-xl md:gap-6 lg:text-2xl xl:text-2xl font-bold text-black">
            MILKSHAKES
            </h2>
            <p className="text-pink-600 text-base flex-wrap md:flex-nowrap md:text-lg md:gap-6 lg:text-xl xl:text-xl font-bold ml-6">
            Explora nuestros milkshakes, con la mezcla perfecta de sabores y una textura cremosa para un placer refrescante en cada sorbo.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white mb-4 border-4 border-pink-600 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="w-full md:w-1/3">
            <img
              src="/images/menu-bebidas.jpg"
              alt="Helado con conos"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-3/3">
            <h2 className="text-lg flex-wrap md:flex-nowrap md:text-xl md:gap-6 lg:text-2xl xl:text-2xl font-bold text-black ">
            BEBIDAS
            </h2>
            <p className="text-pink-600 text-base flex-wrap md:flex-nowrap md:text-lg md:gap-6 lg:text-xl xl:text-xl font-bold ml-6">
            Descubre nuestras bebidas, preparadas con la combinación perfecta de sabores y una textura única para una experiencia deliciosa en cada trago.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white mb-4 border-4 border-pink-600 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-lg">
          <div className="w-full md:w-1/3">
            <img
              src="/images/menu-promos.jpg"
              alt="Helado con conos"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-3/3">
            <h2 className="text-lg flex-wrap md:flex-nowrap md:text-xl md:gap-6 lg:text-2xl xl:text-2xl font-bold text-black">
            PROMOS
            </h2>
            <p className="text-pink-600 text-base flex-wrap md:flex-nowrap md:text-lg md:gap-6 lg:text-xl xl:text-xl font-bold ml-6">
            Promos irresistibles para ti, para dos o para compartir. ¡Disfruta más por menos!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
