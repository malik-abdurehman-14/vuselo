"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AllProducts from "@/sections/products/AllProducts";
import ProductsHero from "@/sections/products/ProductsHero";

function page() {
  return (
    <>
      <Navbar />
      <ProductsHero
        bgImg="/productsHero2.png"
        heading="Shop"
        highlight="All"
        description="Browse the full VUSELO range — devices, pods, and pouches."
      />
      <AllProducts />
      <Footer />
    </>
  );
}

export default page;
