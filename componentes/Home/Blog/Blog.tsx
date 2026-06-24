import React from "react";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <div className="pt-16 pb-16 bg-white">
      <h2 className="text-[#b69974] text-lg text-center font-medium tracking-widest">
        Blog
      </h2>

      <h1 className="text-3xl md:text-5xl mt-4 text-black font-bold text-center">
        Latest news & articles <br />
        From Our Blog
      </h1>

      <div
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        data-aos-delay="0"
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20"
      >
        <BlogCard
          image="/images/b1.png"
          title="Standard chunk of Lorem Ipsum Our Company"
        />

        <BlogCard
          image="/images/b2.png"
          title="These cases are many simple and easy"
        />

        <BlogCard
          image="/images/b3.png"
          title="Standard chunk of Lorem Ipsum Our Company"
        />
      </div>
    </div>
  );
}