"use client";
import { Dispatch, SetStateAction } from "react";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";

type VideoModalProps = {
  title: string;
  videoId: string;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export function VideoModal({
  title,
  videoId,
  openModal,
  setOpenModal,
}: VideoModalProps) {
  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <ModalHeader className="p-3 md:p-4">{title}</ModalHeader>
      <ModalBody className="p-2 pt-0 md:p-4 md:pt-0">
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </ModalBody>
    </Modal>
  );
}
export default VideoModal;
