"use client";
import Hero from "./Hero";
import Work from "./Work";
import About from "./About";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";

export default function Home() {
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

  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Work />
      <About />
    </main>
  );
}
