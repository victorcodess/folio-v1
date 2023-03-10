import "./globals.css";
import { Syne } from "@next/font/google";
import NavBar from "./NavBar";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio",
  description: "Victor's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
