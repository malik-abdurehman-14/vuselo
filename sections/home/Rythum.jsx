import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function Rythum() {
  return (
    <div className="flex items-center justify-between gap-8 w-full px-16 py-14 bg-black text-white">
      <div className="flex flex-col gap-6 w-[50%]">
        <p className="text-base space-grotesk">STAY IN THE RYTHM</p>

        <h1 className="text-5xl font-extrabold space-grotesk w-[60%]">
          Never Run Out Of Your <span className="text-froozen">Ritual</span>
        </h1>

        <p className="text-lg">
          We built VUSELO to bring clarity to a crowded shelf. Devices, pods and
          pouches, designed with the same intent: clean lines, reliable
          performance, and a ritual that feels considered down to the last
          detail.
        </p>
        <p className="text-lg">
          One shelf. One standard. Devices, pods, and pouches, built with the
          same intent — precision where it counts, restraint everywhere else.
          This is what a considered ritual looks like.
        </p>

        <a href="#" className="text-lg text-froozen flex items-center gap-1">
          View Collection <GoArrowUpRight />
        </a>
      </div>
      <div className="w-[30%]">
        <img className="" src="/rythm.png" alt="" />
      </div>
    </div>
  );
}

export default Rythum;
