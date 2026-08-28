"use client";

import BlogCard from "@/components/layout/BlogCard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { blogsData } from "@/data/products";

function page() {
  return (
    <>
      <Navbar />
      <section className="bg-white text-black flex flex-col gap-14 pt-40">
        <h1 className="text-5xl font-extrabold space-grotesk text-center">
          Blogs
        </h1>
        <div className="bg-gray-100 py-12 px-16 w-full grid grid-cols-3 gap-6">
          {blogsData.map((item, index) => (
            <BlogCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              time={item.time}
              date={item.date}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
