// "use client";

import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import NavBar from "./NavBar";
import type { NextFont } from "@next/font";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});



export const metadata: Metadata = {
  title: "Portfolio",
  description: "Victor's Portfolio",
};

// type Font = NextFont<typeof syne | typeof monaSans>;
type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${syne.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
