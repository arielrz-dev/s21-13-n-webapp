import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
        SOBRE NOSOTROS
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Imagen */}
        <div className="w-full md:w-1/2">
          <Image
            src="/image.png" // Asegúrate de colocar la imagen en la carpeta public
            alt="Heladería Fresko"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        {/* Contenido */}
        <div className="w-full md:w-1/2 text-gray-700">
          <p>
            En <strong className="text-pink-600">Fresko</strong>, convertimos cada antojo en una
            experiencia inolvidable. Somos una heladería argentina dedicada a la
            creación de helados artesanales elaborados con ingredientes de la más
            alta calidad. Nuestro compromiso es ofrecer sabores auténticos,
            texturas irresistibles y una experiencia única en cada bocado.
          </p>
          <p className="mt-4">
            Pero no nos detenemos ahí. En <strong className="text-pink-600">Fresko</strong>, llevamos la
            personalización al siguiente nivel, permitiéndote diseñar helados a
            tu medida, hechos con esmero para reflejar tus gustos y
            preferencias. Además, complementamos nuestra oferta con deliciosos
            postres, milkshakes cremosos y bebidas refrescantes, perfectos para
            cualquier ocasión.
          </p>
          <p className="mt-4">
            Cada producto que servimos es el resultado de pasión, dedicación y un
            profundo amor por lo artesanal. Creemos en el trabajo bien hecho, en
            la alegría de compartir y en el placer de disfrutar un buen helado.
            En <strong className="text-pink-600">Fresko</strong>, no solo vendemos helados, creamos momentos
            felices.
          </p>
          <p className="mt-6 text-pink-600 font-semibold text-lg">
            ¡Déjate sorprender y ven a descubrir el sabor de la verdadera calidad!
          </p>
        </div>
      </div>
    </section>
  );
}
