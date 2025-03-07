"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import {motion} from "framer-motion";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const searchParams = useSearchParams();
    const query = searchParams.toString();
    const productType = searchParams.get("type") || "";

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
        <div className="container mx-auto px-20 my-10">

            <div 
                // initial={{ opacity: 0, y: 20 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5 }}
            className="mx-4 mb-4">
                
                <h1 className="lg:text-6xl font-bold text-pink-600 mb-3">
                    {productType.toUpperCase() || "Todos"}
                </h1>

                {/* <span className="text-black">
                    {products.length} productos encontrados
                </span> */}
                <p className="text-black w-[95%] lg:text-lg">
                    Elige entre nuestra variedad de {productType.toLowerCase()} exclusivos, elaborados con la receta perfecta para brindarte una experiencia deliciosa en cada bocado.
                </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-3">
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
        </div>

    );
};

export default ProductList;
