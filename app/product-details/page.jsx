"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProductsSlidder from "@/components/layout/ProductsSlidder";
import ProductDetails from "@/sections/products/ProductDetails";

function page() {
  return (
    <>
      <Navbar />
      <ProductDetails />
      <ProductsSlidder
        shortTitle="TRENSDING NOW"
        heading1="You May Also Like."
      />
      <Footer />
    </>
  );
}

export default page;
