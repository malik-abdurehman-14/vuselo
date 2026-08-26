"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function Experience() {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="/experience.png"
          alt="Exclusive Offers"
          className="block w-full h-auto"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-end pr-16">
          <div className="flex max-w-lg flex-col gap-5 text-black">
            <h1 className="text-5xl font-extrabold space-grotesk">
              THE VUSE <span className="text-white">EXPERIENCE</span>
            </h1>

            <p className="text-lg">
              Each pod and device pairing is carefully designed to deliver
              expertly crafted flavour, with less toxicants*, ensuring a
              superior vaping experience every time.
            </p>

            <a href="#" className="text-lg text-black flex items-center gap-1">
              View Collection <GoArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
