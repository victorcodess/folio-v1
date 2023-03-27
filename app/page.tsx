"use client";
import "./globals.css";
import Hero from "./hero-section/Hero";
import Work from "./work-section/Work";
import About from "./about-section/About";
import Contact from "./contact-section/Contact";
import Footer from "./footer/Footer";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect, useState, useRef } from "react";
import { ScrollerMotion } from "scroller-motion";
import PreLoader from "./animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import Blog from "./blog-section/Blog";

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  return (
    <>
      {/* <ScrollerMotion> */}
        {/* <PreLoader /> */}

        <main className="flex flex-col items-center justify-center">
          {/* <Hero /> */}
          {/* <Work /> */}
          {/* <About /> */}
          <Blog/>
          <Contact />
          <Footer />
        </main>
      {/* </ScrollerMotion> */}
    </>
  );
}
