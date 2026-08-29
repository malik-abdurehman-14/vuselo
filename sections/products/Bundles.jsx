"use client";

import BundleCard from "@/components/layout/BundleCard";
import { Button } from "@/components/ui/Button";

function Bundles() {
  const bundles = [
    {
      title: "3 for £12",
      desc1: "Mix & Match Pouches",
      desc2: "Choose any 3 pouch cans. Was £14.97",
      saving: "£2.97",
      img: "/sec2-2.png",
    },
    {
      title: "3 for £12",
      desc1: "Mix & Match Pouches",
      desc2: "Choose any 3 pouch cans. Was £14.97",
      saving: "£2.97",
      img: "/sec2-2.png",
    },
    {
      title: "3 for £12",
      desc1: "Mix & Match Pouches",
      desc2: "Choose any 3 pouch cans. Was £14.97",
      saving: "£2.97",
      img: "/sec2-2.png",
    },
  ];
  return (
    <div className="flex flex-col gap-7 px-16 py-12 bg-gray-50 text-black">
      <p className="text-3xl font-extrabold space-grotesk">
        Bundles & Multi-buys
      </p>
      <div className="grid grid-cols-3 gap-6">
        {bundles.map((item, index) => (
          <BundleCard
            key={index}
            img={item.img}
            title={item.title}
            desc1={item.desc1}
            desc2={item.desc2}
            saving={item.saving}
          />
        ))}
      </div>
      <div className="flex gap-7 w-full my-4">
        {/* left-side */}
        <div className="w-[70%] bg-white rounded-lg flex items-center gap-6">
          <img
            className="rounded-l-lg h-[200px] object-contain"
            src="/offer1.png"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <p className="text-3xl space-grotesk font-bold group-hover:text-froozen">
              Build Your Bundle
            </p>
            <p>
              Pick your device, pair it with pods or pouches — save up to 25%
              when you mix formats.
            </p>
            <p className="text-lg font-bold">From £14.99</p>
            <Button
              title="Start building"
              variant="light"
              width="w-fit"
              padding="py-1 px-5"
            />
          </div>
        </div>
        {/* right-side */}
        <div className="w-[30%] bg-white rounded-lg flex flex-col gap-3 p-5">
          <p className="bg-froozen rounded-md text-xs py-1 px-2 w-fit">
            SUBSCRIBE
          </p>
          <p className="flex items-end gap-1">
            <p className="text-2xl space-grotesk font-extrabold">From £3.49</p>
            <p className="text-sm mb-1">per pack</p>
          </p>
          <p>Delivered on your schedule</p>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold">•</span>
              <p className="text-xs text-gray-600">15% off every delivery.</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-extrabold">•</span>
              <p className="text-xs text-gray-600">
                Pause, skip, or cancel anytime.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-extrabold">•</span>
              <p className="text-xs text-gray-600">
                Free delivery on all subscriptions.
              </p>
            </div>
          </div>
          <Button
            title="Set up subscription"
            variant="black"
            width="w-full"
            padding="py-2 px-4"
          />
        </div>
      </div>
      {/* alert */}
      <div className="w-full bg-[#E63946] rounded-lg p-3 text-sm text-white font-bold">
        Offers are subject to availability and may be withdrawn at any time.
        Offers cannot be combined unless stated otherwise. All products are
        intended for adult nicotine consumers only (18+). Full terms and
        conditions apply.
      </div>
    </div>
  );
}

export default Bundles;
