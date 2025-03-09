"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const searchParams = useSearchParams();
    const router = useRouter();

    // Obtener parámetros de la URL
    const query = new URLSearchParams(searchParams.toString());
    const productType = searchParams.get("type") || "";
    const page = parseInt(searchParams.get("page")) || 0;
    const sort = searchParams.get("sort") || "id"; // Orden por defecto
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/products?sort=${sort}&page=${page}`);
                if (!res.ok) throw new Error("Error al obtener productos");
                const data = await res.json();
                setProducts(data.content);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, [sort, page]);

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            query.set("page", newPage);
            router.push(`?${query.toString()}`);
        }
    };

    const handleSortChange = (event) => {
        query.set("sort", event.target.value);
        query.set("page", 0); // Resetear a la primera página al cambiar el orden
        router.push(`?${query.toString()}`);
    };

    return (
        <div className="container mx-auto px-20 my-10">
            <div className="mx-4 mb-4">
                <h1 className="lg:text-6xl font-bold text-pink-600 mb-3">
                    {productType.toUpperCase() || "Todos"}
                </h1>
                <p className="text-black w-[95%] lg:text-lg">
                    Elige entre nuestra variedad de {productType.toLowerCase()} exclusivos, elaborados con la receta perfecta para brindarte una experiencia deliciosa en cada bocado.
                </p>
            </div>

            {/* Dropdown para ordenar */}
            <div className="flex justify-end mb-4">
                <select
                    value={sort}
                    onChange={handleSortChange}
                    className="select select-bordered max-w-xs text-white bg-pink-600 focus:bg-pink-500 hover:bg-pink-500"
                >
                    <option value="id">Ordenar por</option>
                    <option value="price">Precio (Menor a Mayor)</option>
                    <option value="price,desc">Precio (Mayor a Menor)</option>
                    <option value="name">Nombre (A-Z)</option>
                    <option value="name,desc">Nombre (Z-A)</option>
                </select>
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

            {/* Paginación */}
            <div className="join flex justify-center mt-6">
                <button 
                    className="join-item btn bg-pink-400 text-white hover:bg-pink-600" 
                    disabled={page === 0} 
                    onClick={() => handlePageChange(page - 1)}>
                    «
                </button>
                <button className="join-item btn" >Página {page + 1} de {totalPages}</button>
                <button 
                    className="join-item btn bg-pink-400 text-white hover:bg-pink-600" 
                    disabled={page >= totalPages - 1} 
                    onClick={() => handlePageChange(page + 1)}>
                    »
                </button>
            </div>
        </div>
    );
};

export default ProductList;

