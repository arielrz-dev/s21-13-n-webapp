import React from "react";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#D23065] pb-6">
        SOBRE NOSOTROS
      </h1>      

      <div className="flex flex-col md:flex-row items-center  p-8 ">
        <div className="w-full h-full md:w-1/2 flex justify-center ">
          <img 
            src="about.jfif" 
            alt="Descripción" 
            className="rounded-xl  shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 h-auto  justify-center px-6">
          <p className="text-gray-700 text-md leading-relaxed">
            En Fresko, convertimos cada antojo en una experiencia inolvidable. Somos una heladería argentina dedicada a la creación de helados artesanales elaborados con ingredientes de la más alta calidad. Nuestro compromiso es ofrecer sabores auténticos, texturas irresistibles y una experiencia única en cada bocado.
          </p>
          <p className="text-gray-700 text-md leading-relaxed mt-4">
            Pero no nos detenemos ahí. En Fresko, llevamos la personalización al siguiente nivel, permitiéndote diseñar helados a tu medida, hechos con esmero para reflejar tus gustos y preferencias. Además, complementamos nuestra oferta con deliciosos postres, milkshakes cremosos y bebidas refrescantes, perfectos para cualquier ocasión.
          </p>
          <p className="text-gray-700 text-md leading-relaxed mt-4">
            Cada producto que servimos es el resultado de pasión, dedicación y un profundo amor por lo artesanal. Creemos en el trabajo bien hecho, en la alegría de compartir y en el placer de disfrutar un buen helado. En Fresko, no solo vendemos helados, creamos momentos felices.
          </p>
          <p className="text-gray-900 text-md font-bold mt-4">
            ¡Déjate sorprender y ven a descubrir el sabor de la verdadera calidad!
          </p>
        </div>
      </div>
    </div>
  );
}
