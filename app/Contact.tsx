import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";
import { monaSans } from "./fonts/monaSans";
import "./animate.css";

const Contact = () => {
  return (
    <section
      className=" relative z-10 h-[85vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-20 lg:pb-28"
      id="contact"
    >
      <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`relative flex flex-col items-start justify-center lg:justify-center ${monaSans.className}  w-full max-w-[1200px]`}
        >
          <div className="w-[340px] md:w-full lg:w-[1200px] ">
            {" "}
            <h1 className="max-w-[500px] text-left text-[150px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] md:max-w-full md:text-center md:text-[200px] lg:text-center lg:text-[343.1px] ">
              Let's Talk
            </h1>
            <p className="heartbeat absolute -bottom-5 right-10 text-[120px] md:-bottom-24 md:right-56 md:text-[150px] lg:right-[37%] lg:text-[230px]">
              🫶🏿
            </p>
          </div>
        </div>

        <div className="mt-20 flex w-full flex-col items-end justify-center gap-8 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-40">
          <div className=" text-right text-[16px] font-semibold text-[#e4ded7] md:w-[310px] md:text-left md:text-[16px] lg:w-[350px] lg:text-[18px]">
            <p>
              Got a question, proposal or project or want to work together on
              something? Feel free to reach out.
            </p>
          </div>

          <ul className="flex gap-10 text-[16px] font-bold text-[#e4ded7]  md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
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
