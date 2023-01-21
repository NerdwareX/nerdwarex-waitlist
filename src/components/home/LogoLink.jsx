import React from "react";
import cx from "classnames";
import logo from "../../assets/logo.png";

const LogoLink = ({ className, violet = false, shrink = true }) => {
  return (
    <a href="/" className={cx("flex items-center sm:gap-1 gap-0", className)}>
      <img src={logo} alt="company logo" />
      <h1
        className={`font-Inter ${violet ? "text-[#2B2B8B]" : "text-white"}  ${
          shrink ? "text-base" : "text-2xl font-semibold"
        } sm:text-2xl font-semibold`}
      >
        NERDWAREX
      </h1>
    </a>
  );
};

export default LogoLink;
