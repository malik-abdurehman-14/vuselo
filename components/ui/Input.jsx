import React from "react";
import { cn } from "@/lib/utils";

function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  id,
  className,
  ...props
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn(
        "w-full rounded-md border border-gray-500",
        "bg-transparent px-4 py-2",
        "text-sm text-white outline-none space-grotesk",
        "placeholder:text-gray-500 placeholder:space-grotesk",
        "transition-all",
        "focus:border-froozen focus:ring-1 focus:ring-froozen",
        className,
      )}
      {...props}
    />
  );
}

export default Input;
