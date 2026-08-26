import Navbar from "@/components/layout/Navbar";
import About from "@/sections/home/About";
import Hero from "@/sections/home/Hero";
import HomeSection2 from "@/sections/home/HomeSection2";
import OffersBanner from "@/sections/home/OffersBanner";
import ProductShowcase from "@/sections/home/ProductShowcase";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeSection2 />
      <About />
      <ProductShowcase />
      <OffersBanner />
    </>
  );
}
