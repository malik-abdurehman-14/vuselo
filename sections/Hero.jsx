"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

function Hero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-black px-20 py-10 text-white">
      {/* Background Image */}
      <Image src="/hero.png" alt="" fill priority className="object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex max-w-xl flex-col gap-6">
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
    </section>
  );
}

export default Hero;
