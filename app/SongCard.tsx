import React from "react";
import Image from "next/image";
import { SongProps } from "./songDetails";
import Link from "next/link";

const SongCard = ({ id, title, artist, image, link }: SongProps) => {
  return (
    <Link href={link} target="_blank">
      <div
        style={
          {
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          } as React.CSSProperties
        }
        className={`relative z-10 h-[138px] w-[195px] items-stretch justify-center overflow-hidden rounded-xl bg-center  py-0 sm:h-[140px] sm:w-[200px] md:h-[160px]  md:w-[250px] lg:h-[190px] lg:w-[270px] `}
      >
        <div className=" hidden h-[150%] w-full bg-gradient-to-t from-black to-transparent"></div>

        <div className="absolute bottom-3 left-5 hidden">
          <p className="text-[14px] text-white">{artist}</p>
          <h1 className="text-[30px] text-white">{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default SongCard;
