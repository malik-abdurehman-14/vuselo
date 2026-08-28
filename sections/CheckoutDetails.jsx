"use client";

import { useState } from "react";
import { BsDot } from "react-icons/bs";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
function CheckoutDetails() {
  const [deliveryMethod, setDeliveryMethod] = useState("standard");

  return (
    <div className="flex text-white px-16 bg-black gap-10 py-14 pt-36 w-full">
      {/* left-side */}
      <div className="flex flex-col gap-10 w-[65%]">
        {/* alert */}
        <div className="bg-[#E63946] rounded-lg p-5">
          <p>
            I confirm I am of legal nicotine age and an eligible adult will
            receive this order at the delivery address.
          </p>
          <p className="text-sm">
            Required — you must confirm eligibility before proceeding.
          </p>
        </div>
        {/* delivery-details */}
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-extrabold space-grotesk">
            Delivery Details
          </p>
          <div className="flex items-center gap-4 w-full">
            <div className="w-full">
              <p>First Name</p>
              <Input
                type="text"
                placeholder="Enter first name"
                className="mt-1"
              />
            </div>
            <div className="w-full">
              <p>Last Name</p>
              <Input
                type="text"
                placeholder="Enter last name"
                className="mt-1"
              />
            </div>
          </div>
          <div className="w-full">
            <p>Address line 1</p>
            <Input
              type="text"
              placeholder="Street address or P.O. Box"
              className="mt-1"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <p>Address line 2</p>
              <p className="text-sm text-gray-500">optional</p>
            </div>
            <Input
              type="text"
              placeholder="Apartment, suite, unit, building, floor, etc."
              className="mt-1"
            />
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="w-full">
              <p>City</p>
              <Input type="text" placeholder="Enter city" className="mt-1" />
            </div>
            <div className="w-full">
              <p>Postcode</p>
              <Input type="text" placeholder="e.g. EC1A 1BB" className="mt-1" />
            </div>
          </div>
          <div className="w-full">
            <p>Phone number</p>
            <Input
              type="text"
              placeholder="For delivery updates only"
              className="mt-1"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <p>Delivery instructions</p>
              <p className="text-sm text-gray-500">optional</p>
            </div>
            <Input
              type="text"
              placeholder="Any access codes, drop-off requests, etc."
              className="mt-1"
            />
          </div>
        </div>
        {/* delivery-method */}
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-extrabold space-grotesk">
            Delivery Method
          </p>
          {/* Standard Delivery */}
          <div
            onClick={() => setDeliveryMethod("standard")}
            className={`flex items-center justify-between border p-5 rounded-lg cursor-pointer transition-all ${
              deliveryMethod === "standard"
                ? "bg-froozen/20 border-froozen"
                : "border-gray-600 hover:bg-froozen/20 hover:border-froozen"
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Radio */}
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  deliveryMethod === "standard"
                    ? "border-froozen"
                    : "border-gray-500"
                }`}
              >
                {deliveryMethod === "standard" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-froozen" />
                )}
              </div>

              <div>
                <p className="text-xl font-bold">Standard Delivery</p>
                <p className="text-gray-500 text-sm">3-5 Business Days</p>
              </div>
            </div>

            <p className="text-froozen font-bold">FREE</p>
          </div>
          {/* Express Delivery */}
          <div
            onClick={() => setDeliveryMethod("express")}
            className={`flex items-center justify-between border p-5 rounded-lg cursor-pointer transition-all ${
              deliveryMethod === "express"
                ? "bg-froozen/20 border-froozen"
                : "border-gray-600 hover:bg-froozen/20 hover:border-froozen"
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Radio */}
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  deliveryMethod === "express"
                    ? "border-froozen"
                    : "border-gray-500"
                }`}
              >
                {deliveryMethod === "express" && (
                  <div className="w-2.5 h-2.5 rounded-full bg-froozen" />
                )}
              </div>

              <div>
                <p className="text-xl font-bold">Express Delivery</p>
                <p className="text-gray-500 text-sm">1-2 Business Days</p>
              </div>
            </div>

            <p
              className={`font-bold ${
                deliveryMethod === "express" ? "text-froozen" : ""
              }`}
            >
              £4.99
            </p>
          </div>
          {/* points */}
          <div className="flex items-center justify-between w-full gap-5">
            <div className="flex items-center text-froozen">
              <BsDot size={32} />
              <p className="text-white text-sm">Money-back guarantee</p>
            </div>
            <div className="flex items-center text-froozen">
              <BsDot size={32} />
              <p className="text-white text-sm">Price match promise</p>
            </div>
            <div className="flex items-center text-froozen">
              <BsDot size={32} />
              <p className="text-white text-sm">Free Returns</p>
            </div>
          </div>
        </div>
        {/* subscription-card */}
        <div className="flex items-center justify-between p-5 rounded-lg border border-gray-600">
          <div>
            <p className="text-xl font-bold">
              Turn this into a subscription and save 15%
            </p>
            <p className="text-gray-500 text-sm">
              Easily adjust or cancel anytime.
            </p>
          </div>
          <div>
            <Button
              title="Add Subscription"
              variant="light"
              padding="py-1 px-4"
            />
          </div>
        </div>
        {/* payment-card */}
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-extrabold space-grotesk">Payment</p>
          <div className="w-full">
            <p>Card Number</p>
            <Input
              type="text"
              placeholder="0000 0000 0000 0000"
              className="mt-1"
            />
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="w-full">
              <p>Expiry Date</p>
              <Input type="text" placeholder="MM / YY" className="mt-1" />
            </div>
            <div className="w-full">
              <p>CVV</p>
              <Input type="text" placeholder="123" className="mt-1" />
            </div>
          </div>
          <div className="w-full">
            <p>Name on card</p>
            <Input type="text" placeholder="enter name" className="mt-1" />
          </div>
          <p>Your payment is encrypted and secure</p>
          <Button
            title="Place order · £47.97"
            variant="light"
            padding="py-3 px-5"
            width="w-full"
          />
          <p className="text-red-500 text-sm text-center -mt-2">
            By placing this order you confirm you are an eligible adult nicotine
            consumer.
          </p>
        </div>
      </div>
      {/* right-summary */}
      <div className="sticky top-32 flex flex-col gap-2 p-5 rounded-md border border-gray-700 w-[35%] h-fit">
        <h3 className="text-2xl font-extrabold space-grotesk">Order Summary</h3>
        {/* product-overview */}
        <div className="flex items-center gap-5 justify-between p-2 rounded-md border border-gray-700">
          <div className="flex items-center gap-3">
            <img
              className="h-[70px] object-contain rounded-md"
              src="/sec2-1.png"
              alt=""
            />
            <div>
              <p className="text-gray-500 space-grotesk text-sm">VUSE</p>
              <p className="text-lg space-grotesk font-bold">Cherry Ice Pod</p>
              <p className="text-froozen space-grotesk">Qty: 1</p>
            </div>
          </div>
          <p className="text-base text-end">£13.47</p>
        </div>
        <div className="flex items-center gap-4 justify-between mt-2">
          <p className="text-gray-500">Subtotal</p>
          <p className="font-bold">£23.45</p>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <p className="">Delivery</p>
          <p className="font-bold text-froozen">Free</p>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <p className="">Subscription discount</p>
          <p className="font-bold">-£1.52</p>
        </div>
        <div className="border border-gray-800 w-full"></div>
        <div className="flex items-center gap-4 justify-between mt-2">
          <div>
            <p className="text-xl font-bold">Total</p>
          </div>
          <p className="text-2xl font-bold">£19.93</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutDetails;
