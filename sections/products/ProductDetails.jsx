"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import QuantityBtn from "@/components/ui/QuantityBtn";

function ProductDetails() {
  const productImages = [
    {
      id: 1,
      src: "/detail1.png",
      alt: "Product front view",
    },
    {
      id: 2,
      src: "/detail2.png",
      alt: "Product side view",
    },
    {
      id: 3,
      src: "/detail3.png",
      alt: "Product detail view",
    },
    {
      id: 4,
      src: "/detail4.png",
      alt: "Product back view",
    },
  ];

  // First image default main image
  const [activeImage, setActiveImage] = useState(productImages[0]);

  return (
    <div className="">
      <div className="flex md:flex-row flex-col text-white lg:px-16 px-5 bg-black lg:gap-10 gap-8 py-14 pt-36 w-full">
        {/* Left Images */}
        <div className="flex flex-col md:gap-4 gap-2 md:w-[45%] w-full h-full">
          {/* Main Image */}
          <div className="w-full">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="md:h-[500px] h-[300px] rounded-lg w-full object-cover bg-[#242628]"
            />
          </div>
          {/* Thumbnails */}
          <div className="grid lg:grid-cols-4 grid-cols-2 items-center w-full md:gap-4 gap-2">
            {productImages.map((image) => {
              const isActive = activeImage.id === image.id;

              return (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  onMouseEnter={() => setActiveImage(image)}
                  className={`lg:h-[150px] h-[100px] w-full rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                    isActive
                      ? "border-froozen"
                      : "border-transparent hover:border-froozen"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover bg-[#242628] transition-transform duration-300 hover:scale-105"
                  />
                </button>
              );
            })}
          </div>
        </div>
        {/* right-details */}
        <div className="flex flex-col gap-3 md:w-[55%] w-full">
          <p className="text-froozen space-grotesk text-sm">
            VELO · NICOTINE POUCHES
          </p>
          <h1 className="text-5xl font-extrabold space-grotesk">Cherry Ice</h1>
          <p className="text-gray-500">
            Fruity tart Cherry flavour with a refreshing cooling sensation. A
            smooth, tobacco-free nicotine experience.
          </p>
          <div className="grid sm:grid-cols-4 grid-cols-2 items-center gap-3 my-3">
            <div className="rounded-md border border-gray-700 w-full p-3 flex flex-col justify-center">
              <p className="space-grotesk">NCOTINE</p>
              <p className="text-froozen mt-1 font-bold">8 MG</p>
            </div>
            <div className="rounded-md border border-gray-700 w-full p-3 flex flex-col justify-center">
              <p className="space-grotesk">SIZE</p>
              <p className="text-froozen mt-1 font-bold">SLIM</p>
            </div>
            <div className="rounded-md border border-gray-700 w-full p-3 flex flex-col justify-center">
              <p className="space-grotesk">FLAVOUR</p>
              <p className="text-froozen mt-1 font-bold">BLUEBERRY</p>
            </div>
            <div className="rounded-md border border-gray-700 w-full p-3 flex flex-col justify-center">
              <p className="space-grotesk">TYPE</p>
              <p className="text-froozen mt-1 font-bold">POUCH</p>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold space-grotesk">Pouch Size</p>
            <div className="flex items-center gap-3 mt-2">
              <Button title="Mini" variant="dark" padding="px-3 py-1" />
              <Button
                title="Slim (Selected)"
                variant="light"
                padding="px-3 py-1"
              />
            </div>
          </div>
          <div>
            <p className="text-lg font-bold space-grotesk mt-3">
              Nicotine Strength
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <Button title="4mg" variant="dark" padding="px-3 py-1" />
              <Button title="6mg" variant="dark" padding="px-3 py-1" />
              <Button
                title="8mg (Selected)"
                variant="light"
                padding="px-3 py-1"
              />
              <Button title="14mg" variant="dark" padding="px-3 py-1" />
            </div>
          </div>
          {/* price box */}
          <div className="rounded-md border border-gray-700 w-full p-5 flex flex-col gap-5 mt-5">
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-end gap-3">
                <p className="text-froozen font-extrabold sm:text-4xl text-2xl space-grotesk">
                  £4.99
                </p>
                <p className="sm:text-lg">£6.99</p>
                <p className="text-sm text-froozen bg-green-800/20 p-1 rounded-sm">
                  -23%
                </p>
              </div>
              <p className="text-froozen text-lg"> . In stock</p>
            </div>
            <div className="flex sm:flex-row flex-col sm:items-center gap-3 w-full pb-4 border-b border-gray-800">
              <QuantityBtn className="sm:w-auto w-full" />
              <Button
                href="/cart"
                title="Add To Cart"
                variant="light"
                padding="p-2"
                width="sm:w-[80%]"
              />
            </div>
            <div className="flex sm:flex-row flex-col items-center gap-3">
              <p className="bg-red-500 rounded-full px-3 py-2 font-bold">18</p>
              <p className="text-gray-400">
                You must be <span className="text-red-500">18+</span> to
                purchase this product. Age verification will be performed at
                checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* more-details */}
      <div className="flex flex-col gap-7 bg-white text-black lg:px-16 px-5 py-14">
        <p className="sm:text-4xl text-3xl font-extrabold space-grotesk">
          More Details
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between gap-8">
          <div>
            <p className="text-froozen text-lg space-grotesk mb-1">
              Product Description
            </p>
            <p>
              Designed with modern users in mind, VELO Blueberry Ice pouches
              offer a tobacco-free option. Clean taste profile with zero smoke,
              zero ash, and full convenience.
            </p>
          </div>
          <div>
            <p className="text-froozen text-lg space-grotesk mb-1">
              How to Use
            </p>
            <p>
              Place a single pouch under your top lip. Leave it in place for up
              to 30 minutes. You will feel a tingling sensation—this is normal.
              Safely discard in the can't waste lid after use.
            </p>
          </div>
          <div>
            <p className="text-froozen text-lg space-grotesk mb-1">
              Shipping & Restrictions
            </p>
            <p>
              Age-restricted delivery only. Recipient signature of 18+ required
              upon arrival. Shipped next-day inside standard discreet packaging
              for compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
