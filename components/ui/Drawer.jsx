"use client";

import { useEffect } from "react";

function Drawer({ open, onClose, children }) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-lg cursor-pointer
          transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[500px] max-w-[90vw]
          bg-white text-black
          transition-transform duration-700
          ease-[cubic-bezier(0.4,0,0.2,1)]
          ${open ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  );
}

export default Drawer;
