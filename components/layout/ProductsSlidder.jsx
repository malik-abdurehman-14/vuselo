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
    <section className="flex flex-col px-16 py-12 bg-black text-white">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          loop: true,
        }}
        className="w-full"
      >
        {/* Heading */}
        <div className="flex items-end justify-between gap-6 w-full mb-10">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-froozen space-grotesk">{shortTitle}</p>

            <p className="text-4xl font-extrabold space-grotesk">{heading1}</p>

            <p className="text-4xl font-extrabold text-froozen space-grotesk">
              {heading2}
            </p>
          </div>

          {/* Buttons */}
          <ProductSliderButtons />
        </div>

        {/* Cards */}
        <CarouselContent className="-ml-4">
          {cardsData.map((item, index) => (
            <CarouselItem key={index} className="pl-4 basis-1/3">
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
      </Carousel>
    </section>
  );
}

export default ProductsSlidder;
