import React from "react";
import SongCard from "./SongCard";
import { songs, SongProps } from "./songDetails";
import "./animate.css";

const SongCarousel = () => {
  return (
    <div className="flex absolute animate w-[900%] sm:w-[640%] md:w-[710%] lg:w-[400%]">
      <div className="flex justify-around gap-1 w-[50%] mx-auto">
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
      <div className="flex justify-around gap-1 w-[50%] mx-auto">
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
    </div>
  );
};

export default SongCarousel;
