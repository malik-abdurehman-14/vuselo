import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

function ProductCard({ img, desc, title, price }) {
  return (
    <div className="flex flex-col w-full cursor-pointer group overflow-hidden">
      <div className="relative bg-black items-center justify-center flex">
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
        <Link href="/">
          <Button title="Add" variant="light" padding="px-6 py-1" />
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
