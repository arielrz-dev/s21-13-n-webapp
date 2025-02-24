// import CarouselPrueba from "@/components/CarouselPrueba";
import IceCreamCard from "@/components/UI/IceCreamCard";
import Carousel from "@/components/UI/Carousel";


export default function Home() {

  return (
    <>
      <IceCreamCard />
      <div className="flex justify-center items-center lg:mt-16 lg:mx-28">
        <Carousel />
      </div>
    </>
  );

}