"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function VelloSummer() {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden sm:h-[650px] h-[500px]">
        {/* Background Image */}
        <img
          src="/summer.png"
          alt="Exclusive Offers"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start lg:pl-16 p-5">
          <div className="flex max-w-lg flex-col gap-5 text-black">
            <h1 className="sm:text-5xl text-3xl font-extrabold space-grotesk sm:leading-16">
              VELO SUMMER OFFERS SAVE
              <span className="text-white"> UP TO 50% </span>
            </h1>

            <p className="sm:text-lg text-base">
              Take advantage of our exclusive deals and offers on nicotine
              pouches, featuring a variety of flavours and strengths
            </p>

            <a href="#" className="text-lg text-black flex items-center gap-1">
              Shop Now <GoArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VelloSummer;
