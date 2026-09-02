"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaClock } from "react-icons/fa6";

function OffersBanner() {
  return (
    <section className="w-full">
      {/* Hero */}
      <div className="relative w-full h-[500px] lg:h-auto overflow-hidden">
        {/* Desktop Background Image */}
        <img
          src="/banner.png"
          alt="Exclusive Offers"
          className="hidden lg:block w-full h-auto"
        />

        {/* Mobile / Tablet Background Image */}
        <img
          src="/productHero.png"
          alt="Exclusive Offers"
          className="block lg:hidden absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 sm:bg-black/0" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-10 lg:justify-end lg:pr-16">
          <div className="flex max-w-lg flex-col gap-5 text-white sm:text-black">
            <p className="text-base space-grotesk text-froozen sm:text-black">
              A SIMPLER RITUAL
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold space-grotesk">
              EXCLUSIVE{" "}
              <span className="sm:text-white text-froozen">OFFERS</span>
            </h1>

            <p className="text-base sm:text-lg">
              Nicotine pouches are simple by design. No vapour, no charging,
              just a subtle way to enjoy your moment.
            </p>

            <a href="#" className="text-lg flex items-center gap-1">
              View Collection <GoArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="hidden lg:flex justify-between gap-5 px-16 bg-[#16191C]">
        <div className="flex flex-col gap-2 py-8">
          <p className="text-froozen text-base flex items-center gap-1 space-grotesk">
            <TbTruckDelivery size={20} />
            Delivered Discreetly
          </p>

          <p className="text-white text-lg space-grotesk">
            Fast, secure delivery to your door.
          </p>
        </div>

        <div className="flex flex-col gap-2 py-8 pl-6 border-l border-gray-400 -ml-6">
          <p className="text-froozen text-base flex items-center gap-1 space-grotesk">
            <AiFillSafetyCertificate size={20} />
            Adult Nicotine Consumers Only
          </p>

          <p className="text-white text-lg space-grotesk">
            Age verification on every order.
          </p>
        </div>

        <div className="flex flex-col gap-2 py-8 pl-6 border-l border-gray-400 -ml-6">
          <p className="text-froozen text-base flex items-center gap-1 space-grotesk">
            <FaClock size={20} />
            Made To Fit Your Life
          </p>

          <p className="text-white text-lg space-grotesk">
            Support whenever you need it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OffersBanner;
