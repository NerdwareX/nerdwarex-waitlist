import Logo from "../../assets/logo.png";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className="mt-20 pb-8 overflow-x-hidden text-white">
      <div className="2xl:px-[186px] lg:px-20 px-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-[85px]">
        {/* col1 */}
        <div className="flex flex-col gap-7">
          <div className="flex gap-1 items-center">
            <img src={Logo} alt="company logo" />
            <h3 className="text-2xl font-semibold overflow-y-hidden">
              NERDWAREX
            </h3>
          </div>
          <p className="text-lg">Learn anywhere and anytime</p>
          <div className="flex flex-col gap-4">
            <p className="text-lg">Follow us</p>
            <div className="flex items-center gap-3 ">
              <motion.div
                className="text-3xl cursor-pointer w-[58px] h-[58px] bg-white grid place-items-center rounded-full"
                whileHover={{ scale: 0.9 }}
              >
                <i className="ri-instagram-fill text-[#042e71]"></i>
              </motion.div>
              <motion.div
                className="text-3xl cursor-pointer w-[58px] h-[58px] bg-white grid place-items-center rounded-full"
                whileHover={{ scale: 0.9 }}
              >
                <i className="ri-linkedin-fill text-[#042e71]"></i>
              </motion.div>
              <motion.div
                className="text-3xl cursor-pointer w-[58px] h-[58px] bg-white grid place-items-center rounded-full"
                whileHover={{ scale: 0.9 }}
              >
                <i className="ri-twitter-fill text-[#042e71]"></i>
              </motion.div>
              {/*Telegram*/}
              <motion.div
                className="text-3xl cursor-pointer w-[58px] h-[58px] bg-white grid place-items-center rounded-full"
                whileHover={{ scale: 0.9 }}
              >
                <i className="ri-telegram-fill text-[#042e71]"></i>
              </motion.div>
            </div>
          </div>
        </div>
        {/* col2 */}
        <div className="flex flex-col gap-7">
          <h3 className="lg:text-2xl text-xl overflow-y-hidden">Explore</h3>
          <ul className="flex flex-col text-lg gap-2 lg:gap-4">
            <li className="mb-2 overflow-y-hidden">About</li>
            <li className="mb-2 overflow-y-hidden">Meet our teachers</li>
            <li className="mb-2 overflow-y-hidden">Courses</li>
            <li className=" overflow-y-hidden">Our plan</li>
          </ul>
        </div>
        {/* col3 */}
        <div className="flex flex-col gap-7">
          <h3 className="lg:text-2xl text-xl overflow-y-hidden">Legal</h3>
          <ul className="flex flex-col lg:gap-4 gap-2 text-lg">
            <li className="mb-2 overflow-y-hidden">Privacy & Policy</li>
            <li className="mb-2 overflow-y-hidden">Terms & Conditions</li>
            <li className="mb-2 overflow-y-hidden">FAQ</li>
            <li className=" overflow-y-hidden">Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="border-b border-b-[#15add9]"></div>
    </section>
  );
};

export default Footer;
