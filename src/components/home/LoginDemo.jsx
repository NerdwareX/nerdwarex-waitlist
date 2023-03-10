import React from "react";
import { motion } from "framer-motion";
import unstoppabledomains from "../../assets/unstoppable.svg";

function LoginDemo({ userActive, domainName, login, logout}) {
 
  return (
    <div id="LoginDemoArea">
      <motion.button
        className="px-[23px] py-2 btn-primary rounded-[20px]  text-white flex items-center gap-x-2 mx-auto font-medium"
        onClick={login}
        whileTap={{ scale: 0.9 }}
      >
        <img src={unstoppabledomains} alt="Unstoppable domains logo" className="w-[25px] h-[25px]" />
        {userActive ? domainName : "Unstoppable Domains"}
      </motion.button>
      <br />
      {userActive && (
        <motion.button
          variant="danger"
          onClick={logout}
          className="px-[23px] py-2 btn-primary rounded-[20px] text-white flex mx-auto font-medium"
          whileTap={{ scale: 0.9 }}
        >
          Logout
        </motion.button>
      )}
    </div>
  );
}

export default LoginDemo;
