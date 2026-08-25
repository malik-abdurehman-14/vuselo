import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <div className="flex flex-col gap-10 px-16 py-12 bg-black text-white">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-froozen space-grotesk">ABOUT VUSELO</p>
        <p className="text-4xl font-extrabold space-grotesk">One Considered</p>
        <p className="text-4xl font-extrabold text-froozen space-grotesk">
          Collection.
        </p>
      </div>
      <div className="flex gap-6 w-full">
        <div className="w-[50%]">
          {" "}
          <img
            src="/about.png"
            className="h-[300px] w-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 w-[50%]">
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
