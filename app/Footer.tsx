import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className=" bg-[#0E1016] w-full  items-center justify-center pt-10 md:py-16 lg:pt-6 lg:pb-0  h-[15vh] md:h-[20vh] lg:h-[10vh] border-t-2 border-[#e4ded7] uppercase font-bold">
      <div className="text-[#e4ded7] w-[90%] flex flex-row items-center justify-between mx-auto text-[12px] md:text-[16px] text-center">
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
