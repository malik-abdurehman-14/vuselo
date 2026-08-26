import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function Offers() {
  const cardsData = [
    {
      img: "/offer1.png",
      title: "Featured Product Offer",
      desc: "Save on selected VELO and VUSE products for a limited period.",
      link: "/",
    },
    {
      img: "/offer2.png",
      title: "Selected Product Bundles",
      desc: "Save on selected VELO and VUSE products for a limited period.",
      link: "/",
    },
    {
      img: "/offer3.png",
      title: "Discover the Latest",
      desc: "Save on selected VELO and VUSE products for a limited period.",
      link: "/",
    },
  ];
  return (
    <div className="flex flex-col gap-10 px-16 py-14 bg-black text-white">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-froozen space-grotesk">SAVE MORE</p>
        <p className="text-4xl font-extrabold space-grotesk">
          Exclusive <span className="text-froozen">Offers</span>
        </p>
      </div>
      {/* cards */}
      <div className="flex gap-5 w-full">
        {cardsData.map((item, index) => (
          <div
            key={index}
            className="group relative w-full h-[480px] overflow-hidden rounded-t-xl cursor-pointer"
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
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-bold text-white space-grotesk">
                  {item.title}
                </p>
                <p className="text-base text-white space-grotesk">
                  {item.desc}
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
        Discover Now <GoArrowUpRight />
      </a>
    </div>
  );
}

export default Offers;
