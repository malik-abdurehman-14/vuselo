"use client";

import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <div className="flex flex-col sm:gap-10 gap-7 lg:px-16 px-5 py-12 bg-black text-white">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-froozen space-grotesk">ABOUT VUSELO</p>
        <p className="sm:text-4xl text-3xl font-extrabold space-grotesk">
          One Considered
        </p>
        <p className="sm:text-4xl text-3xl font-extrabold text-froozen space-grotesk">
          Collection.
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-6 w-full">
        <div className="md:w-[50%] w-full">
          {" "}
          <img
            src="/about.png"
            className="h-[300px] w-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 md:w-[50%] w-full">
          <p className="sm:text-lg">
            We built VUSELO to bring clarity to a crowded shelf. Devices, pods
            and pouches, designed with the same intent: clean lines, reliable
            performance, and a ritual that feels considered down to the last
            detail.
          </p>
          <p className="sm:text-lg">
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
