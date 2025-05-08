import React from "react";
import Image from "next/image";
import HeaderApplyButton from "./HeaderApplyButton";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 h-14 bg-black md:h-[68px]">
      <div className="container-2xl h-full">
        <div className="flex h-full items-center justify-between">
          <h1>
            <Image
              src="/kipa-logo-w.png"
              alt="Korea International Plastic Surgery & Aesthetic Fair"
              width={273}
              height={37}
              className="h-auto w-[200px] md:w-[273px]"
            />
          </h1>
          <HeaderApplyButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
