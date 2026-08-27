"use client";

import { Button } from "@/components/ui/Button";
import QuantityBtn from "@/components/ui/QuantityBtn";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { GoAlertFill } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";

function UserCart() {
  return (
    <div className="flex flex-col text-white px-16 bg-black gap-10 py-14 pt-36 w-full">
      <div>
        <a
          href="/"
          className="text-froozen text-sm flex items-center gap-2 w-fit"
        >
          <FaArrowLeftLong size={12} />
          Continue shopping
        </a>
        <h1 className="text-5xl font-extrabold space-grotesk mt-3">
          Your Cart <span className="text-gray-500 text-4xl">(2 items)</span>
        </h1>
      </div>
      <div className="flex gap-10 w-full">
        <div className="flex flex-col gap-4 w-[70%]">
          {/* box */}
          <div className="flex items-center gap-8 justify-between p-4 rounded-md border border-gray-700">
            <div className="flex items-center gap-3">
              <img
                className="h-[90px] object-contain rounded-md"
                src="/sec2-1.png"
                alt=""
              />
              <div>
                <p className="text-gray-500 space-grotesk text-sm">VUSE</p>
                <p className="text-xl space-grotesk font-bold">
                  Cherry Ice Pod
                </p>
                <p className="text-froozen space-grotesk">8mg strength .</p>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <QuantityBtn />
              <div>
                <p className="text-sm text-gray-600">Unit: £4.49</p>
                <p className="text-lg text-end">£13.47</p>
              </div>
              <p className="text-base text-red-500 cursor-pointer">Remove</p>
            </div>
          </div>
          {/* box */}
          <div className="flex items-center gap-8 justify-between p-4 rounded-md border border-gray-700">
            <div className="flex items-center gap-3">
              <img
                className="h-[90px] object-contain rounded-md"
                src="/detail2.png"
                alt=""
              />
              <div>
                <p className="text-gray-500 space-grotesk text-sm">VELO</p>
                <p className="text-xl space-grotesk font-bold">
                  Arctic Mint Nicotine Pouches
                </p>
                <p className="text-froozen space-grotesk">
                  6mg strength · Mini profile · 20 pouches per can
                </p>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <QuantityBtn />
              <div>
                <p className="text-sm text-gray-600">Unit: £4.49</p>
                <p className="text-lg text-end">£13.47</p>
              </div>
              <p className="text-base text-red-500 cursor-pointer">Remove</p>
            </div>
          </div>
          {/* promo-code */}
          <div className="flex flex-col gap-3 p-4 rounded-md border border-gray-700">
            <p className="text-base space-grotesk">
              Have a promo or discount code?
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-100 rounded-sm w-full overflow-hidden">
                <input
                  type="text"
                  placeholder="enter code"
                  className="flex-1 bg-transparent py-1 px-3 text-white outline-none space-grotesk placeholder:text-white"
                />

                {/* Arrow */}
                <p className="flex gap-1 items-center justify-center px-3 text-froozen transition-colors duration-300 text-sm space-grotesk">
                  <TiTick size={20} /> 15% Off Applied
                </p>
              </div>
              <Button title="Apply" variant="light" padding="px-8 py-1" />
            </div>
          </div>
        </div>
        {/* order-summary */}
        <div className="flex flex-col gap-3 items-center w-[30%]">
          <div className="flex flex-col gap-2 p-5 rounded-md border border-gray-700">
            <h3 className="text-2xl font-extrabold space-grotesk">
              Order Summary
            </h3>
            <div className="flex items-center gap-4 justify-between mt-2">
              <p className="text-gray-500">Subtotal (5 pouches)</p>
              <p className="font-bold">£23.45</p>
            </div>
            <div className="flex items-center gap-4 justify-between text-froozen">
              <p className="">Promo Code VUSE15</p>
              <p className="font-bold">-£3.52</p>
            </div>
            <div className="flex items-center gap-4 justify-between text-gray-500">
              <p className="">Delivery</p>
              <p className="font-bold">Calculated at checkout</p>
            </div>
            <div className="border border-gray-800 w-full"></div>
            <div className="flex items-center gap-4 justify-between mt-2">
              <div>
                <p className="text-xl font-bold">Total</p>
                <p className="text-gray-500 text-sm">
                  Excluding delivery and taxes
                </p>
              </div>
              <p className="text-xl font-bold">£19.93</p>
            </div>
            {/* alert */}
            <div className="flex gap-3 w-full bg-red-500 rounded-md p-4 text-sm my-2">
              <GoAlertFill size={32} />
              <p>
                You must be an eligible adult nicotine consumer to complete this
                purchase. We use secure third-party age verification.
              </p>
            </div>
            {/* checkout */}
            <Button
              title="Proceed to checkout"
              variant="light"
              width="w-full"
              padding="px-8 py-2"
            />
          </div>
          <div className="flex items-center gap-3 text-froozen">
            <p className="flex items-center gap-1 text-sm">
              <CiDeliveryTruck size={20} /> Free UK Next Day Delivery
            </p>
            <div className="border border-froozen h-full"></div>
            <a href="/" className="flex items-center gap-2 text-sm">
              <FaArrowLeftLong size={12} /> Hassle Free Returns
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCart;
