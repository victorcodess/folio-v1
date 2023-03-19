"use client";
import React from "react";
import Link from "next/link";
import ScrollLink from "./ScrollLink";

const NavBar = () => {
  return (
    <ul className="fixed bottom-20 left-[50%] z-50 ml-[-220px] flex items-center justify-center gap-1 rounded-lg bg-[#16161a]/90 px-1 py-1 text-[#e4ded7] backdrop-blur-md md:ml-[-256.5px] md:p-2">
      <ScrollLink href="#home">
        <li className=" rounded px-6 md:px-8 ">
          <h1 className="text-[16px]">Home</h1>
        </li>
      </ScrollLink>
      <ScrollLink href="#work">
        <li className=" rounded px-6 md:px-8 ">
          <h1 className="text-[16px]">Work</h1>
        </li>
      </ScrollLink>

      <ScrollLink href="#about">
        <li className=" rounded px-6 md:px-8 ">
          <h1 className="text-[16px]">About</h1>
        </li>
      </ScrollLink>

      <ScrollLink href="#contact">
        <li className=" rounded px-6 md:px-8 ">
          <h1 className="text-[16px]">Contact</h1>
        </li>
      </ScrollLink>
    </ul>
  );
};

export default NavBar;
