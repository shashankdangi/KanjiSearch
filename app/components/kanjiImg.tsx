"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import useStore from "../store/useStore";
import { useState } from "react";

const KanjiImg = () => {
  const image = useStore((state) => state.KanjiData?.video.poster);
  const videoUrl = useStore((state) => state.KanjiData?.video.webm);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="w-130 h-100 p-2 flex flex-col gap-2 justify-center items-center">
      {/* Show poster image when not playing */}
      {!isPlaying && image && (
        <div className="h-[90%] w-full flex justify-center items-center bg-white rounded-md">
          <Image alt="Kanji Poster" width={500} height={500} src={image} />
        </div>
      )}

      {/* Show video when playing */}
      {isPlaying && videoUrl && (
        <div className="h-[90%] w-full flex justify-center items-center bg-white rounded-md">
          <video
            autoPlay
            className="w-full h-full object-cover"
            onEnded={handleEnd}
          >
            <source src={videoUrl} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Play button */}
      <div className="w-full flex justify-center items-center gap-3 mt-2">
        {!isPlaying && (
          <Play
            onClick={handlePlay}
            className="hover:cursor-pointer text-blue-500"
          />
        )}
      </div>
    </div>
  );
};

export default KanjiImg;
