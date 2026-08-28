"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqs = [
    {
      title: "What brands are available on VUSELO",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "How do i browse by flavour?",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "How do i found compatible VUSE products?",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "How does checkout work?",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "Can i track my order?",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "Why is age verification required?",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "How i can contact support?",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <Navbar />
      <section className="bg-white text-black flex flex-col gap-14 pt-40">
        <h1 className="text-5xl font-extrabold space-grotesk text-center">
          Frequently Asked Question
        </h1>
        <div className="bg-gray-100 py-12 px-16 w-full flex flex-col gap-8">
          {/* terms */}
          <div className="flex flex-col gap-4 w-full">
            {faqs.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={index} className="w-full border-b border-gray-700">
                  {/* Question */}
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex items-center justify-between gap-10 pb-3 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {/* Number */}
                      <span className="text-lg font-extrabold space-grotesk">
                        {String(index + 1).padStart(2, ".")}
                      </span>

                      {/* Title */}
                      <p className="text-lg font-extrabold space-grotesk text-black transition-colors duration-300">
                        {item.title}
                      </p>
                    </div>

                    <div className="shrink-0 text-black">
                      {isActive ? <FaMinus size={16} /> : <FaPlus size={16} />}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm pb-4 pr-10 whitespace-pre-line">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
