"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import BlogDetails from "@/sections/BlogDetails";
import BlogNews from "@/sections/BlogNews";

function page() {
  return (
    <>
      <Navbar />
      <BlogDetails />
      <BlogNews />
      <Footer />
    </>
  );
}

export default page;
