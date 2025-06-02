"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { PropsWithChildren } from "react";

type PolicyModalProps = PropsWithChildren<{
  title: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onAgree: () => void;
  onReject: () => void;
  isFooter?: boolean;
}>;

const PolicyModal = ({
  open,
  setOpen,
  title,
  children,
  onAgree,
  onReject,
  isFooter = false,
}: PolicyModalProps) => {
  return (
    <Modal show={open} onClose={() => setOpen(false)} dismissible>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      {!isFooter && (
        <ModalFooter>
          <Button
            onClick={onAgree}
            className="cursor-pointer bg-[#00b0fb] hover:bg-sky-500"
          >
            동의
          </Button>
          <Button
            color="alternative"
            onClick={onReject}
            className="cursor-pointer"
          >
            거절
          </Button>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default PolicyModal;
