import { IoMdCart } from "react-icons/io";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

const ProductCard = ({ id, name, price, image, description }: ProductCardProps) => {
    
  return (
    <div className="keen-slider__slide p-5">
      <div className="card w-56 bg-white shadow-xl border-4 border-pink-600 min-h-72">
        <figure className="relative mx-2 mt-2 rounded-xl overflow-hidden h-40 min-h-40 max-h-40">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
          <h2 className="absolute bottom-[5px] text-sm text-white p-2  bg-black bg-opacity-50 rounded-lg hover:bg-opacity-70 ">
            {name}
          </h2>
        </figure>
        <div className="card-body p-4 pt-[2px]">
          <p className="text-[10px] text-center">{description}</p>
          <div className="flex-row flex justify-end">
            <p className="text-sm font-semibold text-pink-600 p-2">${price.toFixed(2)}</p>
            <button className=" text-pink-600 p-2 rounded-full hover:bg-pink-100" value={id}><IoMdCart size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
