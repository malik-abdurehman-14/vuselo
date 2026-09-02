import React from "react";

function UpToDate() {
  return (
    <div className="flex items-center justify-between gap-8 w-full lg:px-16 px-5 sm:py-10 py-12 bg-white text-black">
      <div className="flex flex-col sm:gap-6 gap-4 lg:w-[50%]">
        <p className="sm:text-base text-sm space-grotesk">A SIMPLER RITUAL</p>

        <h1 className="sm:text-5xl text-3xl font-extrabold space-grotesk">
          Stay up to date with <span className="text-froozen"> VUSELO.</span>
        </h1>

        <p className="sm:text-lg text-base">
          Build your own mix of devices, pods and pouches. Delivered when you
          need it, with 10% off every order.
        </p>
      </div>
      <div className="hidden lg:flex w-[40%]">
        <img className="" src="/uptodate.png" alt="" />
      </div>
    </div>
  );
}

export default UpToDate;
