"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { cn } from "@/lib/utils";

function QuantityBtn({
  min = 1,
  max = 99,
  initialValue = 1,
  variant = "default",
  className,
}) {
  const [quantity, setQuantity] = useState(initialValue);

  const decrease = () => {
    setQuantity((prev) => Math.max(prev - 1, min));
  };

  const increase = () => {
    setQuantity((prev) => Math.min(prev + 1, max));
  };

  const variants = {
    default: {
      wrapper: "border-gray-500 bg-black text-white",
      icon: "text-white",
      count: "text-white",
    },

    dark: {
      wrapper: "border-black bg-white text-black",
      icon: "text-black",
      count: "text-black",
    },
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <div
      className={cn(
        "flex items-center justify-between w-[130px] h-11 rounded-md border px-3",
        currentVariant.wrapper,
        className,
      )}
    >
      {/* Minus */}
      <button
        type="button"
        onClick={decrease}
        disabled={quantity === min}
        className={cn(
          "cursor-pointer transition-opacity",
          "disabled:opacity-30 disabled:cursor-not-allowed",
          currentVariant.icon,
        )}
      >
        <FaMinus size={12} />
      </button>

      {/* Count */}
      <span
        className={cn(
          "text-base font-medium space-grotesk",
          currentVariant.count,
        )}
      >
        {quantity}
      </span>

      {/* Plus */}
      <button
        type="button"
        onClick={increase}
        disabled={quantity === max}
        className={cn(
          "cursor-pointer transition-opacity",
          "disabled:opacity-30 disabled:cursor-not-allowed",
          currentVariant.icon,
        )}
      >
        <FaPlus size={12} />
      </button>
    </div>
  );
}

export default QuantityBtn;
