import { motion } from "framer-motion";
import { staggerChildren, wordAnimation } from "./animations";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { type } from "os";

type AnimatedWordsProps = {
  title: string;
  style: string;
};

const AnimatedWords: React.FC<AnimatedWordsProps> = ({ title, style }) => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  return (
    <motion.span
      variants={staggerChildren}
      ref={ref}
      className="flex max-w-[500px] flex-col overflow-hidden  text-center text-[96px] font-extrabold  leading-[0.8em] text-[#e4ded7] sm:text-[120px] sm:leading-[0.85em] md:max-w-[900px] md:text-[155.5px] lg:text-[215px]"
    >
      {title.split(" ").map((word, index) => (
        <motion.div
          key={index}
          variants={staggerChildren}
          className="flex items-center justify-center overflow-hidden"
        >
          <motion.span className={style} variants={wordAnimation}>
            {word + "\u00A0"}
          </motion.span>
        </motion.div>
      ))}
    </motion.span>
  );
};

export default AnimatedWords;
