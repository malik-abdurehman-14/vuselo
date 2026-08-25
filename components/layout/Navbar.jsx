"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, UserRoundArrowLeft } from "lucide-react";

function Navbar() {
  const navLinks = [
    { name: "Shop Devices", link: "/" },
    { name: "Shop Pouches", link: "/" },
    { name: "Subscribe & Save", link: "/" },
    { name: "Offers", link: "/" },
    { name: "Support", link: "/" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between gap-4 px-16 py-5 bg-black/80 backdrop-blur-xl">
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

          <button className="cursor-pointer transition-opacity hover:opacity-70">
            <ShoppingBag size={21} />
          </button>

          <button className="cursor-pointer transition-opacity hover:opacity-70">
            <UserRoundArrowLeft size={21} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
