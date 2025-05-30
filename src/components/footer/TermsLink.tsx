"use client";

import { useState } from "react";
import PolicyModal from "../modal/PolicyModal";
import Terms from "../policy/Terms";

const TermsLink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsModalOpen(true);
        }}
      >
        Terms of Use
      </a>

      <PolicyModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        title="이용약관"
        onAgree={() => setIsModalOpen(false)}
        onReject={() => setIsModalOpen(false)}
        isFooter
      >
        <Terms />
      </PolicyModal>
    </>
  );
};

export default TermsLink;
