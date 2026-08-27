"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import { RxCross2 } from "react-icons/rx";
import { cardsData } from "@/data/products";
import ProductCard from "@/components/layout/ProductCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function AllProducts() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Featured");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 6;

  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = cardsData.slice(startIndex, startIndex + cardsPerPage);

  const nicotine = ["4 mg", "6 mg", "8 mg", "10 mg", "15 mg"];

  const flavours = [
    "Mint",
    "Bluberry",
    "WaterMelon",
    "PineApple",
    "Apple",
    "Mango",
    "Citrus",
  ];

  const options = ["Featured", "New", "Hot Selling", "Bundles"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="flex gap-10 w-full justify-between bg-black text-white px-16 py-16">
      {/* filteration */}
      <div className="bg-[#242628] flex flex-col gap-6 rounded-md w-[25%] p-5">
        <div className="flex items-center justify-between">
          <p className="text-lg space-grotesk font-bold">Filters</p>
          <a className="text-gray-400 text-sm" href="/">
            Clear All
          </a>
        </div>
        {/* category */}
        <div className="flex flex-col gap-2 border-b border-gray-700 pb-3">
          <div className="flex items-center justify-between">
            <p className="text-lg space-grotesk font-bold">Category</p>
            <a href="/" className="">
              <IoIosArrowDown size={16} />
            </a>
          </div>
          {/* btns */}
          <div className="flex items-center gap-3">
            <Button title="Pouches" variant="light" padding="px-3 py-1" />
            <Button title="Devices & Pods" variant="dark" padding="px-3 py-1" />
          </div>
        </div>
        {/* brands */}
        <div className="flex flex-col gap-2 border-b border-gray-700 pb-3">
          <div className="flex items-center justify-between">
            <p className="text-lg space-grotesk font-bold">Brands</p>
            <a href="/" className="">
              <IoIosArrowDown size={16} />
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <CheckBox
              label="VELO (24)"
              checked={selectedBrands.includes("VELO")}
              onChange={(checked) => {
                setSelectedBrands((prev) =>
                  checked
                    ? [...prev, "VELO"]
                    : prev.filter((brand) => brand !== "VELO"),
                );
              }}
            />
            <CheckBox
              label="VUSE (18)"
              checked={selectedBrands.includes("VUSE")}
              onChange={(checked) => {
                setSelectedBrands((prev) =>
                  checked
                    ? [...prev, "VUSE"]
                    : prev.filter((brand) => brand !== "VUSE"),
                );
              }}
            />
          </div>
        </div>
        {/* nicotine */}
        <div className="flex flex-col gap-2 border-b border-gray-700 pb-3">
          <div className="flex items-center justify-between">
            <p className="text-lg space-grotesk font-bold">Nicotine Strength</p>
            <a href="/" className="">
              <IoIosArrowDown size={16} />
            </a>
          </div>
          <div className="flex flex-col gap-2">
            {nicotine.map((item, index) => (
              <CheckBox
                key={index}
                label={item}
                checked={selectedBrands.includes(item)}
                onChange={(checked) => {
                  setSelectedBrands((prev) =>
                    checked
                      ? [...prev, item]
                      : prev.filter((brand) => brand !== item),
                  );
                }}
              />
            ))}
          </div>
        </div>
        {/* flavours */}
        <div className="flex flex-col gap-2 border-b border-gray-700 pb-3">
          <div className="flex items-center justify-between">
            <p className="text-lg space-grotesk font-bold">Flavours</p>
            <a href="/" className="">
              <IoIosArrowDown size={16} />
            </a>
          </div>
          <div className="flex flex-col gap-2">
            {flavours.map((item, index) => (
              <CheckBox
                key={index}
                label={item}
                checked={selectedBrands.includes(item)}
                onChange={(checked) => {
                  setSelectedBrands((prev) =>
                    checked
                      ? [...prev, item]
                      : prev.filter((brand) => brand !== item),
                  );
                }}
              />
            ))}
          </div>
        </div>
        {/* size */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-lg space-grotesk font-bold">Size</p>
            <a href="/" className="">
              <IoIosArrowDown size={16} />
            </a>
          </div>
          {/* btns */}
          <div className="flex items-center gap-3">
            <Button title="Slim" variant="dark" padding="px-4 py-1" />
            <Button title="Mini" variant="light" padding="px-4 py-1" />
          </div>
        </div>
      </div>
      {/* right-side */}
      <div className="flex flex-col gap-8 w-[75%]">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <p className="bg-black text-froozen px-4 py-1 rounded-full flex items-center gap-1 border border-froozen">
              <RxCross2 className="cursor-pointer" />
              pouches
            </p>
            <a className="text-gray-400 text-base underline" href="/">
              Clear All
            </a>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-gray-400">Sort By: </p>
            <div className="relative">
              {/* Selected */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-white cursor-pointer"
              >
                <span className="text-sm space-grotesk">{selected}</span>

                {isOpen ? (
                  <IoIosArrowUp size={14} />
                ) : (
                  <IoIosArrowDown size={14} />
                )}
              </button>

              {/* Dropdown */}
              {isOpen && (
                <div className="absolute right-0 top-full z-50 mt-3 min-w-[160px] rounded-md bg-[#242628] py-2 shadow-lg">
                  {options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelect(option)}
                      className={`w-full px-4 py-2 text-left text-sm cursor-pointer transition-colors duration-200 ${
                        selected === option
                          ? "text-froozen"
                          : "text-white hover:text-froozen"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="grid grid-cols-3 gap-6">
          {currentCards.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              desc={item.desc}
              title={item.title}
              price={item.price}
              bgColor="bg-[#242628]"
            />
          ))}
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 pt-6">
          {/* Previous */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 ${
              currentPage === 1
                ? "text-gray-600 cursor-not-allowed"
                : "text-white hover:bg-froozen hover:text-black"
            }`}
          >
            ←
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            const isActive = currentPage === page;

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-7 h-7 rounded-md flex items-center justify-center text-sm font-medium cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-froozen text-black"
                    : "bg-transparent text-white hover:bg-froozen hover:text-black"
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* Next */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 ${
              currentPage === totalPages
                ? "text-gray-600 cursor-not-allowed"
                : "text-white hover:bg-froozen hover:text-black"
            }`}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
