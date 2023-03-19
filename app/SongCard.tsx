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
        className={`w-[195px] h-[138px] sm:w-[200px] sm:h-[140px] md:w-[250px] md:h-[160px] lg:w-[270px] lg:h-[190px] relative  items-stretch z-10 justify-center py-0  bg-center rounded-xl overflow-hidden `}
      >
        <div className=" w-full h-[150%] bg-gradient-to-t from-black to-transparent hidden"></div>

        <div className="absolute bottom-3 left-5 hidden">
          <p className="text-white text-[14px]">{artist}</p>
          <h1 className="text-white text-[30px]">{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default SongCard;
