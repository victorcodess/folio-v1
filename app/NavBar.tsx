"use client";
import React from "react";

const NavBar = () => {
  return (
    <ul className="bg-[#16161a] flex fixed z-50 bottom-20 left-[50%] items-center justify-center ml-[-220px] md:ml-[-275px] px-1 py-1 md:p-2 gap-1 rounded-lg">
      <li className=" px-6 md:px-8 rounded ">
        <h1 className="text-stone-300 text-[16px]">Home</h1>
      </li>
      <li className=" px-6 md:px-8 rounded ">
        <h1 className="text-stone-300 text-[16px]">About</h1>
      </li>
      <li className=" px-6 md:px-8 rounded ">
        <h1 className="text-stone-300 text-[16px]">Work</h1>
      </li>
      <li className=" px-6 md:px-8 rounded ">
        <h1 className="text-stone-300 text-[16px]">Contact</h1>
      </li>
    </ul>
  );
};

export default NavBar;
