"use client";

import Link from "next/link";
import { useState } from "react";
import Drawer from "../ui/Drawer";
import { Button } from "../ui/Button";
import { FaRegCircleQuestion } from "react-icons/fa6";
import QuantityBtn from "../ui/QuantityBtn";

function ProductCard({ img, desc, title, price, bgColor = "bg-black" }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [purchaseType, setPurchaseType] = useState("one-time");
  const [pouchSize, setPouchSize] = useState("Mini");
  const [nicotineStrength, setNicotineStrength] = useState("4mg");

  return (
    <>
      {/* Product Card */}
      <div className="flex flex-col w-full group overflow-hidden">
        {/* Product Image / Details */}
        <Link
          href="/product-details"
          className="flex flex-col w-full cursor-pointer"
        >
          <div
            className={`relative ${bgColor} items-center justify-center flex`}
          >
            <img
              className="transition-transform duration-700 ease-out group-hover:scale-105"
              src={img}
              alt={title}
            />

            <div className="absolute top-3 right-3 bg-froozen py-1 px-2 text-black space-grotesk text-sm rounded-sm">
              New
            </div>
          </div>

          <div className="flex items-end justify-between gap-5 py-4 border-b border-gray-500">
            <div className="flex flex-col gap-0.5">
              <p className="text-sm text-froozen space-grotesk">
                {desc}{" "}
                <span className="text-red-700 text-base">Contain Nicotine</span>
              </p>

              <p className="text-xl space-grotesk font-bold">{title}</p>

              <p className="text-xl text-froozen space-grotesk">{price}</p>
            </div>
          </div>
        </Link>

        {/* Add Button */}
        <div className="flex justify-end -mt-[52px] pr-0 relative z-10">
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDrawerOpen(true);
            }}
            title="Add +"
            variant="light"
            padding="px-6 py-1"
          />
        </div>
      </div>

      {/* Side Drawer */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="relative h-full flex flex-col">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto pb-[140px]">
            <div className="flex flex-col items-center justify-center gap-3 sm:p-7 p-5 w-full">
              <h2 className="sm:text-3xl text-2xl font-bold space-grotesk">
                Bright Spearmint
              </h2>

              <p>15 Nicotine pouches per can</p>

              {/* Purchase Type */}
              <div className="flex flex-col gap-3 w-full mt-3">
                <p className="sm:text-xl text-lg font-bold">Purchase type:</p>

                {/* One Time */}
                <div
                  onClick={() => setPurchaseType("one-time")}
                  className={`flex sm:flex-row flex-col sm:items-center justify-between border sm:p-4 p-3 gap-2 rounded-lg cursor-pointer transition-all group ${
                    purchaseType === "one-time"
                      ? "bg-froozen/20 border-froozen"
                      : "border-gray-600 hover:bg-froozen/20 hover:border-froozen"
                  }`}
                >
                  <div className="flex items-center gap-4">
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
                      <p className="sm:text-lg text-base font-bold">One-Time</p>

                      <p className="text-gray-500 text-sm">
                        <span className="text-black font-bold">£5.00</span> per
                        can
                      </p>
                    </div>
                  </div>

                  <p
                    className={`font-bold text-xs p-2 rounded-md border w-fit ${
                      purchaseType === "one-time"
                        ? "text-black bg-froozen border-white"
                        : "text-black border-froozen group-hover:bg-froozen"
                    }`}
                  >
                    MULTIBUY DEALS
                  </p>
                </div>

                {/* Subscribe */}
                <div
                  onClick={() => setPurchaseType("subscribe")}
                  className={`flex sm:flex-row flex-col gap-2 sm:items-center justify-between border sm:p-4 p-3 rounded-lg cursor-pointer transition-all group ${
                    purchaseType === "subscribe"
                      ? "bg-froozen/20 border-froozen"
                      : "border-gray-600 hover:bg-froozen/20 hover:border-froozen"
                  }`}
                >
                  <div className="flex items-center gap-4">
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
                      <p className="sm:text-lg text-base font-bold">
                        Subscribe
                      </p>

                      <p className="text-gray-500 text-sm">
                        <span className="text-black font-bold">From £2.50</span>{" "}
                        per can
                      </p>
                    </div>
                  </div>

                  <p
                    className={`font-bold text-xs p-2 rounded-md border w-fit ${
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
                  <p className="sm:text-xl text-lg font-bold">Pouch Size:</p>

                  <FaRegCircleQuestion />
                </div>

                <div className="flex items-center gap-3">
                  {["Mini", "Slim"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setPouchSize(size)}
                      className={`text-base rounded-full p-2 w-full border border-froozen cursor-pointer transition-colors ${
                        pouchSize === size
                          ? "bg-froozen text-black font-bold"
                          : "bg-white text-black hover:bg-froozen"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nicotine Strength */}
              <div className="flex flex-col gap-3 w-full mt-3">
                <div className="flex items-center justify-between">
                  <p className="sm:text-xl text-lg font-bold">
                    Nicotine Strength:
                  </p>

                  <FaRegCircleQuestion />
                </div>

                <div className="flex items-center gap-3">
                  {["4mg", "6mg"].map((strength) => (
                    <button
                      key={strength}
                      type="button"
                      onClick={() => setNicotineStrength(strength)}
                      className={`text-base rounded-full p-2 w-full border border-froozen cursor-pointer transition-colors ${
                        nicotineStrength === strength
                          ? "bg-froozen text-black font-bold"
                          : "bg-white text-black hover:bg-froozen"
                      }`}
                    >
                      {strength}
                    </button>
                  ))}
                </div>
              </div>

              {/* Saving */}
              <div className="flex flex-col gap-3 w-full mt-3">
                <p className="sm:text-xl text-lg font-bold">
                  Save up to 40% with multibuy
                </p>

                <div className="grid sm:grid-cols-4 grid-cols-2 items-center gap-3">
                  {[
                    ["+3", "Save 15%"],
                    ["+5", "Save 20%"],
                    ["+10", "Save 30%"],
                    ["+20", "Save 40%"],
                  ].map(([qty, saving]) => (
                    <div
                      key={qty}
                      className="w-full flex flex-col gap-1 items-center"
                    >
                      <div className="bg-white text-black font-bold border border-froozen rounded-full p-3 w-full text-center">
                        {qty}
                      </div>

                      <p className="font-bold">{saving}</p>

                      <p className="font-light">£4/can</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlight */}
            <div className="bg-froozen sm:font-bold text-center w-full sm:p-3 p-2">
              UP TO 40% OFF WITH MULTIBUY
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="absolute bottom-0 w-full bg-white shadow-[0_-8px_20px_rgba(0,0,0,0.15)] sm:p-5 p-4 flex flex-col gap-3 items-center">
          <div className="flex items-center gap-3 w-full">
            <QuantityBtn variant="dark" className="sm:p-3 p-2" />

            <Button
              title="ADD TO CART"
              variant="light"
              width="w-[70%]"
              padding="sm:p-3 p-2"
            />
          </div>

          <p className="text-sm">Earn 10 points per £1 spent</p>
        </div>
      </Drawer>
    </>
  );
}

export default ProductCard;
