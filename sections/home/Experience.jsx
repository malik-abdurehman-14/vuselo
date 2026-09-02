"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function Experience() {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden sm:h-[600px] h-[400px]">
        {/* Background Image */}
        <img
          src="/experience.png"
          alt="Exclusive Offers"
          className="block w-full h-full object-right"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/0" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center md:justify-end md:pr-16 md:p-0 p-5">
          <div className="flex max-w-lg flex-col gap-5 md:text-black text-white">
            <h1 className="sm:text-5xl text-3xl font-extrabold space-grotesk">
              THE VUSE{" "}
              <span className="md:text-white text-black">EXPERIENCE</span>
            </h1>

            <p className="text-lg">
              Each pod and device pairing is carefully designed to deliver
              expertly crafted flavour, with less toxicants*, ensuring a
              superior vaping experience every time.
            </p>

            <a href="#" className="text-lg flex items-center gap-1">
              View Collection <GoArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
