import React from "react";

function UpToDate() {
  return (
    <div className="flex items-center justify-between gap-8 w-full px-16 py-10 bg-white text-black">
      <div className="flex flex-col gap-6 w-[50%]">
        <p className="text-base space-grotesk">A SIMPLER RITUAL</p>

        <h1 className="text-5xl font-extrabold space-grotesk">
          Stay up to date with <span className="text-froozen"> VUSELO.</span>
        </h1>

        <p className="text-lg">
          Build your own mix of devices, pods and pouches. Delivered when you
          need it, with 10% off every order.
        </p>
      </div>
      <div className="w-[40%]">
        <img className="" src="/uptodate.png" alt="" />
      </div>
    </div>
  );
}

export default UpToDate;
