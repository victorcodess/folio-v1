"use client";

import "./globals.css";
import { useEffect } from "react";
import { Syne } from "@next/font/google";
import localFont from "@next/font/local";
import NavBar from "./NavBar";
import useBlobity from "blobity/lib/react/useBlobity";

export const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const monaSans = localFont({
  src: [
    {
      path: "./fonts/Mona-Sans-BlackNarrow.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Mona-Sans-BlackNarrowItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/Mona-Sans-BoldNarrow.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Mona-Sans-BoldNarrowItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Mona-Sans-LightNarrow.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Mona-Sans-LightNarrowItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Mona-Sans-MediumNarrow.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Mona-Sans-MediumNarrowItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Mona-Sans-SemiBoldNarrow.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Mona-Sans-SemiBoldNarrowItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Mona-Sans-ExtraBoldNarrow.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Mona-Sans-UltraLightNarrow.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Mona-Sans-RegularNarrowItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "Portfolio",
  description: "Victor's Portfolio",
};

export default function RootLayout({ children }) {
  const blobity = useBlobity({
    licenseKey: "gmrchk",
    focusableElementsOffsetX: 5,
    focusableElementsOffsetY: 5,
    color: "#e4ded7",
    dotColor: "#0e1016",
    invert: true,
    focusableElements:
      "[data-blobity], a:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
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

  // console.log(useBlobity());

  useEffect(() => {
    if (blobity.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobity.current;
    }
  }, [blobity]);

  return (
    <html lang="en">
      <body className={`${syne.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
