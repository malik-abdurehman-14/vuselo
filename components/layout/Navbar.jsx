"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/Button";
import Drawer from "../ui/Drawer";
import { usePathname } from "next/navigation";
import QuantityBtn from "../ui/QuantityBtn";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Search, ShoppingBag, UserRoundArrowLeft } from "lucide-react";

function Navbar() {
  const pathname = usePathname();
  const isProductDetailsPage =
    pathname.startsWith("/product-details") ||
    ["/cart", "/checkout"].includes(pathname);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  const navLinks = [
    { name: "Shop Devices", link: "/products" },
    { name: "Shop Pouches", link: "/products" },
    { name: "Subscribe & Save", link: "/about" },
    { name: "Offers", link: "/offers" },
    { name: "Support", link: "/terms-conditions" },
  ];

  return (
    <>
      {/* desktop-nav */}
      <nav className="hidden md:block fixed top-0 left-0 z-50 w-full">
        {isProductDetailsPage && (
          <div className="w-full flex justify-center bg-[#e82233] text-white py-1 px-4">
            <p className="text-sm space-grotesk">
              WARNING: This product contains nicotine. Nicotine is an addictive
              chemical. Only for use by adults 18+
            </p>
          </div>
        )}
        <div className="flex items-center justify-between gap-4 lg:px-16 px-5 py-6 bg-black backdrop-blur-3xl">
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
          <div className="flex items-center lg:gap-10 gap-5">
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
          <div className="flex items-center lg:gap-5 gap-3 text-white">
            <button className="cursor-pointer transition-opacity hover:opacity-70">
              <Search size={21} />
            </button>

            <button
              onClick={() => setCartDrawerOpen(true)}
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
      {/* mobile-nav */}
      <nav className="block md:hidden fixed top-0 left-0 z-50 w-full">
        {isProductDetailsPage && (
          <div className="w-full flex justify-center bg-[#e82233] text-white py-1 px-4">
            <p className="text-sm space-grotesk">
              WARNING: This product contains nicotine. Nicotine is an addictive
              chemical. Only for use by adults 18+
            </p>
          </div>
        )}
        <div className="flex items-center justify-between gap-4 lg:px-16 px-5 py-6 bg-black backdrop-blur-3xl">
          {/* Icons */}
          <div className="flex items-center gap-3 text-white">
            <button
              onClick={() => setMenuDrawerOpen(true)}
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              <RiMenuUnfoldLine size={21} />
            </button>
            <button className="cursor-pointer transition-opacity hover:opacity-70">
              <Search size={21} />
            </button>
          </div>
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="VUSELO"
              width={120}
              height={60}
              priority
              className="h-auto"
            />
          </Link>
          {/* Icons */}
          <div className="flex items-center gap-3 text-white">
            <button
              onClick={() => setCartDrawerOpen(true)}
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

      {/* mobile-menu-drawer */}
      <Drawer
        open={menuDrawerOpen}
        onClose={() => setMenuDrawerOpen(false)}
        side="left"
      >
        <div className="h-full flex flex-col bg-black text-white">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold space-grotesk">Menu</h2>

            <button
              onClick={() => setMenuDrawerOpen(false)}
              className="text-white text-2xl cursor-pointer hover:opacity-70"
            >
              ×
            </button>
          </div>

          {/* Navigation */}
          <div className="flex flex-col p-6">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => setMenuDrawerOpen(false)}
                className="py-4 text-lg border-b border-white/10 transition-opacity hover:opacity-60"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Drawer>

      {/* cart-drawer */}
      <Drawer open={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)}>
        <div className="relative h-full flex flex-col">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto pb-[140px]">
            {/* uper-div */}
            <div className="flex flex-col items-center justify-center gap-8 sm:p-7 p-5 w-full">
              <h2 className="sm:text-3xl text-2xl font-bold space-grotesk">
                Basket
              </h2>
              {/* product */}
              <div className="flex sm:flex-row flex-col sm:items-center items-start gap-5 justify-between p-3 rounded-md border border-gray-700 w-full">
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
                <div className="flex sm:flex-col flex-col-reverse sm:items-end items-center gap-3 sm:w-auto w-full">
                  <p className="text-base text-red-500 cursor-pointer">
                    Remove
                  </p>
                  <QuantityBtn variant="dark" className="sm:w-auto w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-white shadow-[0_-8px_20px_rgba(0,0,0,0.15)] sm:p-6 p-5 flex flex-col gap-3 items-center">
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
          <div className="flex sm:flex-row flex-col items-center gap-3 w-full">
            <Button
              href="cart"
              title="Your Cart (1)"
              variant="black"
              width="sm:w-[50%] w-full"
              padding="p-3"
            />
            <Button
              href="checkout"
              title="Checkout"
              variant="light"
              width="sm:w-[50%] w-full"
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
