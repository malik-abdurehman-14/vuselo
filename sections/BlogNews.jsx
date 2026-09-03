"use client";

import BlogCard from "@/components/layout/BlogCard";

function BlogNews() {
  const blogsData = [
    {
      title: "What 'ceramic-heater tech' actually means",
      desc: "A plain-language look at what's inside a VUSELO pod, and why it changes flavor consistency.",
      date: "12 Aug 2026 ·",
      time: "4 min read",
      img: "/about2.png",
    },
    {
      title: "What 'ceramic-heater tech' actually means",
      desc: "A plain-language look at what's inside a VUSELO pod, and why it changes flavor consistency.",
      date: "12 Aug 2026 ·",
      time: "4 min read",
      img: "/about2.png",
    },
    {
      title: "What 'ceramic-heater tech' actually means",
      desc: "A plain-language look at what's inside a VUSELO pod, and why it changes flavor consistency.",
      date: "12 Aug 2026 ·",
      time: "4 min read",
      img: "/about2.png",
    },
  ];
  return (
    <div className="flex flex-col sm:gap-10 gap-7 lg:px-16 px-5 pt-6 pb-14 bg-gray-50 text-black">
      <p className="sm:text-5xl text-3xl font-extrabold space-grotesk">
        News from <span className="text-froozen">Vuselo</span>
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
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
    </div>
  );
}

export default BlogNews;
