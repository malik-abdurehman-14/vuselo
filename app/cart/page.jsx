"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProductsSlidder from "@/components/layout/ProductsSlidder";
import UserCart from "@/sections/UserCart";

function page() {
  return (
    <>
      <Navbar />
      <UserCart />
      <ProductsSlidder
        shortTitle="TRENSDING NOW"
        heading1="You May Also Like."
      />
      <Footer />
    </>
  );
}

export default page;
