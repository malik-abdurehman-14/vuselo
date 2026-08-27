"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AllProducts from "@/sections/products/AllProducts";
import ProductsHero from "@/sections/products/ProductsHero";

function page() {
  return (
    <>
      <Navbar />
      <ProductsHero />
      <AllProducts />
      <Footer />
    </>
  );
}

export default page;
