"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://intimate-chinchilla-equipo-s21-13-n-webapp-f92794e5.koyeb.app/api/v1/products?${query}`
        );
        if (!res.ok) throw new Error("Error al obtener productos");
        const data = await res.json();
        setProducts(data.content);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <div className="col-span-full flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-pink-600"></span>
        </div>
      )}
    </div>
  );
};

export default ProductList;
