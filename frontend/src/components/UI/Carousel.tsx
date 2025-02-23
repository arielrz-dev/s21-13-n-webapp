"use client";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Usa los íconos de React Icons
import { Poppins } from "next/font/google";
import ProductCard from "../../components/ProductCard"; // Importa el nuevo componente

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

export default function Carousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isSliderReady, setIsSliderReady] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: products.length >= 4, // Solo habilita el loop si hay suficientes productos
      slides: { perView: 4, spacing: 10 }, // Mostrar 4 productos por vez
      slideChanged() {
        console.log('El slide ha cambiado');
      }
    }
  );

  useEffect(() => {
    fetch("/api/products") // Reemplaza con tu API real
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        if (instanceRef.current) {
          setIsSliderReady(true); // Marcar como listo una vez que los productos se han cargado
        }
      });
  }, []);

  const goToPrevious = () => {
    if (instanceRef.current && isSliderReady) {
      instanceRef.current.prev();
    }
  };

  const goToNext = () => {
    if (instanceRef.current && isSliderReady) {
      instanceRef.current.next();
    }
  };

  return (
    <div className={`${poppins.className} relative w-full flex justify-center items-center`}>
      <div className="absolute bg-black bg-opacity-50 min-h-10 w-full rounded-3xl text-center"></div>
      
      {/* Botón Izquierdo */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 z-10 p-2 bg-pink-700 text-white rounded-full shadow-md hover:bg-pink-600"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Carrusel */}
      <div ref={sliderRef} className="keen-slider w-full flex justify-between items-center mx-12">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>

      {/* Botón Derecho */}
      <button
        onClick={goToNext}
        className="absolute right-0 z-10 p-2 bg-pink-700 text-white rounded-full shadow-md hover:bg-pink-600"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}
