"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function QuantityBtn({ min = 1, max = 99, initialValue = 1 }) {
  const [quantity, setQuantity] = useState(initialValue);

  const decrease = () => {
    setQuantity((prev) => Math.max(prev - 1, min));
  };

  const increase = () => {
    setQuantity((prev) => Math.min(prev + 1, max));
  };

  return (
    <div className="flex items-center justify-between w-[130px] h-11 rounded-md border border-gray-500 bg-black text-white px-3">
      {/* Minus */}
      <button
        type="button"
        onClick={decrease}
        disabled={quantity === min}
        className="cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <FaMinus size={12} />
      </button>

      {/* Count */}
      <span className="text-base font-medium space-grotesk">{quantity}</span>

      {/* Plus */}
      <button
        type="button"
        onClick={increase}
        disabled={quantity === max}
        className="cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <FaPlus size={12} />
      </button>
    </div>
  );
}

export default QuantityBtn;
