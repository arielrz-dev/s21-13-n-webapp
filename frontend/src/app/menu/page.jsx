import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="bg-white w-full py-6 flex flex-row font-bold text-pink-600 text-3xl items-center justify-center gap-6">
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
        <h1 className="lg:text-6xl font-bold text-pink-600 mb-3 ">MENÚ</h1>
      </div>
      <div>
        <div className=" flex flex-row w-[60%] h-64 mx-auto border-4 border-pink-600 rounded-3xl mb-8">
          <div className="w-1/3 h-1/3">
          <img
            src="/images/menu-arma-tu-helado.jpg"
            alt="Logo"
            className="w-[386px] h-[250px] rounded-s-3xl"
          />
          </div>
          <div className="bg-white w-2/3 p-8 rounded-e-3xl">
            <h2 className="text-black font-bold text-4xl mb-2">
              ARMA TU HELADO
            </h2>
            <h2 className="text-pink-600 font-semibold text-3xl mb-4 ml-[10%]">
              Agrega tus ingredientes favoritos:
            </h2>
            <ul className="grid grid-cols-2 list-disc list-outside ml-[25%] text-2xl text-zinc-700 font-semibold">
              <li>Tamaño</li>
              <li>Toppings</li>
              <li>Sabores</li>
              <li>Extras</li>
              <li>Salsas</li>
              <li>Chips y confites</li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-row w-[60%] h-64 mx-auto border-4 border-pink-600 rounded-3xl mb-8">
        <div className="w-1/3 h-1/3">
          <img
            src="/images/menu-helados.jpg"
            alt="Logo"
            className="w-[386px] h-[250px] rounded-s-3xl"
          />
          </div>

          <Link href="/product?type=Helado" className="bg-white p-8 rounded-e-3xl w-2/3 ">
            <h2 className="text-black font-bold text-4xl mb-2">
              HELADOS
            </h2>
            <h2 className="text-pink-600 font-semibold text-3xl mb-4 ml-[10%]">
            Elige entre nuestros sabores exclusivos, creados para brindarte la mejor experiencia en cada porción.
            </h2>
          </Link>
        </div>

        <div className=" flex flex-row w-[60%] h-64 mx-auto border-4 border-pink-600 rounded-3xl mb-8">
        <div className="w-1/3 h-1/3">
          <img
            src="/images/menu-postres.jpg"
            alt="Logo"
            className="w-[386px] h-[250px] rounded-s-3xl"
          />
          </div>
          <div className="bg-white p-8 rounded-e-3xl w-2/3">
            <h2 className="text-black font-bold text-4xl mb-2">
              POSTRES
            </h2>
            <h2 className="text-pink-600 font-semibold text-3xl mb-4 ml-[10%]">
            Elige entre nuestros postres exclusivos, creados para brindarte una experiencia deliciosa en cada bocado.
            </h2>
          </div>
        </div>

        <div className=" flex flex-row w-[60%] h-64 mx-auto border-4 border-pink-600 rounded-3xl mb-8">
        <div className="w-1/3 h-1/3">
          <img
            src="/images/menu-tortas.jpg"
            alt="Logo"
            className="w-[386px] h-[250px] rounded-s-3xl"
          />
          </div>
          <div className="bg-white p-8 rounded-e-3xl w-2/3">
            <h2 className="text-black font-bold text-4xl mb-2">
              TORTAS
            </h2>
            <h2 className="text-pink-600 font-semibold text-3xl mb-4 ml-[10%]">
            Descubre nuestras tortas heladas, con la combinación perfecta de sabores y texturas para un placer refrescante en cada porción.
            </h2>
          </div>
        </div>

        <div className=" flex flex-row w-[60%] h-64 mx-auto border-4 border-pink-600 rounded-3xl mb-8">
        <div className="w-1/3 h-1/3">
          <img
            src="/images/menu-milkshakes.jpg"
            alt="Logo"
            className="w-[386px] h-[250px] rounded-s-3xl"
          />
          </div>
          <div className="bg-white w-2/3 p-8 rounded-e-3xl">
            <h2 className="text-black font-bold text-4xl mb-2">
              MILKSHAKES
            </h2>
            <h2 className="text-pink-600 font-semibold text-3xl mb-4 ml-[10%]">
            Explora nuestros milkshakes, con la mezcla perfecta de sabores y una textura cremosa para un placer refrescante en cada sorbo.
            </h2>
          </div>
        </div>

        <div className=" flex flex-row w-[60%] h-64 mx-auto border-4 border-pink-600 rounded-3xl mb-8">
        <div className="w-1/3 h-1/3">
          <img
            src="/images/menu-bebidas.jpg"
            alt="Logo"
            className="w-[386px] h-[250px] rounded-s-3xl"
          />
          </div>
          <div className="bg-white w-2/3 p-8 rounded-e-3xl">
            <h2 className="text-black font-bold text-4xl mb-2">
              BEBIDAS
            </h2>
            <h2 className="text-pink-600 font-semibold text-3xl mb-4 ml-[10%]">
            Descubre nuestras bebidas, preparadas con la combinación perfecta de sabores y una textura única para una experiencia deliciosa en cada trago.
            </h2>
          </div>
        </div>

        <div className=" flex flex-row w-[60%] h-64 mx-auto border-4 border-pink-600 rounded-3xl mb-8">
          <img
            src="/images/menu-promos.jpg"
            alt="Logo"
            className="w-[386px] h-[250px] rounded-s-3xl"
          />
          <div className="bg-white w-2/3 p-8 rounded-e-3xl">
            <h2 className="text-black font-bold text-4xl mb-2">
              PROMOS
            </h2>
            <h2 className="text-pink-600 font-semibold text-3xl mb-4 ml-[10%]">
            Promos irresistibles para ti, para dos o para compartir. ¡Disfruta más por menos!
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
}
