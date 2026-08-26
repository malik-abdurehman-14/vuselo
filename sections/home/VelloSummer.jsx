"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function VelloSummer() {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden h-[650px]">
        {/* Background Image */}
        <img
          src="/summer.png"
          alt="Exclusive Offers"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start pl-16">
          <div className="flex max-w-lg flex-col gap-5 text-black">
            <h1 className="text-5xl font-extrabold space-grotesk leading-16">
              VELO SUMMER OFFERS SAVE
              <span className="text-white"> UP TO 50% </span>
            </h1>

            <p className="text-lg">
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
