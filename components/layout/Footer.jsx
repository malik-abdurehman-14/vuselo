"use client";

import { FaTwitter, FaFacebook } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { RiSendInsFill } from "react-icons/ri";
import Link from "next/link";

function Footer() {
  const links = [
    { name: "Shop Devices", link: "/" },
    { name: "Shop Pouches", link: "/" },
    { name: "Subscribe & Save", link: "/" },
    { name: "Offers", link: "/" },
    { name: "Support", link: "/" },
  ];
  return (
    <footer className="bg-black text-white w-full px-16 py-14 flex justify-between gap-10 h-[480px]">
      <div className="flex flex-col gap-8 justify-between w-[40%]">
        <div>
          <img src="/logo.png" alt="" />
          <p className="text-base space-grotesk my-6">
            VUSELO electronic cigarettes and nicotine pouches may be hazardous
            to health and contain nicotine, which is addictive.{" "}
            <span className="text-red-500">
              WARNING: This product contains nicotine. Nicotine is an addictive
              chemical.
            </span>
          </p>
          <a className="text-froozen text-base" href="/">
            More about us .
          </a>
        </div>
        <div className="flex items-end gap-8 justify-between">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="/"
              className="text-black bg-froozen rounded-full hover:text-froozen hover:bg-black border border-black hover:border-froozen p-3"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="/"
              className="text-black bg-froozen rounded-full hover:text-froozen hover:bg-black border border-black hover:border-froozen p-3"
            >
              <FaFacebook size={16} />
            </a>
            <a
              href="/"
              className="text-black bg-froozen rounded-full hover:text-froozen hover:bg-black border border-black hover:border-froozen p-3"
            >
              <RiSendInsFill size={16} />
            </a>
            <a
              href="/"
              className="text-black bg-froozen rounded-full hover:text-froozen hover:bg-black border border-black hover:border-froozen p-3"
            >
              <AiFillInstagram size={16} />
            </a>
          </div>
          <p className="text-base w-[170px]">
            © 2026 — Copyright All Rights reserved
          </p>
        </div>
      </div>
      {/* right-side */}
      <div className="flex flex-col gap-8 justify-between w-[60%]">
        <div className="flex items-center gap-10">
          {links.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="text-base text-white transition-colors hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-end justify-between gap-8">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-lg space-grotesk">Contact Us</p>
              <p>+1 (999) 888-77-66</p>
              <p className="text-base">hello@logoipsum.com</p>
            </div>
            <div>
              <p className="text-lg space-grotesk">Location</p>
              <p>483920, UK,</p>
              <p className="text-base">Myasnitskaya 22/2/5, Office 4</p>
            </div>
          </div>
          <div>
            <p className="text-froozen space-grotesk">Subcription</p>
            <div className="flex items-center border border-gray-100 rounded-md w-[300px] overflow-hidden mt-2">
              <input
                type="email"
                placeholder="E-MAIL"
                className="flex-1 bg-transparent py-1 px-3 text-white outline-none space-grotesk placeholder:text-white"
              />

              {/* Arrow */}
              <button
                type="button"
                className="flex items-center justify-center px-3 border-l border-gray-500 cursor-pointer text-froozen transition-colors duration-300"
              >
                <IoIosArrowForward size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
