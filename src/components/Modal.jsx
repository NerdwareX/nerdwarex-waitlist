import React, { useEffect } from "react";

import { HiX } from "react-icons/hi";
import MaxWidthContainer from "./MaxWidthContainer";
import { motion } from "framer-motion";

const Modal = ({ children, open, handleClose }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    if (open) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "auto";
    }
  }, [open]);

  return (
    <motion.div
      animate={{ scale: open ? 1 : 0, opacity: open ? [0, 1] : 0 }}
      transition={{ ease: "easeOut" }}
      className="bg-white fixed top-0 left-0 w-screen h-screen overflow-y-scroll overflow-x-hidden z-[151]"
    >
      {/* Close button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2, transition: { ease: "easeOut" } }}
        className="fixed top-5 left-5 h-[48px] w-[48px] hover:bg-[rgba(0,0,0,0.2)] hover:text-white transition-all duration-150 ease-out rounded-full grid place-content-center z-[152]"
        onClick={handleClose}
      >
        <HiX size={30} />
      </motion.button>

      {/* Modal content */}
      <MaxWidthContainer>{children}</MaxWidthContainer>
    </motion.div>
  );
};

export default Modal;
