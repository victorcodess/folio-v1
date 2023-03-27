import React from "react";
import { blogProps } from "./blogDetails";
import Image from "next/image";
import "../globals.css";

const BlogCard = ({ title, image, url, date, available }: blogProps) => {
  return (
    <div className="relative flex h-[430px] w-[100%] max-w-[400px] flex-col items-center justify-start rounded-2xl bg-[#212531]">
      <div className="mt-4 h-[100%] w-[90%] lg:mt-5 lg:w-[92%]">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="h-[60%] w-full items-stretch rounded-lg bg-cover bg-center md:h-[60%]"
        />
        <h3 className="mt-3 break-all uppercase leading-[1em] tracking-tight line-clamp-2">
          {title}
        </h3>
      </div>

      <div className="absolute bottom-0 mb-5 flex w-[90%] justify-between text-[14px] font-bold text-[#7A7C83]">
        <p></p>
        {available ? <p>{date}</p> : <p>Coming soon</p>}
      </div>
    </div>
  );
};

export default BlogCard;
