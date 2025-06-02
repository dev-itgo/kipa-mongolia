"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronDown } from "react-icons/fi";

type MainFaqAccordionProps = {
  title: string;
  desc: string;
};

const MainFaqAccordion = ({ title, desc }: MainFaqAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border-1 border-[#333] p-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-full cursor-pointer items-center gap-4 px-2"
      >
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#666]">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown size={14} className="text-[#666]" />
          </motion.div>
        </div>
        <h5 className="grow-0 text-left text-sm font-bold md:text-[16px]">
          {title}
        </h5>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden px-2"
          >
            <hr className="my-4 border-t-1 border-t-[#333]" />
            <p className="pb-4 text-xs md:text-sm">{desc}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainFaqAccordion;
