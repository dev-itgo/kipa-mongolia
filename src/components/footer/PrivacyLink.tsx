"use client";

import { useState } from "react";
import PolicyModal from "../modal/PolicyModal";
import Privacy from "../policy/Privacy";

const PrivacyLink = () => {
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  return (
    <>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsPolicyModalOpen(true);
        }}
      >
        Privacy Statement
      </a>

      <PolicyModal
        open={isPolicyModalOpen}
        setOpen={setIsPolicyModalOpen}
        title="ХУВИЙН МЭДЭЭЛЭЛ БОЛОВСРУУЛАХ БОДЛОГО"
        onAgree={() => setIsPolicyModalOpen(false)}
        onReject={() => setIsPolicyModalOpen(false)}
        isFooter
      >
        <Privacy />
      </PolicyModal>
    </>
  );
};

export default PrivacyLink;
