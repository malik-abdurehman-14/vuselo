"use client";

import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="flex flex-col gap-6">
      {/* inputs */}
      <div className="flex flex-col gap-5">
        <div>
          <p className="mb-2 space-grotesk">Email</p>

          <Input type="email" variant="dark" placeholder="Enter your email" />
        </div>
        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="space-grotesk">Password</p>

            <button className="text-sm text-froozen hover:underline cursor-pointer">
              Forgot Password?
            </button>
          </div>

          <Input
            type="password"
            variant="dark"
            placeholder="Enter your password"
          />
        </div>
        <Button
          title="Continue"
          variant="light"
          width="w-full"
          padding="py-4"
          className="rounded-xl text-base font-bold mt-2"
        />
      </div>
      {/* OR Divider */}{" "}
      <div className="flex items-center gap-4">
        {" "}
        <div className="h-px bg-gray-700 flex-1" />{" "}
        <span className="text-sm text-gray-500 space-grotesk"> OR </span>{" "}
        <div className="h-px bg-gray-700 flex-1" />{" "}
      </div>{" "}
      {/* Social Login */}
      <div className="flex flex-col gap-3">
        {/* Google */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white text-black rounded-xl py-4 px-5 cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <FcGoogle className="text-2xl" />

          <span className="font-semibold space-grotesk">
            Continue with Google
          </span>
        </button>

        {/* Apple */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-white text-black rounded-xl py-4 px-5 cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <FaApple className="text-black text-2xl" />

          <span className="font-semibold space-grotesk">
            Continue with Apple
          </span>
        </button>
      </div>
      <p className="text-sm text-gray-500 text-center">
        New to VUSELO?{" "}
        <a href="/register" className="text-froozen hover:underline">
          {" "}
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default LoginForm;
