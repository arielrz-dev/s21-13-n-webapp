"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductHeader from "./ProductHeader";
import SortDropdown from "./SortDropdown";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
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
            setIsLoading(true); 
            try {
                const res = await fetch(
                    `${API_BASE_URL}/products?type=${productType}&sort=${sort}&page=${page}`
                );
                if (!res.ok) throw new Error("Error al obtener productos");
                const data = await res.json();
                setProducts(data.content);
                setTotalPages(data.totalPages);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [productType, sort, page]); 

    const handlePageChange = (newPage) => {
        if (newPage >= 0 && newPage < totalPages) {
            query.set("page", newPage);
            router.push(`?${query.toString()}`);
        }
    };

    const handleSortChange = (event) => {
        query.set("sort", event.target.value);
        query.set("page", 0); // Resetear a la primera pagina
        router.push(`?${query.toString()}`);
    };

    return (
        <div className="container mx-auto px-20 my-10">
            <ProductHeader productType={productType} />
            <SortDropdown sort={sort} handleSortChange={handleSortChange} isLoading={isLoading} />
            <ProductGrid products={products} isLoading={isLoading} />
            <Pagination page={page} totalPages={totalPages} handlePageChange={handlePageChange} />
        </div>
    );
};

export default ProductList;