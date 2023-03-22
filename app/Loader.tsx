import { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "./animations/AnimatedTitle";
import { Dispatch, SetStateAction } from "react";
import { IProps } from "./utils/types";
import { useRouter } from "next/router";

const colors = ["#22238f", "#6b45fa", "#ca3286", "#fe2b49", "#fe652d"];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const dotVariants = {
  initial: {},
  animate: {
    height: [40, 100, 40],
    transition: {
      repeat: Infinity,
    },
  },
};

const fadeOut = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      delay: 5,
      duration: 2,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const Loader = ({ setLoading }: IProps) => {
  // const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //     router.push("/home");
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // });

  return (
    <motion.div
      className=" flex h-[100vh] w-full items-center justify-center border-t-2 border-[#e4ded7]/30 pt-10  font-bold uppercase  md:py-16 lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
      exit="exit"
      // variants={fadeOut}
      onAnimationComplete={() => setLoading(false)}
      // exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016]  "
        layoutId="dark-bg"
        // exit={{ opacity: 0 }}
      ></motion.div>{" "}
      {/* <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        style={{
          display: "flex",
          gap: 16,
          height: 100,
          alignItems: "center",
        }}
        className="mx-auto"
      >
        {Array(count)
          .fill(null)
          .map((_, index) => {
            return (
              <motion.div
                key={index}
                variants={dotVariants}
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: colors[index % colors.length],
                  borderRadius: 20,
                }}
              />
            );
          })}
      </motion.div> */}
      <div className="flex gap-1 text-[16px] font-bold text-[#e4ded7]  md:gap-1 md:text-[16px] lg:gap-1 lg:text-[28px]">
        <AnimatedTitle
          text={"Developer,"}
          className={
            "text-[16px] font-bold text-[#e4ded7] md:text-[16px] lg:text-[28px]"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"mr-[0.01em]"}
        />
        <AnimatedTitle
          text={"Designer,"}
          className={
            "text-[16px] font-bold text-[#e4ded7] md:text-[16px] lg:text-[28px]"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"mr-[0.01em]"}
        />
        <AnimatedTitle
          text={"Driller."}
          className={
            "text-[16px] font-bold text-[#e4ded7] md:text-[16px] lg:text-[28px]"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"mr-[0.01em]"}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
