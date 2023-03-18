import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";
import { monaSans } from "./fonts/monaSans";

const Contact = () => {
  return (
    <section
      className=" bg-[#0E1016] bg-cover w-full relative items-center justify-center z-10 py-16 md:py-20 lg:pt-20 lg:pb-28 bg-center overflow-hidden h-[80vh] md:h-[80vh] lg:h-[90vh]"
      id="contact"
    >
      <div className="w-[90%]  flex flex-col items-center justify-center pt-10 md:pt-0 mx-auto">
        <div
          className={`flex flex-col items-start justify-center lg:justify-center relative ${monaSans.className}  w-full max-w-[1200px]`}
        >
          <div className="w-[340px] lg:w-[1200px]">
            {" "}
            <h1 className="text-[150px] md:text-[200px] lg:text-[343.1px] font-extrabold text-[#e4ded7] max-w-[500px] md:max-w-full text-left lg:text-center leading-[0.9em] uppercase ">
              Let's Talk
            </h1>
            <p className="absolute -bottom-5 md:-bottom-24 right-10 md:right-56 lg:right-[37%] text-[120px] md:text-[150px] lg:text-[230px]">
              🫶🏿
            </p>
          </div>
        </div>

        <div className="mt-24 lg:mt-40 w-full flex flex-col lg:flex-row items-end justify-center lg:items-start lg:justify-between gap-6">
          <div className=" text-[#e4ded7] text-[16px] md:text-[28px] lg:text-[18px] font-semibold lg:w-[350px] text-right lg:text-left">
            <p>Got a question, proposal or project or want to work together on something? Feel free to reach out.</p>
          </div>
          <ul className="flex gap-10 md:gap-16 lg:gap-20 text-[#e4ded7]  text-[16px] md:text-[28px] font-bold">
            <Link href="https://github.com/victorcodess" target="_blank">
              <li className=" ">GH</li>
            </Link>
            <Link
              href="https://www.linkedin.com/in/victor-williams-chukwudi/"
              target="_blank"
            >
              <li className=" ">LN</li>
            </Link>
            <Link href="https://twitter.com/victorwill__" target="_blank">
              <li className=" ">TW</li>
            </Link>
            <Link href="https://www.instagram.com/victorr_w22/" target="_blank">
              <li className=" ">IG</li>
            </Link>
            <Link href="https://victorcodess.hashnode.dev/" target="_blank">
              <li className=" ">HN</li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
