import ProductCard from "./ProductCard";

const ProductGrid = ({ products, isLoading }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-3">
            {isLoading ? (
                <div className="col-span-full flex justify-center items-center">
                    <span className="loading loading-spinner loading-lg text-pink-600"></span>
                </div>
            ) : products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))
            ) : (
                <div className="col-span-full flex justify-center items-center">
                    <p>No se encontraron productos.</p>
                </div>
            )}
        </div>
    );
};

export default ProductGrid;