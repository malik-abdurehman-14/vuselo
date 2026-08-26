"use client";

import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <div className="flex flex-col gap-10 px-16 py-12 bg-black text-white">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-sm text-froozen space-grotesk">WHY ONE PLATFORM</p>
        <p className="text-4xl font-extrabold space-grotesk">
          Convenience and trust,
        </p>
        <p className="text-4xl font-extrabold text-froozen space-grotesk">
          under one standard.
        </p>
      </div>
      <div className="flex gap-6 w-full">
        <div className="w-[50%]">
          {" "}
          <img
            src="/about2.png"
            className="h-[400px] w-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between gap-4 w-[50%]">
          <p className="text-lg">
            We built VUSELO to bring clarity to a crowded shelf. Devices, pods
            and pouches, designed with the same intent: clean lines, reliable
            performance, and a ritual that feels considered down to the last
            detail.
          </p>
          <p className="text-lg">
            One shelf. One standard. Devices, pods, and pouches, built with the
            same intent — precision where it counts, restraint everywhere else.
            This is what a considered ritual looks like.
          </p>
          <p className="text-lg">
            VUSELO exists because shopping across two separate sites for pouches
            and devices is a worse experience. We fix that — without rewriting
            either brand's story.
          </p>
          <p className="text-lg">
            One shelf. One standard. Devices, pods, and pouches, built with the
            same intent — precision where it counts, restraint everywhere else.
            This is what a considered ritual looks like.
          </p>
          <a
            href="#"
            className="text-base text-froozen flex items-center gap-1"
          >
            View Collection <GoArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
