"use client";

import { GoArrowUpRight } from "react-icons/go";

function Rythum() {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between sm:gap-8 gap-5 w-full lg:px-16 px-5 py-14 bg-black text-white">
      <div className="flex flex-col sm:gap-6 gap-4 md:w-[60%] w-full">
        <p className="text-base space-grotesk">STAY IN THE RYTHM</p>

        <h1 className="sm:text-5xl text-3xl font-extrabold space-grotesk w-[65%]">
          Never Run Out Of Your <span className="text-froozen">Ritual</span>
        </h1>

        <p className="sm:text-lg text-base">
          We built VUSELO to bring clarity to a crowded shelf. Devices, pods and
          pouches, designed with the same intent: clean lines, reliable
          performance, and a ritual that feels considered down to the last
          detail.
        </p>
        <p className="sm:text-lg text-base">
          One shelf. One standard. Devices, pods, and pouches, built with the
          same intent — precision where it counts, restraint everywhere else.
          This is what a considered ritual looks like.
        </p>

        <a href="#" className="text-lg text-froozen flex items-center gap-1">
          View Collection <GoArrowUpRight />
        </a>
      </div>
      <div className="md:w-[40%] w-auto flex items-center">
        <img className="h-[400px]" src="/rythm.png" alt="" />
      </div>
    </div>
  );
}

export default Rythum;
