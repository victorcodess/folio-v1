import React from "react";
import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-24 md:pt-20 md:pb-44 lg:pt-20 lg:pb-52"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-28">
        <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7]/80 md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[20px] ">
          <AnimatedTitle
            text={"Hello there!"}
            className={
              "text-[40px] font-bold text-[#e4ded7] md:text-[44px] lg:text-[48px]"
            }
            wordSpace={"mr-[0.25em]"}
            charSpace={"mr-[0.01em]"}
          />

          <AnimatedBody
            text={
              "I’m a front-end engineer and product designer based in Lagos, Nigeria. My passion lies in creating software that solves real-world problems and positively impacts people’s lives."
            }
          />
          <AnimatedBody
            text={
              "Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
            }
            className={"hidden"}
          />
          <AnimatedBody
            text={
              "In addition to my work in software development, I’m also an active member of tech communities on campus, including GDSC and MLSA. I’m always eager to collaborate with other passionate individuals to build solutions for local problems and gain new skills through hands-on workshops, events, talks, and project-building activities."
            }
          />
          <AnimatedBody
            text={
              "I also love indulging in my hobbies when I’m not busy in VSCode or Figma. Whether it’s binge-watching my favorite anime series, cheering on Manchester United, hanging out with friends, or discovering new music in my favorite genres like RnB, UK Drill, and Chill Rap, I’m always looking for ways to relax and unwind."
            }
          />
          <AnimatedBody
            text={
              "Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations. If you’re a hiring manager or startup founder/CTO who’s looking for someone with both technical skills and a creative edge, then look no further. Get in touch with me on any of the platforms listed below, and let’s chat!"
            }
          />
        </div>

        <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-10 md:text-[20px] md:leading-normal lg:mt-16 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
          <div className="flex flex-col gap-4 md:gap-6">
            <AnimatedTitle
              text={"Frontend Tools"}
              className={
                "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[24px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              text={
                "JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux Toolkit, React Testing Library, Vitetest, HTML5, Git/GitHub, NextAuth, Formik."
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <AnimatedTitle
              text={"UI Libraries"}
              className={
                "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[24px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              text={
                "CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion, Bootstrap, Chart.js."
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <AnimatedTitle
              text={"Design Tools"}
              className={
                "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[24px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              text={
                "  Figma, FigJam, Adobe XD, ProtoPie, Adobe Photoshop, UX Research, UI Design, Prototyping."
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-10 md:-mt-0 lg:mt-32">
        <SongCarousel />
      </div>
    </section>
  );
};

export default About;
