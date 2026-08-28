"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const conditions = [
    {
      title: "Company Information",
      desc: `VUSELO is owned and operated by VUSELO International Ltd., registered in the United Kingdom under company number [COMPANY REG NUMBER]. VAT registered: [VAT NUMBER].
      Registered address: Manchester M2 5PS, Office A, United Kingdom.`,
    },
    {
      title: "Terms & Conditions",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "Nicotine Product Warning",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "Orders & Payment",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "Subscriptions & Auto-Renewal",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "Shipping & Delivery",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "Returns, Refunds & Guarantees",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "Prohibited Uses",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "Intellectual Property",
      desc: "VUSELO currently features products from VELO and VUSE. Each brand retains its original identity, packaging, and product design.",
    },
    {
      title: "Limitation of Liability",
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
          Legal
        </h1>
        <div className="bg-gray-100 py-12 px-16 w-full flex flex-col gap-8">
          {/* box */}
          <div className="bg-white rounded-lg p-5 text-sm">
            Welcome to VUSELO. These Terms & Conditions ("Terms") govern your
            access to and use of the VUSELO website, mobile experience, and any
            related services (collectively, the "Site"), operated by VUSELO
            International Ltd.. By accessing or using the Site, placing an
            order, or creating an account, you agree to be bound by these Terms.
            If you do not agree, please do not use the Site.
          </div>
          {/* terms */}
          <div className="flex flex-col gap-4 w-full">
            {conditions.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={index} className="w-full">
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
