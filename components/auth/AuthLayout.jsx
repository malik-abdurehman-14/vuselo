"use client";

import Link from "next/link";

function AuthLayout({ children }) {
  return (
    <section className="min-h-screen bg-black text-white flex gap-8">
      {/* Left Side */}
      <div className="hidden lg:flex w-[50%] h-full py-8 pl-8">
        <Link
          href="/"
          className="relative overflow-hidden h-full rounded-[50px]"
        >
          <img
            src="/about2.png"
            alt=""
            className="w-full h-full rounded-[50px]"
          />

          {/* Bottom to Top Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
        </Link>
      </div>

      {/* Right Side */}
      <div className="lg:w-[50%] w-full flex items-center justify-center sm:px-8 px-5 sm:py-16 py-12">
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}

export default AuthLayout;
