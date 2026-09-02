"use client";

import ProductCard from "./ProductCard";
import { cardsData } from "@/data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function ProductSliderButtons() {
  const { scrollPrev, scrollNext } = useCarousel();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={scrollPrev}
        className="bg-black text-froozen hover:text-black hover:bg-froozen border-froozen border hover:border-black py-1 px-3 rounded-md cursor-pointer transition-colors duration-300"
      >
        <FaArrowLeftLong size={16} />
      </button>

      <button
        onClick={scrollNext}
        className="bg-black text-froozen hover:text-black hover:bg-froozen border-froozen border hover:border-black py-1 px-3 rounded-md cursor-pointer transition-colors duration-300"
      >
        <FaArrowRightLong size={16} />
      </button>
    </div>
  );
}

function ProductsSlidder({ shortTitle, heading1, heading2 }) {
  return (
    <section className="flex flex-col lg:px-16 px-5 py-12 bg-black text-white">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          loop: true,
        }}
        className="w-full"
      >
        {/* Heading */}
        <div className="flex sm:items-end items-center sm:justify-between justify-center gap-6 w-full mb-10">
          <div className="flex flex-col sm:items-start items-center gap-2">
            <p className="text-sm text-froozen space-grotesk">{shortTitle}</p>

            <p className="sm:text-4xl text-3xl font-extrabold space-grotesk">
              {heading1}
            </p>

            <p className="sm:text-4xl text-3xl font-extrabold text-froozen space-grotesk">
              {heading2}
            </p>
          </div>

          {/* Buttons */}
          <div className="sm:block hidden">
            <ProductSliderButtons />
          </div>
        </div>

        {/* Cards */}
        <CarouselContent className="-ml-4 sm:mb-0 mb-10">
          {cardsData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <ProductCard
                img={item.img}
                desc={item.desc}
                title={item.title}
                price={item.price}
                bgColor="bg-[#131415]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* mobile-Buttons */}
        <div className="sm:hidden flex justify-center w-full">
          <ProductSliderButtons />
        </div>
      </Carousel>
    </section>
  );
}

export default ProductsSlidder;
