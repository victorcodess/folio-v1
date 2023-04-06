import SongCard from "./SongCard";
import { songs, SongProps } from "./songDetails";
import "../animations/animate.css";

const SongCarousel = () => {
  return (
    <div className="animate absolute bottom-5 flex w-[900%] border-[1px] border-[#0E1016] sm:w-[680%] md:w-[710%] lg:w-[380%]">
      <div className="mx-auto flex w-[50%] justify-around gap-1  lg:my-[1px]">
        {songs.map((song: SongProps, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            image={song.image}
            link={song.link}
          />
        ))}
      </div>
      <div className="mx-auto flex w-[50%] justify-around gap-1  lg:my-[1px]">
        {songs.map((song: SongProps, index) => (
          <SongCard
            key={index}
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
