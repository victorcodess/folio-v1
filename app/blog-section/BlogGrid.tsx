import React from "react";
import BlogCard from "./BlogCard";
import { blogDetails, blogProps } from "./blogDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";

const Blog = () => {
  return (
    <section className=" z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 md:pb-40">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  sm:items-center lg:max-w-[1440px] text-[#e4ded7]`}
      >
        {" "}
        <AnimatedWords2
          title={"Blog"}
          style={`flex max-w-[500px] flex-col items-start text-left text-[126px] ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[160px] md:text-[190px] lg:text-center lg:text-[215.04px]`}
        />
        <AnimatedBody
          text="I write articles to reinfornce my knowledge and help out others who might be building something similar."
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <div className="grid w-[90%] max-w-[1200px] grid-cols-2 grid-rows-1 place-content-center place-items-center gap-x-6 gap-y-6 md:grid-cols-3">
        {blogDetails.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              image={blog.image}
              url={blog.url}
              date={blog.date}
              available={blog.available}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
