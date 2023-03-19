import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className=" h-[15vh] w-full  items-center justify-center border-t-2 border-[#e4ded7] bg-[#0E1016] pt-10  font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0">
      <div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] md:text-[16px]">
        <p className="m-0 p-0">Copyright 2023</p>
        <p className="m-0 p-0">
          Design & Development by{" "}
          <Link href="https://github.com/victorcodess" target="_blank">
            <span className="underline underline-offset-2 hover:no-underline">
              Victor Williams
            </span>{" "}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Footer;
