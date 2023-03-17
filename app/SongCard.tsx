import React from "react";
import Image from "next/image";

const SongCard = () => {
  return (
    <div>
      <Image
        src="/../public/alpaca.png"
        alt="Picture of the author"
        width={1920}
        height={987}
        data-blobity-tooltip="Song"
        data-blobity-invert="false"
        className="w-[250px] rounded-2xl"
      />
    </div>
  );
};

export default SongCard;
