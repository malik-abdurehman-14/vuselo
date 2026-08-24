"use client";

import Image from "next/image";
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
    <div className="flex items-center justify-between py-8 px-20 gap-4 bg-black">
      <div>
        <div>
          <Image
            src="/logo.png"
            alt="VUSELO"
            width={150}
            height={60}
            priority
            className="h-auto "
          />
        </div>
      </div>
      <div className="flex items-center gap-10">
        {navLinks.map((item, index) => (
          <a
            href={item.link}
            key={index}
            className="text-base text-white hover:text-froozen"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4 text-white">
        <div className="cursor-pointer">
          <Search />
        </div>
        <div className="cursor-pointer">
          <ShoppingBag />
        </div>
        <div className="cursor-pointer">
          <UserRoundArrowLeft />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
