import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../footer/Footer";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

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
              Let&apos;s Talk
            </h1>
            <p className="heartbeat absolute -bottom-5 right-10 text-[120px] md:-bottom-24 md:right-56 md:text-[150px] lg:right-[37%] lg:text-[230px]">
              🫶🏿
            </p>
          </div>
        </div>

        <div className="mt-20 flex w-full flex-col items-end justify-center gap-8 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-40">
          <div className=" flex w-[340px] flex-col items-end text-right text-[16px] font-semibold text-[#e4ded7] md:w-[310px] md:text-left md:text-[16px] lg:w-[350px] lg:items-start lg:text-[18px]">
            <AnimatedBody
              text={
                "Got a question, proposal or project or want to work together on something?"
              }
              className={""}
            />
            <Link
              href="mailto:victor.williams@stu.cu.edu.ng?subject=Lets%20work%20together!&amp;body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
              target="_blank"
              aria-label="Send me an email"
              className="w-[180px] md:w-[200px] flex-1 underline underline-offset-2 hover:no-underline"
            >
              <p>Feel free to reach out.</p>
            </Link>
          </div>

          <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7]  md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <Link href="https://github.com/victorcodess" target="_blank">
              <AnimatedTitle
                text={"GH"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/victor-williams-chukwudi/"
              target="_blank"
            >
              <AnimatedTitle
                text={"LN"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link href="https://twitter.com/victorwill__" target="_blank">
              <AnimatedTitle
                text={"TW"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link href="https://www.instagram.com/victorr_w22/" target="_blank">
              <AnimatedTitle
                text={"IG"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link href="https://victorcodess.hashnode.dev/" target="_blank">
              <AnimatedTitle
                text={"HN"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
