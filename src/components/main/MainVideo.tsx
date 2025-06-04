"use client";
import { useState } from "react";
import { IoPlay } from "react-icons/io5";
import VideoModal from "../modal/VideoModal";
import Image from "next/image";

type MainVideoProps = {
  title: string;
  videoId?: string;
};

const MainVideo = ({ title, videoId }: MainVideoProps) => {
  const [openModal, setOpenModal] = useState(false);

  if (videoId === "" || !videoId) {
    return null;
  }
  return (
    <>
      <div
        className="relative h-full w-full cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        {videoId && (
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            width={1280}
            height={720}
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/10" />
        <IoPlay
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
          size={40}
        />
      </div>
      <VideoModal
        title={title}
        videoId={videoId}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default MainVideo;
