"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/Button";
import Drawer from "../ui/Drawer";
import { usePathname } from "next/navigation";
import QuantityBtn from "../ui/QuantityBtn";
import { Search, ShoppingBag, UserRoundArrowLeft } from "lucide-react";

function Navbar() {
  const pathname = usePathname();
  const isProductDetailsPage =
    pathname.startsWith("/product-details") ||
    ["/cart", "/checkout"].includes(pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { name: "Shop Devices", link: "/products" },
    { name: "Shop Pouches", link: "/products" },
    { name: "Subscribe & Save", link: "/about" },
    { name: "Offers", link: "/offers" },
    { name: "Support", link: "/terms-conditions" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full">
        {isProductDetailsPage && (
          <div className="w-full flex justify-center bg-[#e82233] text-white py-1 px-4">
            <p className="text-sm space-grotesk">
              WARNING: This product contains nicotine. Nicotine is an addictive
              chemical. Only for use by adults 18+
            </p>
          </div>
        )}
        <div className="flex items-center justify-between gap-4 px-16 py-6 bg-black backdrop-blur-3xl">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="VUSELO"
              width={150}
              height={60}
              priority
              className="h-auto"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-10">
            {navLinks.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="text-base text-white transition-colors hover:text-gray-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5 text-white">
            <button className="cursor-pointer transition-opacity hover:opacity-70">
              <Search size={21} />
            </button>

            <button
              onClick={() => setDrawerOpen(true)}
              className="relative cursor-pointer transition-opacity hover:opacity-70"
            >
              <ShoppingBag size={21} />

              {/* Notification Dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-froozen border-2 border-black" />
            </button>

            <a
              href="/login"
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              <UserRoundArrowLeft size={21} />
            </a>
          </div>
        </div>
      </nav>

      {/* side-drawer */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="relative h-full flex flex-col">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto pb-[140px]">
            {/* uper-div */}
            <div className="flex flex-col items-center justify-center gap-8 p-7 w-full">
              <h2 className="text-3xl font-bold space-grotesk">Basket</h2>
              {/* product */}
              <div className="flex items-center gap-5 justify-between p-3 rounded-md border border-gray-700 w-full">
                <div className="flex items-center gap-2">
                  <img
                    className="h-[90px] object-contain rounded-md"
                    src="/sec2-1.png"
                    alt=""
                  />
                  <div>
                    <p className="text-gray-500 space-grotesk text-sm">VUSE</p>
                    <p className="text-lg space-grotesk font-bold">
                      Cherry Ice Pod
                    </p>
                    <p className="text-froozen space-grotesk">8mg strength .</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <p className="text-base text-red-500 cursor-pointer">
                    Remove
                  </p>
                  <QuantityBtn variant="dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-white shadow-[0_-8px_20px_rgba(0,0,0,0.15)] p-6 flex flex-col gap-3 items-center">
          <div className="flex items-center justify-between gap-3 w-full">
            <p>Subtotal</p>
            <p>£5.99</p>
          </div>
          <div className="flex items-center justify-between gap-3 w-full">
            <p>Delivery</p>
            <p>Calculated at checkout</p>
          </div>
          <div className="flex items-center justify-between gap-3 w-full">
            <p className="text-xl font-extrabold space-grotesk">Total</p>
            <p className="text-xl font-extrabold space-grotesk">£5.99</p>
          </div>
          <div className="flex items-center gap-3 w-full">
            <Button
              href="cart"
              title="Your Cart (1)"
              variant="black"
              width="w-[50%]"
              padding="p-3"
            />
            <Button
              href="checkout"
              title="Checkout"
              variant="light"
              width="w-[50%]"
              padding="p-3"
            />
          </div>
          <p className="text-sm">
            23 : 07 : 11 Remaining for next day delivery.
          </p>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
