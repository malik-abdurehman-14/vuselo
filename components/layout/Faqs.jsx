"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

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
    <div className="flex flex-col md:gap-16 gap-10 lg:px-16 px-5 py-12 bg-black text-white">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-froozen space-grotesk">HELP CENTER</p>

        <p className="sm:text-5xl text-3xl font-extrabold space-grotesk">
          Frequently <span className="text-froozen">Asked</span>
        </p>
      </div>

      {/* FAQs */}
      <div className="flex flex-col gap-4 w-full">
        {faqs.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={index} className="w-full border-b border-gray-500">
              {/* Question */}
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex items-center justify-between gap-8 pb-3 text-left cursor-pointer"
              >
                <p
                  className={`sm:text-lg text-base space-grotesk transition-colors duration-300 ${
                    isActive ? "text-froozen" : "text-white"
                  }`}
                >
                  {item.title}
                </p>

                <div className="shrink-0 text-white">
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
                  <p className="sm:text-base text-sm pb-4 sm:pr-10">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faqs;
