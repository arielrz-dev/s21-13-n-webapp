"use client";
// import { IoMdCart } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import ButtonModal from "../Products/ButtonModal";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;

};

const ProductCard = ({ id, name, price, imageUrl }: ProductCardProps) => {
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
      <div className="card w-full sm:w-72 bg-white shadow-xl border-2 sm:border-4 border-pink-600 min-h-[350px] sm:min-h-[400px] max-h-[400px] sm:max-h-[450px] rounded-xl overflow-hidden">
        <figure className="relative mx-2 mt-2 rounded-xl overflow-hidden h-48 sm:h-48">
          <img
            src={imgSrc}
            alt={name}
            className="object-cover w-full h-full"
            onError={handleImageError}
          />

        </figure>

        <div className="card-body p-3 sm:p-4 pt-[2px]">
          {/* <h2 className="card-title text-black line-clamp-2 min-h-[3.5rem]"> */}
          <motion.h2
            className="card-title text-black whitespace-nowrap"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            {name}
          </motion.h2>
          <span className="text-black">
            apartir de ${price.toFixed(2)} 
          </span>

          {/* <div className="flex-row flex justify-between items-center">
            <p className="text-xs sm:text-sm font-semibold text-pink-600 p-1 sm:p-2">${price.toFixed(2)}</p>
            <button onClick={addToCart} className="text-pink-600 p-1 sm:p-2 rounded-full hover:bg-pink-100">
              <IoMdCart size={16} />
            </button>
          </div> */}

          {/* <button className="mx-4 bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700" onClick={() => console.log(`Producto ${id} agregado al carrito. ${name} - ${price}`)}>
            ver detalles
          </button> */}

          <ButtonModal id={id} />


        </div>
      </div>
    </div>
  );
};

export default ProductCard;
