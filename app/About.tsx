import React from "react";
import SongCarousel from "./SongCarousel";

const About = () => {
  return (
    <section
      className="bg-[#0E1016] bg-cover w-full relative items-center justify-center z-10 py-16 md:py-20 lg:py-28 bg-center"
      id="about"
    >
      <div className="flex flex-col lg:flex-row mx-auto w-[90%] lg:max-w-[1440] lg:gap-52">
        <div className="flex flex-col gap-4 md:gap-6 w-[100%] lg:max-w-[70%] text-[#e4ded7]/80 mb-10 md:mb-16 lg:mb-16 text-[18px] md:text-[24px] lg:text-[24px] leading-snug md:leading-normal  font-normal">
          <p className="text-[40px] md:text-[44px] lg:text-[48px] font-bold text-[#e4ded7]">
            Hi there!👋🏿
          </p>
          <p>
            I'm a software engineer based in Lagos, Nigeria. I'm passionate
            about building software that solves real-world problems. I'm
            currently working on a few projects that I hope to launch soon. In
            the meantime, I'm open to new opportunities. Feel free to reach out
            to me on any of the platforms below.
          </p>

          <p>
            I enjoy watching anime and I am very into the Marvel franchise. I
            listen to lots of music and James Blake, Jon Bellion and Isak
            Danielson are some of my favourite artists (for now). Let's not
            forget the guys at Snarky Puppy, they are magical. I spend most of
            my free time with my family and my cat.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-10 w-[100%] lg:max-w-[30%] text-[#e4ded7]/80 lg:mt-24 mb-10 md:mb-16 lg:mb-16 text-[18px] md:text-[24px] lg:text-[18px] leading-snug md:leading-normal font-medium">
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-[24px] md:text-[30px] lg:text-[24px] text-[#e4ded7]">
              Frontend Tools
            </h3>
            <p className="">
              JavaScript(ES6+), React, Next.js, TypeScript, Redux, Jest HTML5,
              Git/GitHub, NextAuth, Formik .
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] md:text-[30px] lg:text-[24px] text-[#e4ded7]">
              UI Libraries
            </h3>
            <p className="">
              CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion,
              Bootstrap, Chart.js.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] md:text-[30px] lg:text-[24px] text-[#e4ded7]">
              Design Tools
            </h3>
            <p className="">
              Figma, FigJam, Adobe XD, ProtoPie, Adobe Photoshop, Adobe Illustrator, UX Research, UI Design, Prototyping.
            </p>
          </div>
        </div>
      </div>
        <SongCarousel />
    </section>
  );
};

export default About;
