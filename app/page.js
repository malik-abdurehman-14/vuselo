import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import HomeSection2 from "@/sections/HomeSection2";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeSection2 />
    </>
  );
}
