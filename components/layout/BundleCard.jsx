import React from "react";
import { Button } from "../ui/Button";

function BundleCard({ img, title, desc1, desc2, saving }) {
  return (
    <div className="group bg-white rounded-lg text-black w-full overflow-hidden cursor-pointer group">
      {/* Image */}
      <div className="overflow-hidden rounded-t-lg">
        <img
          className="w-full h-[200px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          src={img}
          alt=""
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        <p className="text-2xl space-grotesk font-bold group-hover:text-froozen">
          {title}
        </p>
        <p className="text-xs">{desc1}</p>
        <p>{desc2}</p>
        <div className="bg-froozen text-black py-1 px-3 text-sm rounded-md w-fit mb-2">
          Save {saving}
        </div>
        <Button
          title="Build Your Mix"
          variant="black"
          width="w-full"
          padding="py-2 px-4"
        />
      </div>
    </div>
  );
}

export default BundleCard;
