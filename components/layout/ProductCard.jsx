"use client";

import Link from "next/link";
import { useState } from "react";
import Drawer from "../ui/Drawer";
import { Button } from "../ui/Button";
import { BsDot } from "react-icons/bs";
import { FaRegCircleQuestion } from "react-icons/fa6";
import QuantityBtn from "../ui/QuantityBtn";

function ProductCard({ img, desc, title, price, bgColor = "bg-black" }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [purchaseType, setPurchaseType] = useState("one-time");
  const [pouchSize, setPouchSize] = useState("Mini");
  const [nicotineStrength, setNicotineStrength] = useState("4mg");

  return (
    <>
      <Link
        href="product-details"
        className="flex flex-col w-full cursor-pointer group overflow-hidden"
      >
        <div className={`relative ${bgColor} items-center justify-center flex`}>
          <img
            className="transition-transform duration-700 ease-out group-hover:scale-105"
            src={img}
            alt=""
          />
          <div className="absolute top-3 right-3 bg-froozen py-1 px-2 text-black space-grotesk text-sm rounded-sm">
            New
          </div>
        </div>
        <div className="flex items-end justify-between gap-5 py-4 border-b border-gray-500">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-froozen space-grotesk">
              {desc}{" "}
              <span className="text-red-700 text-base"> Contain Nicotine</span>
            </p>
            <p className="text-xl space-grotesk font-bold">{title}</p>
            <p className="text-xl text-froozen space-grotesk">{price}</p>
          </div>
          <Link href="">
            <Button
              onClick={() => setDrawerOpen(true)}
              title="Add +"
              variant="light"
              padding="px-6 py-1"
            />
          </Link>
        </div>
      </Link>
      {/* side-drawer */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="relative flex flex-col gap-4 w-full">
          {/* uper-div */}
          <div className="flex flex-col items-center justify-center gap-3 p-7 w-full">
            <h2 className="text-3xl font-bold space-grotesk">
              Bright Spearmint
            </h2>
            <p className="">15 Nicotine pouches per can</p>
            {/* purchase-type */}
            <div className="flex flex-col gap-3 w-full mt-3">
              <p className="text-xl font-bold">Purchase type:</p>
              {/* one-time */}
              <div
                onClick={() => setPurchaseType("one-time")}
                className={`flex items-center justify-between border p-4 rounded-lg cursor-pointer transition-all group ${
                  purchaseType === "one-time"
                    ? "bg-froozen/20 border-froozen"
                    : "border-gray-600 hover:bg-froozen/20 hover:border-froozen"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Radio */}
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      purchaseType === "one-time"
                        ? "border-froozen"
                        : "border-gray-500"
                    }`}
                  >
                    {purchaseType === "one-time" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-froozen" />
                    )}
                  </div>

                  <div>
                    <p className="text-lg font-bold">One-Time</p>
                    <p className="text-gray-500 text-sm">
                      <span className="text-black font-bold">£5.00</span> per
                      can
                    </p>
                  </div>
                </div>

                <p
                  className={`font-bold text-xs p-2 rounded-md border ${
                    purchaseType === "one-time"
                      ? "text-black bg-froozen border-white"
                      : "text-black border-froozen group-hover:bg-froozen"
                  }`}
                >
                  MULTIBUY DEALS
                </p>
              </div>
              {/* subscribe */}
              <div
                onClick={() => setPurchaseType("subscribe")}
                className={`flex items-center justify-between border p-4 rounded-lg cursor-pointer transition-all group ${
                  purchaseType === "subscribe"
                    ? "bg-froozen/20 border-froozen"
                    : "border-gray-600 hover:bg-froozen/20 hover:border-froozen"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Radio */}
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      purchaseType === "subscribe"
                        ? "border-froozen"
                        : "border-gray-500"
                    }`}
                  >
                    {purchaseType === "subscribe" && (
                      <div className="w-2.5 h-2.5 rounded-full bg-froozen" />
                    )}
                  </div>

                  <div>
                    <p className="text-lg font-bold">Subscribe</p>
                    <p className="text-gray-500 text-sm">
                      <span className="text-black font-bold">From £2.50</span>{" "}
                      per can
                    </p>
                  </div>
                </div>

                <p
                  className={`font-bold text-xs p-2 rounded-md border ${
                    purchaseType === "subscribe"
                      ? "text-black bg-froozen border-white"
                      : "text-black border-froozen group-hover:bg-froozen"
                  }`}
                >
                  BEST PRICE
                </p>
              </div>
            </div>
            {/* Pouch Size */}
            <div className="flex flex-col gap-3 w-full mt-3">
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Pouch Size:</p>
                <FaRegCircleQuestion />
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPouchSize("Mini")}
                  className={`text-base rounded-full p-2 w-full border border-froozen cursor-pointer transition-colors ${
                    pouchSize === "Mini"
                      ? "bg-froozen text-black font-bold"
                      : "bg-white text-black hover:bg-froozen"
                  }`}
                >
                  Mini
                </button>

                <button
                  type="button"
                  onClick={() => setPouchSize("Slim")}
                  className={`text-base rounded-full p-2 w-full border border-froozen cursor-pointer transition-colors ${
                    pouchSize === "Slim"
                      ? "bg-froozen text-black font-bold"
                      : "bg-white text-black hover:bg-froozen"
                  }`}
                >
                  Slim
                </button>
              </div>
            </div>
            {/* Nicotine Strength */}
            <div className="flex flex-col gap-3 w-full mt-3">
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">Nicotine Strength:</p>
                <FaRegCircleQuestion />
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setNicotineStrength("4mg")}
                  className={`text-base rounded-full p-2 w-full border border-froozen cursor-pointer transition-colors ${
                    nicotineStrength === "4mg"
                      ? "bg-froozen text-black font-bold"
                      : "bg-white text-black hover:bg-froozen"
                  }`}
                >
                  4mg
                </button>
                <button
                  type="button"
                  onClick={() => setNicotineStrength("6mg")}
                  className={`text-base rounded-full p-2 w-full border border-froozen cursor-pointer transition-colors ${
                    nicotineStrength === "6mg"
                      ? "bg-froozen text-black font-bold"
                      : "bg-white text-black hover:bg-froozen"
                  }`}
                >
                  6mg
                </button>
              </div>
            </div>
            {/* saving */}
            <div className="flex flex-col gap-3 w-full mt-3">
              <p className="text-xl font-bold">Save up to 40% with multibuy</p>
              <div className="flex items-center gap-3">
                <div className="w-full flex flex-col gap-1 items-center">
                  <div className="bg-white text-black font-bold border border-froozen rounded-full p-3 w-full text-center">
                    +3
                  </div>
                  <p className="font-bold">Save 15%</p>
                  <p className="font-light">£4/can</p>
                </div>
                <div className="w-full flex flex-col gap-1 items-center">
                  <div className="bg-white text-black font-bold border border-froozen rounded-full p-3 w-full text-center">
                    +5
                  </div>
                  <p className="font-bold">Save 20%</p>
                  <p className="font-light">£4/can</p>
                </div>
                <div className="w-full flex flex-col gap-1 items-center">
                  <div className="bg-white text-black font-bold border border-froozen rounded-full p-3 w-full text-center">
                    +10
                  </div>
                  <p className="font-bold">Save 30%</p>
                  <p className="font-light">£4/can</p>
                </div>
                <div className="w-full flex flex-col gap-1 items-center">
                  <div className="bg-white text-black font-bold border border-froozen rounded-full p-3 w-full text-center">
                    +20
                  </div>
                  <p className="font-bold">Save 40%</p>
                  <p className="font-light">£4/can</p>
                </div>
              </div>
            </div>
          </div>
          {/* highlight-line */}
          <div className="bg-froozen font-bold text-center w-full p-3">
            UP TO 40% OFF WITH MULTIBUY
          </div>
        </div>
        <div className="absolute bottom-0 w-full shadow-[0_-8px_20px_rgba(0,0,0,0.15)] p-5 flex flex-col gap-3 items-center">
          <div className="flex items-center gap-3 w-full">
            <QuantityBtn variant="dark" />
            <Button
              title="ADD TO CART"
              variant="light"
              width="w-[70%]"
              padding="p-3"
            />
          </div>
          <p className="text-sm">Earn 10 points per £1 spent</p>
        </div>
      </Drawer>
    </>
  );
}

export default ProductCard;
