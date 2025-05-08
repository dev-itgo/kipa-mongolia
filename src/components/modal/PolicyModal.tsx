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
}>;

const PolicyModal = ({
  open,
  setOpen,
  title,
  children,
  onAgree,
  onReject,
}: PolicyModalProps) => {
  return (
    <Modal show={open} onClose={() => setOpen(false)}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button onClick={onAgree}>동의</Button>
        <Button color="gray" onClick={onReject}>
          거절
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default PolicyModal;
