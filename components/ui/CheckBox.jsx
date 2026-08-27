"use client";

import { useState } from "react";

function CheckBox({
  label,
  checked: controlledChecked,
  onChange,
  className = "",
}) {
  const [internalChecked, setInternalChecked] = useState(false);

  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleChange = (e) => {
    const value = e.target.checked;

    if (!isControlled) {
      setInternalChecked(value);
    }

    onChange?.(value);
  };

  return (
    <label
      className={`relative flex items-center gap-2 cursor-pointer select-none ${className}`}
    >
      {/* Real checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
      />

      {/* Custom checkbox */}
      <div
        className={`w-5 h-5 shrink-0 rounded-sm border flex items-center justify-center pointer-events-none transition-all duration-200 ${
          checked ? "bg-froozen border-froozen" : "bg-transparent border-white"
        }`}
      >
        {checked && (
          <svg
            className="w-3 h-3 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M5 12l4 4L19 7" />
          </svg>
        )}
      </div>

      {label && <span className="text-sm text-white">{label}</span>}
    </label>
  );
}

export default CheckBox;
