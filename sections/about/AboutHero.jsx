"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { GoArrowUpRight } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaClock } from "react-icons/fa6";

function AboutHero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden py-10 md:text-black text-white">
      {/* Background Image */}
      <Image
        src="/aboutHero.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 md:bg-black/20 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex max-w-2xl flex-col gap-4 lg:px-16 px-5">
        <p className="text-base md:text-black text-white space-grotesk">
          ABOUT VUSELO
        </p>

        <h1 className="sm:text-6xl text-4xl font-extrabold space-grotesk">
          One Platform. Two Brands You
        </h1>

        <h1 className="sm:text-6xl text-4xl font-extrabold md:text-white text-froozen space-grotesk">
          Already Trust.
        </h1>
        <p className="text-lg">
          Devices, pods and pouches. Designed for adults who know what they
          want, in one considered collection.
        </p>
      </div>
      {/* bottom-content */}
      {/* <div className="absolute bottom-0 z-10 w-full flex justify-between gap-5 px-16 bg-[#16191C]">
        <div className="flex flex-col gap-2 py-8">
          <p className="text-froozen text-base flex items-center gap-1 space-grotesk">
            <TbTruckDelivery size={20} /> Delivered Discreetly
          </p>
          <p className="text-white text-lg space-grotesk">
            Fast, secure delivery to your door.
          </p>
        </div>
        <div className="flex flex-col gap-2 py-8 pl-6 border-l border-gray-400 -ml-8">
          <p className="text-froozen text-base flex items-center gap-1 space-grotesk">
            <AiFillSafetyCertificate size={20} /> Adult Nicotine Consumers Only
          </p>
          <p className="text-white text-lg space-grotesk">
            Age verification on every order.
          </p>
        </div>
        <div className="flex flex-col gap-2 py-8 pl-6 border-l border-gray-400 -ml-8">
          <p className="text-froozen text-base flex items-center gap-1 space-grotesk">
            <FaClock size={20} /> Made To Fit Your Life
          </p>
          <p className="text-white text-lg space-grotesk">
            Support whenever you need it.
          </p>
        </div>
      </div> */}
    </section>
  );
}

export default AboutHero;
