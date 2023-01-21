import { Button, JoinWaitlistForm, LearnMoreVideo } from "./home";
import React, { useEffect, useRef, useState } from "react";

import Modal from "./Modal";
import { motion } from "framer-motion";
import playIcon from "../assets/play-icon.svg";

const CTA = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (!showModal) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [showModal]);

  return (
    <>
      <div className="flex md:flex-row md:items-center md:gap-10 flex-col gap-6">
        <Button
          onClick={() => {
            setShowModal(true);
            setModalContent(
              <div className="min-h-screen w-full grid place-content-center">
                <JoinWaitlistForm />
              </div>
            );
          }}
        >
          Join Waitlist
        </Button>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setShowModal(true);
            setModalContent(<LearnMoreVideo videoRef={videoRef} />);
          }}
        >
          <motion.img
            src={playIcon}
            alt="play icon"
            whileHover={{ scale: 0.9 }}
          />
          <span className="text-[#Fea303] font-medium">Learn More</span>
        </div>
      </div>

      <Modal open={showModal} handleClose={() => setShowModal(false)}>
        {modalContent}
      </Modal>
    </>
  );
};

export default CTA;
