"use client";
import { useState } from "react";
import { IoPlay } from "react-icons/io5";
import VideoModal from "../modal/VideoModal";

type MainVideoProps = {
  title: string;
  videoUrl: string;
};

const MainVideo = ({ title, videoUrl }: MainVideoProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className="relative h-full w-full"
        onClick={() => setOpenModal(true)}
      >
        <IoPlay
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
          size={40}
        />
      </div>
      <VideoModal
        title={title}
        videoUrl={videoUrl}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default MainVideo;
