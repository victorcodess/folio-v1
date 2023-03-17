import React from "react";
import SongCard from "./SongCard";
import { songs, SongProps } from "./songDetails";

const SongCarousel = () => {
  return (
    <div
      //   style={{
      //     transform:
      //       "translate3d(-14.086%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
      //     transformStyle: "preserve-3d",
      //     transition: "transform 0.5s ease-in-out",
      //     willChange: "transform",
      //   }}
      className="flex gap-3 overflow-hidden w-[90%] mx-auto"
    >
      {songs.map((song: SongProps) => (
        <SongCard
          id={song.id}
          key={song.id}
          title={song.title}
          artist={song.artist}
          image={song.image}
          link={song.link}
        />
      ))}
    </div>
  );
};

export default SongCarousel;
