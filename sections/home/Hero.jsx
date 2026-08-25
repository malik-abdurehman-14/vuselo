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
      <div className="relative z-10 flex max-w-2xl flex-col gap-4 px-16">
        <p className="text-base text-froozen space-grotesk">
          THE NEW STANDARDS IN NICOTINE
        </p>

        <h1 className="text-6xl font-extrabold space-grotesk">One Brand.</h1>

        <h1 className="text-6xl font-extrabold text-froozen space-grotesk">
          Every Format.
        </h1>
        <p className="text-white text-lg">
          Devices, pods and pouches. Designed for adults who know what they
          want, in one considered collection.
        </p>

        <div>
          <Button title="SHOP ALL" variant="dark" padding="px-4 py-2" />
        </div>
      </div>
      {/* bottom-content */}
      <div className="absolute bottom-0 z-10 w-full flex items-center justify-between gap-10 bg-black/85 backdrop-blur-3xl py-12 px-16">
        <div className="flex flex-col gap-2">
          <p className="text-froozen text-sm space-grotesk">YOUR FIRST MOVE</p>
          <p className="text-white text-xl space-grotesk">
            Try The Full System.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-froozen text-sm space-grotesk">
            OUR E-LIQUIDS CONTAIN NO ADDED SUCRALOSE.
          </p>
          <p className="text-white text-xl space-grotesk">
            High Quality Flavours
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-froozen text-sm space-grotesk">
            NEW TO VUSELO? GET YOUR FREE SAMPLE.
          </p>
          <p className="text-white text-xl space-grotesk">Try A Free Can</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
