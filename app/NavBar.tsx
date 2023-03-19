"use client";
import React from "react";
import Link from "next/link";
import ScrollLink from "./ScrollLink";

const NavBar = () => {
  return (
    <ul className="fixed bottom-20 left-[50%] z-50 ml-[-220px] flex items-center justify-center gap-1 rounded-lg bg-[#16161a] px-1 py-1 md:ml-[-256.5px] md:p-2">
      <ScrollLink href="#home">
        <li className=" rounded px-6 md:px-8 ">
          <h1 className="text-[16px] text-stone-300">Home</h1>
        </li>
      </ScrollLink>
      <ScrollLink href="#work">
        <li className=" rounded px-6 md:px-8 ">
          <h1 className="text-[16px] text-stone-300">Work</h1>
        </li>
      </ScrollLink>

      <ScrollLink href="#about">
        <li className=" rounded px-6 md:px-8 ">
          <h1 className="text-[16px] text-stone-300">About</h1>
        </li>
      </ScrollLink>

      <ScrollLink href="#contact">
        <li className=" rounded px-6 md:px-8 ">
          <h1 className="text-[16px] text-stone-300">Contact</h1>
        </li>
      </ScrollLink>
    </ul>
  );
};

export default NavBar;
