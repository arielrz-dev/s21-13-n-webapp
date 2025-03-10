import { useState } from "react";
import { motion } from "framer-motion";
import ButtonModal from "../Products/ButtonModal";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string; // Añade la descripción del producto
};

const ProductCard = ({ id, name, price, imageUrl, description }: ProductCardProps) => {
  const [imgSrc, setImgSrc] = useState(imageUrl);

  const handleImageError = () => {
    setImgSrc("/images/image-not-found.png");
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
          <motion.h2
            className="card-title text-black whitespace-nowrap"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            {name}
          </motion.h2>
          <span className="text-black">
            a partir de ${price.toFixed(2)}
          </span>

          <ButtonModal id={id} name={name} price={price} description={description} imageUrl={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;