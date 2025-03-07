"use client";
// import { IoMdCart } from "react-icons/io";
import { useState } from "react";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
 
};

const ProductCard = ({ id, name, price, imageUrl}: ProductCardProps) => {
  const [imgSrc, setImgSrc] = useState(imageUrl);

  // const addToCart = () => {
  //   console.log(`Producto ${id} agregado al carrito. ${name} - ${price}`);
  //   //  Zustand para manejar el carrito (luego pensar como hacerlo  )
  // };

  const handleImageError = () => {
    setImgSrc("/images/image-not-found.png"); // Imagen por defecto
  };

  return (
    <div className="keen-slider__slide p-3 sm:p-5">
      <div className="card w-full sm:w-56 bg-white shadow-xl border-2 sm:border-4 border-pink-600 min-h-[250px] sm:min-h-[300px] max-h-[250px] sm:max-h-[300px] rounded-xl overflow-hidden">
        <figure className="relative mx-2 mt-2 rounded-xl overflow-hidden h-32 sm:h-40">
          <img
            src={imgSrc}
            alt={name}
            className="object-cover w-full h-full"
            onError={handleImageError}
          />

        </figure>

        <div className="card-body p-3 sm:p-4 pt-[2px]">
          <h2 className="text-black card-title">
            {name}
          </h2>
          <span className="text-black">
            apartir de ${price.toFixed(2)}
          </span>

          {/* <div className="flex-row flex justify-between items-center">
            <p className="text-xs sm:text-sm font-semibold text-pink-600 p-1 sm:p-2">${price.toFixed(2)}</p>
            <button onClick={addToCart} className="text-pink-600 p-1 sm:p-2 rounded-full hover:bg-pink-100">
              <IoMdCart size={16} />
            </button>
          </div> */}
          <button className="bg-pink-600 text-white p-2 rounded-xl hover:bg-pink-700" onClick={() => console.log(`Producto ${id} agregado al carrito. ${name} - ${price}`)}>
            ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
