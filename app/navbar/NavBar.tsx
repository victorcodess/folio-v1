"use client";
import React from "react";
import Link from "next/link";
import ScrollLink from "./ScrollLink";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <nav className="fixed bottom-10 left-0 right-0 z-50 my-0  mx-auto  flex w-[383.3px] items-center justify-center gap-1 rounded-lg bg-[#07070a]/90 px-1 py-1 text-[#e4ded7] backdrop-blur-md md:p-2 lg:w-[391.3px] ">
      <Link
        href="https://drive.google.com/file/d/1sMiS1LMK23WjcYlh2irXnoeFpWpDapWq/view?usp=share_link"
        target="_blank"
        className="flex"
        aria-label="Open my resume"
        data-blobity-tooltip="View Resume"
        data-blobity-magnetic="false"
      >
        {/* <FontAwesomeIcon
          icon={faReceipt}
          className="py-2    px-4 text-[16px] md:py-1"
        /> */}
        <FontAwesomeIcon
          icon={faFilePdf}
          className="py-2 px-4 text-[16px] md:py-1"
        />
      </Link>

      <ScrollLink href="#home" data-blobity-magnetic="false">
        <h4 className="rounded py-2 px-4 text-[14px] md:py-1 md:px-4">Home</h4>
      </ScrollLink>
      <ScrollLink href="#work" data-blobity-magnetic="false">
        <h4 className="rounded py-2 px-4 text-[14px] md:py-1 md:px-4">Work</h4>
      </ScrollLink>

      <ScrollLink href="#about" data-blobity-magnetic="false">
        <h4 className="rounded py-2 px-4 text-[14px] md:py-1 md:px-4">About</h4>
      </ScrollLink>

      <ScrollLink href="#contact" data-blobity-magnetic="false">
        <h4 className="rounded py-2 px-4 text-[14px] md:py-1 md:px-4">
          Contact
        </h4>
      </ScrollLink>
    </nav>
  );
};

export default NavBar;
