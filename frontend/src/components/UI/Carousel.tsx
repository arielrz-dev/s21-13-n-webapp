"use client";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Poppins } from "next/font/google";
import ProductCard from "../../components/ProductCard";

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
      loop: products.length >= 1, // Siempre habilita el loop si hay al menos un producto
      slides: { 
        perView: "auto", 
        spacing: 5 
      },
      breakpoints: {
        "(min-width: 375px)": {
          slides: { perView: 1.2, spacing: 5 }
        },
        "(min-width: 640px)": {
          slides: { perView: 2.3, spacing: 5 }
        },
        "(min-width: 1024px)": {
          slides: { perView: 4, spacing: 5 }
        }
      },
      slideChanged() {
        console.log("El slide ha cambiado");
      },
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
