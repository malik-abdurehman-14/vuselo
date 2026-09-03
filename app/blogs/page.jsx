"use client";

import BlogCard from "@/components/layout/BlogCard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { blogsData } from "@/data/products";

function page() {
  return (
    <>
      <Navbar />
      <section className="bg-white text-black flex flex-col gap-14 sm:pt-40 pt-28">
        <h1 className="sm:text-5xl text-4xl font-extrabold space-grotesk text-center">
          Blogs
        </h1>
        <div className="bg-gray-100 py-12 lg:px-16 px-5 w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
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
