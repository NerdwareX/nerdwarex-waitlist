import LearnVideo from "../../assets/learn-more.mp4";
import React from "react";

const LearnMoreVideo = ({ videoRef }) => {
  return (
    <video
      ref={videoRef}
      src={LearnVideo}
      autoPlay
      muted
      loop
      className="h-screen w-screen object-cover"
    ></video>
  );
};

export default LearnMoreVideo;
