const ProductHeader = ({ productType }) => {
    return (
        <div className="mx-4 mb-4">
            <h1 className="lg:text-6xl font-bold text-pink-600 mb-3">
                {productType.toUpperCase() || "Todos"}
            </h1>
            <p className="text-black w-[95%] lg:text-lg">
                Elige entre nuestra variedad de {productType.toLowerCase()} exclusivos, elaborados con la receta perfecta para brindarte una experiencia deliciosa en cada bocado.
            </p>
        </div>
    );
};

export default ProductHeader;