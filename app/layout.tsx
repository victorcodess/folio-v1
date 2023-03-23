import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Victor Williams — Frontend Engineer",
  description:
    "Frontend Engineer and Product Designer, currently at Crown Branding Agency. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
  generator: "Next.js",
  applicationName: "Victor Williams",
  keywords: [
    "frontend",
    "engineer",
    "product",
    "designer",
    "crown",
    "branding",
    "agency",
    "interfaces",
    "experiences",
    "remote",
    "lagos",
    "nigeria",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Victor Williams — Frontend Engineer",
    description:
      "Frontend Engineer and Product Designer, currently at Crown Branding Agency. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
    url: "https://nextjs.org",
    siteName: "Portfolio Website",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
        alt: "Victor Williams — Frontend Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  manifest: "https://nextjs.org/manifest.json",
  category: 'technology',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${syne.className} scrollbar-hide`}>
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
