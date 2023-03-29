import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";

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
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Victor Williams — Frontend Engineer",
    description:
      "Frontend Engineer and Product Designer, currently at Crown Branding Agency. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
    url: "https://folio-v1-seven.vercel.app/",
    siteName: "Portfolio Website",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/227943215-a5b93611-01e0-4a58-9e85-984c2ecaaa85.png",
        width: 1200,
        height: 900,
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
  manifest: "https://nextjs.org/manifest.json",
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className}  scroll-smooth scrollbar-thin  scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}
