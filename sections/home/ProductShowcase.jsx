"use client";

import ProductCard from "@/components/layout/ProductCard";
import { cardsData } from "@/data/products";
import React, { useState } from "react";

function ProductShowcase() {
  const tabs = ["Collection", "Devices", "Pods", "Pouches"];
  const [activeTab, setActiveTab] = useState("Collection");

  const filteredCards = cardsData
    .filter((item) => {
      if (activeTab === "Collection") {
        return true;
      }

      if (activeTab === "Devices") {
        return item.category === "vape";
      }

      if (activeTab === "Pods") {
        return item.category === "vape";
      }

      if (activeTab === "Pouches") {
        return item.category === "pouche";
      }

      return true;
    })
    .slice(0, 6);

  return (
    <div className="flex flex-col gap-10 px-16 py-12 bg-[#131415] text-white">
      <div className="flex items-end justify-between gap-6 w-full">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-froozen space-grotesk">FIND YOUR FORMAT</p>
          <p className="text-4xl font-extrabold space-grotesk">
            Made For The Way
          </p>
          <p className="text-4xl font-extrabold text-froozen space-grotesk">
            You Choose.
          </p>
        </div>
        {/* tabs */}
        <div className="flex items-center gap-6">
          {tabs.map((item, index) => {
            const isActive = activeTab === item;

            return (
              <button
                key={index}
                onClick={() => setActiveTab(item)}
                className={`
                  pb-2
                  text-base
                  cursor-pointer
                  transition-all
                  duration-300
                  border-b
                  ${
                    isActive
                      ? "text-froozen border-froozen"
                      : "text-white border-transparent hover:text-froozen hover:border-froozen"
                  }
                `}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      {/* cards */}
      <div className="grid grid-cols-3 gap-6">
        {filteredCards.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            desc={item.desc}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductShowcase;
