"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Bundles from "@/sections/products/Bundles";
import ProductsHero from "@/sections/products/ProductsHero";

function page() {
  return (
    <>
      <Navbar />
      <ProductsHero
        heading="View"
        highlight="Offers"
        description="Ways to save across every device and pouch in the VUSELO range."
      />
      <Bundles />
      <Footer />
    </>
  );
}

export default page;
