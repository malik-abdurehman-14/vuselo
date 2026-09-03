"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function AuthTabs() {
  const pathname = usePathname();

  const isLogin = pathname === "/login";

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <img className="sm:w-[170px] w-[130px]" src="/logo.png" alt="" />
      <div className="flex border-b border-gray-700 mb-10 w-full">
        <Link
          href="/login"
          className={`w-1/2 text-center pb-4 sm:text-base text-sm font-semibold transition-colors ${
            isLogin
              ? "text-froozen sm:border-b-2 border-b border-froozen"
              : "text-gray-500 hover:text-white"
          }`}
        >
          Login
        </Link>

        <Link
          href="/register"
          className={`w-1/2 text-center pb-4 sm:text-base text-sm font-semibold transition-colors ${
            !isLogin
              ? "text-froozen sm:border-b-2 border-b border-froozen"
              : "text-gray-500 hover:text-white"
          }`}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default AuthTabs;
