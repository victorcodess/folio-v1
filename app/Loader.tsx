import { motion } from "framer-motion";

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
      duration: 50,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const Loader = ({ count = 5 }) => {
  return (
    <motion.div
      className=" flex h-[100vh] w-full items-center justify-center border-t-2 border-[#e4ded7]/30 bg-[#0E1016] pt-10  font-bold uppercase  md:py-16 lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
      variants={fadeOut}
    >
      {" "}
      <motion.div
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
      </motion.div>
    </motion.div>
  );
};

export default Loader;
