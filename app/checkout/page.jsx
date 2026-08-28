"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CheckoutDetails from "@/sections/CheckoutDetails";

function page() {
  return (
    <>
      <Navbar />
      <CheckoutDetails />
      <Footer />
    </>
  );
}

export default page;
