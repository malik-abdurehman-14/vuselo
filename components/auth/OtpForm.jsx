"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

function OtpForm() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <img className="w-[170px]" src="/logo.png" alt="" />
      <div className="flex flex-col gap-5 w-full">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold space-grotesk">
            Verify Your Email
          </h1>

          <p className="text-gray-400 mt-3 text-sm leading-6">
            We've sent a 6-digit verification code to{" "}
            <span className="text-froozen font-bold">vuselo@gmail.com.</span>
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex items-center justify-center gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 rounded-xl border border-gray-700 bg-black/20 text-white text-center text-xl font-bold outline-none transition-all focus:border-froozen focus:ring-1 focus:ring-froozen"
            />
          ))}
        </div>

        {/* Continue */}
        <Button
          title="Verify Code"
          variant="light"
          width="w-full"
          padding="py-4"
          className="rounded-xl text-base font-bold"
        />

        {/* Resend */}
        <div className="flex items-center gap-2 justify-center">
          <p className="text-sm text-gray-500">Didn't receive the code?</p>

          <button
            type="button"
            className="text-sm text-froozen mt-1 hover:underline cursor-pointer"
          >
            Resend Code
          </button>
        </div>

        {/* Back */}
        <a
          href="/login"
          className="text-sm text-gray-400 text-center hover:text-white transition-colors"
        >
          ← Back to Login
        </a>
      </div>
    </div>
  );
}

export default OtpForm;
