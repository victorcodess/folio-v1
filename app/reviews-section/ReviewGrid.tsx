import ReviewCard from "./ReviewCard";
import { reviewDetails } from "./reviewDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import hireMe from "../../public/hiremeoncontra-dark.webp";
import Image from "next/image";

const Reviews = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-24">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Testimonials"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />
        <AnimatedBody
          text="Real Stories from Clients and Collaborators Who Have Experienced My Work Firsthand"
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <motion.div className="grid w-[90%] max-w-[1345px] grid-cols-1 grid-rows-6 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-cols-2  sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
        {reviewDetails.map((review, index) => {
          return (
            <ReviewCard
              key={index}
              name={review.name}
              role={review.role}
              company={review.company}
              profileImg={review.profileImg}
              testimonial={review.testimonial}
              index={index}
            />
          );
        })}
      </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: 0.1,
            ease: [0.44, 0, 0.22, 0.99],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        href="https://contra.com/victorwilliams"
        target="_blank"
        className="mt-10 mb-5 sm:mb-0 sm:mt-20"
      >
        <Image src={hireMe} alt={"hire me"} className="w-full" />
      </motion.a>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            delay: 0.1,
            ease: [0.44, 0, 0.22, 0.99],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        className="contra-hire-me-button mt-20"
        data-analyticsUserId="f6264c4e-279b-4675-80e8-739c55eee53f"
        data-theme="dark"
        data-username="victorwilliams"
      ></motion.div>
      <script
        async
        src="https://contra.com/static/embed/sdk.js"
        charSet="utf-8"
      ></script> */}
    </section>
  );
};

export default Reviews;
