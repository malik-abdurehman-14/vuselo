"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, UserRoundArrowLeft } from "lucide-react";

function Navbar() {
  const pathname = usePathname();
  const isProductDetailsPage =
    pathname.startsWith("/product-details") ||
    ["/cart", "/checkout"].includes(pathname);
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

            <button className="cursor-pointer transition-opacity hover:opacity-70">
              <ShoppingBag size={21} />
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
    </>
  );
}

export default Navbar;
