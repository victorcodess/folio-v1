import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import {
  riseWithFade,
  imageAnimation,
  staggerChildren,
  wordAnimation,
  bodyAnimation,
} from "../animations/animations";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[80vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center py-0  md:h-[100vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color "></motion.div>

      <div className=" absolute top-10 flex justify-between  lg:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://drive.google.com/file/d/1sMiS1LMK23WjcYlh2irXnoeFpWpDapWq/view?usp=share_link"
            target="_blank"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[16px] font-semibold text-[#e4ded7] md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              VIEW RESUME
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] md:gap-8 lg:gap-14">
          <Link href="https://github.com/victorcodess" target="_blank">
            <AnimatedTitle
              text={"GH"}
              className={"text-[#e4ded7]md:text-[20px] text-[16px] font-bold"}
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
              className={"text-[#e4ded7]md:text-[20px] text-[16px] font-bold"}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          </Link>
          <Link href="https://twitter.com/victorwill__" target="_blank">
            <AnimatedTitle
              text={"TW"}
              className={"text-[#e4ded7]md:text-[20px] text-[16px] font-bold"}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}   `}
        >
          <h1 className=" max-w-[500px] text-center text-[96px] font-extrabold leading-[0.8em] text-[#e4ded7] md:max-w-[900px]  md:text-[155.5px] lg:text-[215px]">
            VICTOR WILLIAMS
          </h1>

          <motion.div
            className="absolute bottom-[-110px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            {" "}
            <Image
              src="/../public/profile.png"
              alt="Picture of the author"
              width={600}
              height={600}
              data-blobity-tooltip="Fine boy"
              data-blobity-invert="false"
              className="w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px]  lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Frontend Engineer and Product Designer, currently at{" "}
            <Link
              href="https://crownbrandingagency.com/ "
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
            >
              Crown Branding Agency.
            </Link>
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Focused on interfaces and experiences, working remotely from Lagos,
            Nigeria.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

type AnimatedWordsProps = {
  title: string;
  className?: string;
};

const AnimatedWords: React.FC<AnimatedWordsProps> = ({ title, className }) => {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map((word, index) => (
        <div key={index} className={className}>
          <motion.span
            className="inline-block overflow-hidden"
            variants={wordAnimation}
          >
            {word + "\u00A0"}
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
};

export default Hero;
