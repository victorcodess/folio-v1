"use client";
import "./globals.css";
import Hero from "./hero-section/Hero";
import Work from "./work-section/Work";
import About from "./about-section/About";
import Contact from "./contact-section/Contact";
import Footer from "./footer/Footer";
import AnimatedTitle from "./animations/AnimatedTitle";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { ScrollerMotion } from "scroller-motion";
import SmoothScroll from "./utils/SmoothScroll";
import Loader from "./Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const blobity = useBlobity({
    licenseKey: "gmrchk",
    focusableElementsOffsetX: 5,
    focusableElementsOffsetY: 5,
    color: "#e4ded7",
    dotColor: "#0e1016",
    invert: true,
    focusableElements:
      "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
    font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
    fontSize: 16,
    fontWeight: 500,
    opacity: 1,
    fontColor: "#0e1016",
    zIndex: 100,
    size: 40,
    radius: 4,
    magnetic: true,
  });

  useEffect(() => {
    if (blobity.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobity.current;
    }
  }, [blobity]);

  interface IProps {
    loading: boolean;
    setLoading: (loading: boolean) => void;
  }

  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading ? (
          <motion.div key={"loader"}>
            {" "}
            <Loader setLoading={setLoading} loading={loading} />
          </motion.div>
        ) : (
          <main className="flex flex-col items-center justify-center ">
            {!loading && (
              <motion.div
                className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color "
                layoutId="dark-bg"
                transition={{
                  ease: [0.2, 0.65, 0.3, 0.9],
                  duration: 1,
                  delay: 5,
                }}
                // exit={{ opacity: 0 }}
              ></motion.div>
            )}
            <Hero loading={loading} />
            <Work />
            <About />
            <Contact />
            <Footer />
          </main>
        )}
        {/* <ScrollerMotion> */}
        {/* <Loader setLoading={setLoading} /> */}

        {/* </ScrollerMotion> */}
      </AnimatePresence>
    </LayoutGroup>
  );
}
