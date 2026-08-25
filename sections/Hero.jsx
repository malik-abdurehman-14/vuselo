"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

function Hero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-black py-10 text-white">
      {/* Background Image */}
      <Image src="/hero.png" alt="" fill priority className="object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex max-w-xl flex-col gap-4 px-20">
        <p className="text-base text-froozen">THE NEW STANDARDS IN NICOTINE</p>

        <h1 className="text-6xl font-extrabold">One Brand.</h1>

        <h1 className="text-6xl font-extrabold text-froozen">Every Format.</h1>
        <p className="text-white text-lg">
          Devices, pods and pouches. Designed for adults who know what they
          want, in one considered collection.
        </p>

        <div>
          <Button title="SHOP ALL" variant="dark" textColor="text-froozen" />
        </div>
      </div>
      {/* bottom-content */}
      <div className="absolute bottom-0 z-10 w-full flex items-center justify-between gap-10 bg-black/85 backdrop-blur-3xl py-12 px-20">
        <div className="flex flex-col gap-2">
          <p className="text-froozen text-sm">YOUR FIRST MOVE</p>
          <p className="text-white text-xl">Try The Full System.</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-froozen text-sm">
            OUR E-LIQUIDS CONTAIN NO ADDED SUCRALOSE.
          </p>
          <p className="text-white text-xl">High Quality Flavours</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-froozen text-sm">
            NEW TO VUSELO? GET YOUR FREE SAMPLE.
          </p>
          <p className="text-white text-xl">Try A Free Can</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
