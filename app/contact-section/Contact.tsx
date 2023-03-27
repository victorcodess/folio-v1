import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../footer/Footer";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className=" relative flex z-10 h-[85vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-20 lg:pb-28"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-start justify-center ${monaSans.className} relative w-full max-w-[1200px] sm:items-center  lg:w-[1200px] `}
        >
          <AnimatedWords2
            title={"Let's Talk"}
            style={
              " inline-block overflow-hidden pt-1 -mb-4 sm:-mb-2 md:-mb-3 lg:-mb-4"
            }
          />
          <p className="heartbeat md:-bottom-18 absolute -bottom-9 left-60 text-[120px] sm:-bottom-14 sm:left-64 md:left-[35%] md:text-[150px] lg:-bottom-24 lg:left-[38%] lg:text-[230px]">
            🫶🏿
          </p>
        </div>

        <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-40">
          <div className=" flex w-[340px] flex-col items-end text-right text-[16px] font-semibold text-[#e4ded7] sm:w-[350px] sm:text-[18px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[350px] lg:text-[18px]">
            <AnimatedBody
              text={
                "Got a question, proposal or project or want to work together on something?"
              }
              className={
                "-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />
            <Link
              href="mailto:victor.williams@stu.cu.edu.ng?subject=Lets%20work%20together!&amp;body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
              target="_blank"
              aria-label="Send me an email"
              className="mt-1 w-[180px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[200px] md:mt-3 md:w-[200px] lg:mt-4"
            >
              <AnimatedBody text={"Feel free to reach out."} className={""} />
            </Link>
          </div>

          <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <Link href="https://github.com/victorcodess" target="_blank">
              <AnimatedTitle
                text={"GH"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
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
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link href="https://twitter.com/victorwill__" target="_blank">
              <AnimatedTitle
                text={"TW"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link href="https://www.instagram.com/victorr_w22/" target="_blank">
              <AnimatedTitle
                text={"IG"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link href="https://victorcodess.hashnode.dev/" target="_blank">
              <AnimatedTitle
                text={"HN"}
                className={
                  "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
