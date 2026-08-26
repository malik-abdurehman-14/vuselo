import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function FlavoursDisplay() {
  const cardsData = [
    {
      img: "/flavour1.jpg",
      title: "Mint Citrus",
      link: "/",
    },
    {
      img: "/flavour2.jpg",
      title: "Berry",
      link: "/",
    },
    {
      img: "/flavour3.jpg",
      title: "Tropical",
      link: "/",
    },
  ];
  return (
    <div className="flex flex-col gap-10 px-16 py-14 bg-black text-white">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-froozen space-grotesk">FLAVOUR DISCOVERY</p>
        <p className="text-4xl font-extrabold space-grotesk">
          Explore The <span className="text-froozen">Flavour Range</span>
        </p>
      </div>
      {/* cards */}
      <div className="flex gap-5 w-full">
        {cardsData.map((item, index) => (
          <div
            key={index}
            className="group relative w-full h-[400px] overflow-hidden rounded-t-xl cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Bottom Black Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-8">
              {/* Text */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <div className="bg-black/40 backdrop-blur-2xl px-2 py-1 rounded-lg text-froozen text-sm">
                    Velo
                  </div>
                  <div className="bg-black/40 backdrop-blur-2xl px-2 py-1 rounded-lg text-froozen text-sm">
                    Vuse
                  </div>
                </div>
                <p className="text-2xl font-bold text-white space-grotesk">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="text-base text-froozen flex items-center justify-center w-full gap-1"
      >
        View Collection <GoArrowUpRight />
      </a>
    </div>
  );
}

export default FlavoursDisplay;
