"use client";
import React from "react";
import Link from "next/link";
import ScrollLink from "./ScrollLink";

const NavBar = () => {
  return (
    <ul className="bg-[#16161a] flex fixed z-50 bottom-20 left-[50%] items-center justify-center ml-[-220px] md:ml-[-256.5px] px-1 py-1 md:p-2 gap-1 rounded-lg">
      <ScrollLink href="#home">
        <li className=" px-6 md:px-8 rounded ">
          <h1 className="text-stone-300 text-[16px]">Home</h1>
        </li>
      </ScrollLink>
      <ScrollLink href="#work">
        <li className=" px-6 md:px-8 rounded ">
          <h1 className="text-stone-300 text-[16px]">Work</h1>
        </li>
      </ScrollLink>

      <ScrollLink href="#about">
        <li className=" px-6 md:px-8 rounded ">
          <h1 className="text-stone-300 text-[16px]">About</h1>
        </li>
      </ScrollLink>

      <ScrollLink href="#contact">
        <li className=" px-6 md:px-8 rounded ">
          <h1 className="text-stone-300 text-[16px]">Contact</h1>
        </li>
      </ScrollLink>
    </ul>
  );
};

export default NavBar;
