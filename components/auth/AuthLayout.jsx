"use client";

function AuthLayout({ children }) {
  return (
    <section className="min-h-screen bg-black text-white flex gap-8">
      {/* Left Side */}
      <div className="w-[50%] h-full py-8 pl-8">
        <div className="relative overflow-hidden h-full rounded-[50px]">
          <img
            src="/about2.png"
            alt=""
            className="w-full h-full rounded-[50px]"
          />

          {/* Bottom to Top Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[50%] flex items-center justify-center px-8 py-16">
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}

export default AuthLayout;
