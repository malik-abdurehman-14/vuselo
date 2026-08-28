"use client";

import Link from "next/link";

function BlogCard({ img, title, desc, date, time }) {
  return (
    <Link
      href="blog-details"
      className="group bg-white rounded-lg text-black w-full overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-t-lg">
        <img
          className="w-full h-[300px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          src={img}
          alt=""
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <div className="bg-froozen text-black py-1 px-4 text-sm rounded-full w-fit">
          Devices
        </div>
        <p className="text-2xl space-grotesk font-bold group-hover:text-froozen">
          {title}
        </p>

        <p className="text-base">{desc}</p>

        <div className="text-sm flex items-center gap-2">
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
