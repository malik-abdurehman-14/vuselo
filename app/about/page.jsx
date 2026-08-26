"use client";

import Faqs from "@/components/layout/Faqs";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Testimonials from "@/components/layout/Testimonials";
import UpToDate from "@/components/layout/UpToDate";
import About from "@/sections/about/About";
import AboutHero from "@/sections/about/AboutHero";
import Offers from "@/sections/home/Offers";
import OffersBanner from "@/sections/home/OffersBanner";
import Rythum from "@/sections/home/Rythum";

function page() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Rythum />
      <About />
      <OffersBanner />
      <Offers />
      <Testimonials />
      <Faqs />
      <UpToDate />
      <Footer />
    </>
  );
}

export default page;
