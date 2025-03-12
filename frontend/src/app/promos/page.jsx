import React from "react";

const categories = [
  { title: "PROMO PERSONAL", description: "Ideal para consertirte" },
  { title: "PROMO PARA DOS", description: "El plan perfecto para disfrutar en pareja o con un amigo" },
  { title: "PROMO PARA COMPARTIR", description: "Perfecta para disfrutar en grupo" },
];

const products = [
  {
    id: 1,
    name: "ANTOJO EXPRESS",
    description: "Un capricho dulce ideal para cualquier momento. Incluye:",
    features: [
      "✔️ 1 Strawberry Shake (Mediano) – Cremoso, refrescante y con el auténtico sabor de la fruta.",
      <br />, 
      "✔️ 1 Cheesecake Clásico (porción individual) – Dulce con el punto justo y casero ."
    ],
    oldPrice: "$ 250.00",
    price: "$ 180.00",
    image: "/images/promopersonal01.webp",
    discount: "28% OFF",
    category: 0,
  },
  {
    id: 2,
    name: "DULCE MOMENTO",
    description: "El break perfecto para consentirte. Incluye:",
    features: [
      "✔️ 1 Iced Coffee (Mediano) – Refrescante y equilibrado.",
      <br />, 
      "✔️ 1 Torta Helada Individual (sabor a elección) – Pequeña, pero llena de sabor.",
      <br />,
      "✔️ 1 Brownie de Chocolate – Textura suave y un intenso sabor a chocolate."
    ],
    oldPrice: "$ 250.00",
    price: "$ 150.00",
    image: "/images/promopersonal02.webp",
    discount: "40% OFF",
    category: 0,
  },
  {
    id: 3,
    name: "DÚO DELICIOSO",
    description: "Un combo pensado para compartir el placer de un buen postre. Incluye:",
    features: [
      "✔️ 2 Milkshakes (sabores a elección, Mediano) – Cremosos y llenos de sabor.",
      <br />, 
      "✔️ 1 Torta Helada Cookies & Cream (4 porciones) – Base crujiente y crema intensa de galleta.",
      <br />,
      "✔️ 2 Bebidas a elección (Limonada Frozen o Iced Coffee) – Refrescantes y perfectas para acompañar."
    ],
    oldPrice: "$ 400.00",
    price: "$ 200.00",
    image: "/images/promoparados01.webp",
    discount: "50% OFF",
    category: 1,
  },
  {
    id: 4,
    name: "DOBLE TENTACIÓN",
    description: "Dos opciones irresistibles para disfrutar juntos. Incluye:",
    features: [
      "✔️ 1 Cheesecake Clásico (4 porciones) – Suave, cremoso y con un toque de vainilla.",
      <br />, 
      "✔️ 2 Milkshakes (Chocolate o Vainilla, Mediano c/u) – La combinación perfecta de cremosidad y sabor.",
      <br />,
      "✔️ 2 Brownies rellenos de Chocolate– El toque final para una experiencia deliciosa."
    ],
    oldPrice: "$ 450.00",
    price: "$ 225.00",
    image: "/images/promoparados02.webp",
    discount: "50% OFF",
    category: 1,
  },
  {
    id: 5,
    name: "FIESTA HELADA",
    description: "Perfecta para reuniones y compartir con amigos o familia. Incluye:",
    features: [
      "✔️ 1 Torta Helada Choco Tentación (8 porciones) – Deliciosa, cremosa y con el auténtico sabor del cacao.",
      <br />, 
      "✔️ 4 Limonadas Frozen (Mediano) – Bebidas súper refrescantes.",
      <br />,
      "✔️ 3 Cheesecakes Clásicos – Porciones rellenas de sabor."
    ],
    oldPrice: "$ 600.00",
    price: "$ 360.00",
    image: "/images/promocompartir01.webp",
    discount: "40% OFF",
    category: 2,
  },
  {
    id: 6,
    name: "DULZURA XL",
    description: "Un combo para los amantes de lo dulce en grande. Incluye:",
    features: [
      "✔️ 1 Torta Helada Mango Pasión (8 porciones) – Esponjosa, con crema de queso y el toque clásico de mango.",
      <br />, 
      "✔️ 2 Iced Coffee (Mediano) – Perfectos para equilibrar el dulzor.",
      <br />,
      "✔️ 6 porciones de Tartas de Manzana – Una explosión de sabor en cada mordida."
    ],
    oldPrice: "$ 650.00",
    price: "$ 440.00",
    image: "/images/promocompartir02.webp",
    discount: "32% OFF",
    category: 2,
  },
];

const Promos = () => {
  return (
    <div className="p-4 bg-white w-full">
      <h1 className="text-4xl font-extrabold mb-4 text-left text-pink-600">PROMOS</h1>
      <h2 className="text-black font-medium text-xl">Promos irresistibles para ti, para dos o para compartir.
        <span className="text-black font-bold text-xl"> ¡Disfruta más por menos!</span>
      </h2>

      {categories.map((category, index) => (
        <div key={index}>
          <h2 className="text-3xl font-bold mt-6 mb-4 text-left text-pink-600">
            {category.title}
            <span className="text-xl text-black ml-2">({category.description})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products
              .filter((product) => product.category === index)
              .map((product) => (
                <div
                  key={product.id}
                  className="flex bg-white p-4 rounded-lg shadow-lg items-center border-4 border-pink-600"
                >
                  {/* Botón OFF e Imagen */}
                  <div className="relative w-1/3">
                    <button className="top-2 left-0 bg-lime-300 text-black border border-black font-bold py-1 my-2 px-4 rounded-xl text-sm">
                      {product.discount}
                    </button>
                    <img src={product.image} alt={product.name} className="w-full rounded-lg" />
                  </div>

                  {/* Detalles del Producto */}
                  <div className="w-2/3 pl-4">
                    <h3 className="text-3xl font-semibold mb-4 text-pink-600">{product.name}</h3>
                    <p className="text-black text-sm mb-4">{product.description}</p>
                    <p className="text-black text-sm mb-4">{product.features}</p>
                    <div className="mt-2">
                      <span className="text-pink-600 text-2xl font-bold mr-2">{product.price}</span>
                      <span className="text-black font-semibold text-base line-through">{product.oldPrice}</span>
                    </div>
                    <button className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-pink-700 transition-all">
                      Agregar al pedido
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Promos;
