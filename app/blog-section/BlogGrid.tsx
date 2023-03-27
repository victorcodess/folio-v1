import React from "react";
import BlogCard from "./BlogCard";
import { blogDetails, blogProps } from "./blogDetails";

const Blog = () => {
  return (
    <section className=" z-10 flex w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-28">
      <div className="grid w-[90%] max-w-[1200px] grid-cols-2 md:grid-cols-3 grid-rows-1 place-content-center place-items-center gap-x-6 gap-y-6">
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
