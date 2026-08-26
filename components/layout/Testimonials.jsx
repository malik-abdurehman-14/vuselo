"use client";

import { FaStar } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";

function TestimonialButtons() {
  const { scrollPrev, scrollNext } = useCarousel();

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={scrollPrev}
        className="bg-black text-froozen hover:text-black hover:bg-froozen border-froozen border hover:border-black p-2 rounded-full cursor-pointer transition-colors duration-300"
      >
        <IoIosArrowBack size={20} />
      </button>

      <button
        onClick={scrollNext}
        className="bg-black text-froozen hover:text-black hover:bg-froozen border-froozen border hover:border-black p-2 rounded-full cursor-pointer transition-colors duration-300"
      >
        <IoIosArrowForward size={20} />
      </button>
    </div>
  );
}

function Testimonials() {
  const data = [
    {
      name: "Michael Grants",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: "CEO of Alibaba.com",
      img: "/testimonial.png",
      rating: 4.5,
    },
    {
      name: "Sarah Wilson",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: "Marketing Director",
      img: "/testimonial.png",
      rating: 3.5,
    },
    {
      name: "David Miller",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: "Founder of TechCorp",
      img: "/testimonial.png",
      rating: 5,
    },
    {
      name: "James Anderson",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: "CEO of DesignHub",
      img: "/testimonial.png",
      rating: 4.5,
    },
    {
      name: "Emma Roberts",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: "Creative Director",
      img: "/testimonial.png",
      rating: 5,
    },
    {
      name: "Daniel Smith",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      position: "Business Owner",
      img: "/testimonial.png",
      rating: 4,
    },
  ];

  return (
    <section className="flex flex-col gap-10 py-16 bg-black text-white">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-4xl font-extrabold space-grotesk">
          Don't Take our word for it.
        </p>

        <p className="text-4xl text-froozen font-extrabold space-grotesk">
          Over 100+ people trust us.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-12 bg-gradient-to-r from-black via-black/80 to-transparent" />

        {/* Right shade */}
        <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-12 bg-gradient-to-l from-black via-black/80 to-transparent" />
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 1,
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="mb-10">
            {data.map((item, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/3">
                {/* Card */}
                <div className="relative flex h-full min-h-[230px] flex-col justify-between gap-4 overflow-hidden rounded-lg bg-froozen p-6">
                  {/* Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                    {/* Description */}
                    <p className="text-lg space-grotesk text-white">
                      {item.desc}
                    </p>

                    {/* Bottom */}
                    <div className="flex items-center justify-between gap-4">
                      {/* User */}
                      <div className="flex items-center gap-2">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={item.img}
                          alt={item.name}
                        />

                        <div>
                          <p className="text-lg font-bold space-grotesk">
                            {item.name}
                          </p>

                          <p className="text-sm space-grotesk">
                            {item.position}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-0.5 text-yellow-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <FaStar key={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom buttons MUST be inside Carousel */}
          <TestimonialButtons />
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
