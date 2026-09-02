"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import Drawer from "@/components/ui/Drawer";
import ProductCard from "@/components/layout/ProductCard";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { cardsData } from "@/data/products";

function FilterContent({ selectedBrands, setSelectedBrands }) {
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

  const toggleValue = (value, checked) => {
    setSelectedBrands((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value),
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-lg space-grotesk font-bold">Filters</p>

        <button
          type="button"
          onClick={() => setSelectedBrands([])}
          className="text-gray-400 text-sm cursor-pointer hover:text-white"
        >
          Clear All
        </button>
      </div>

      {/* Category */}
      <div className="flex flex-col gap-2 border-b border-gray-700 pb-3">
        <div className="flex items-center justify-between">
          <p className="text-lg space-grotesk font-bold">Category</p>

          <IoIosArrowDown size={16} />
        </div>

        <div className="flex xl:flex-row flex-col xl:items-center gap-3">
          <Button title="Pouches" variant="light" padding="px-3 py-1" />

          <Button title="Devices & Pods" variant="dark" padding="px-3 py-1" />
        </div>
      </div>

      {/* Brands */}
      <div className="flex flex-col gap-2 border-b border-gray-700 pb-3">
        <div className="flex items-center justify-between">
          <p className="text-lg space-grotesk font-bold">Brands</p>

          <IoIosArrowDown size={16} />
        </div>

        <div className="flex flex-col gap-2">
          {["VELO", "VUSE"].map((brand) => (
            <CheckBox
              key={brand}
              label={`${brand} (${brand === "VELO" ? "24" : "18"})`}
              checked={selectedBrands.includes(brand)}
              onChange={(checked) => toggleValue(brand, checked)}
            />
          ))}
        </div>
      </div>

      {/* Nicotine */}
      <div className="flex flex-col gap-2 border-b border-gray-700 pb-3">
        <div className="flex items-center justify-between">
          <p className="text-lg space-grotesk font-bold">Nicotine Strength</p>

          <IoIosArrowDown size={16} />
        </div>

        <div className="flex flex-col gap-2">
          {nicotine.map((item) => (
            <CheckBox
              key={item}
              label={item}
              checked={selectedBrands.includes(item)}
              onChange={(checked) => toggleValue(item, checked)}
            />
          ))}
        </div>
      </div>

      {/* Flavours */}
      <div className="flex flex-col gap-2 border-b border-gray-700 pb-3">
        <div className="flex items-center justify-between">
          <p className="text-lg space-grotesk font-bold">Flavours</p>

          <IoIosArrowDown size={16} />
        </div>

        <div className="flex flex-col gap-2">
          {flavours.map((item) => (
            <CheckBox
              key={item}
              label={item}
              checked={selectedBrands.includes(item)}
              onChange={(checked) => toggleValue(item, checked)}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-lg space-grotesk font-bold">Size</p>

          <IoIosArrowDown size={16} />
        </div>

        <div className="flex items-center gap-3">
          <Button title="Slim" variant="dark" padding="px-4 py-1" />

          <Button title="Mini" variant="light" padding="px-4 py-1" />
        </div>
      </div>
    </div>
  );
}

function AllProducts() {
  const [isOpen, setIsOpen] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const [selected, setSelected] = useState("Featured");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 6;

  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;

  const currentCards = cardsData.slice(startIndex, startIndex + cardsPerPage);

  const options = ["Featured", "New", "Hot Selling", "Bundles"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="flex gap-10 w-full justify-between bg-black text-white lg:px-16 px-5 py-16">
      {/* ================= DESKTOP FILTER ================= */}
      <div className="bg-[#242628] hidden md:flex flex-col gap-6 rounded-md w-[25%] p-5 h-fit">
        <FilterContent
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex flex-col gap-8 md:w-[75%] w-full">
        {/* Top Bar */}
        <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-5">
          {/* Mobile Filter Button */}
          <button
            type="button"
            onClick={() => setFilterDrawerOpen(true)}
            className="md:hidden flex items-center justify-center gap-2 border border-froozen text-froozen rounded-md px-4 py-2 cursor-pointer hover:bg-froozen hover:text-black transition-colors"
          >
            <IoFilterSharp size={18} />
            <span className="space-grotesk">Filters</span>
          </button>

          {/* Selected Filter */}
          <div className="flex items-center gap-2">
            <p className="bg-black text-froozen px-4 py-1 rounded-full flex items-center gap-1 border border-froozen">
              <RxCross2 className="cursor-pointer" />
              pouches
            </p>

            <button
              type="button"
              onClick={() => setSelectedBrands([])}
              className="text-gray-400 text-base underline cursor-pointer"
            >
              Clear All
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-4">
            <p className="text-gray-400">Sort By:</p>

            <div className="relative">
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

        {/* ================= CARDS ================= */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
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

        {/* ================= PAGINATION ================= */}
        <div className="flex items-center justify-center gap-2 pt-6">
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

      {/* ================= MOBILE FILTER DRAWER ================= */}
      <Drawer
        open={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
      >
        <div className="h-full flex flex-col bg-[#242628] text-white">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-700">
            <h2 className="text-2xl font-bold space-grotesk">Filters</h2>

            <button
              type="button"
              onClick={() => setFilterDrawerOpen(false)}
              className="text-white text-2xl cursor-pointer hover:text-froozen"
            >
              ×
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5">
            <FilterContent
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
            />
          </div>

          {/* Drawer Bottom */}
          <div className="p-5 border-t border-gray-700">
            <Button
              title="APPLY FILTERS"
              variant="light"
              width="w-full"
              padding="p-3"
              onClick={() => setFilterDrawerOpen(false)}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default AllProducts;
