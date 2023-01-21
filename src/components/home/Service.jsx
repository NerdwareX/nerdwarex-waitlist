import React from "react";
import ServiceImg from "../../assets/home3.png";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="w-full lg:h-[400px] flex items-center 2xl:px-[186px] lg:px-20 px-8 mt-12 mb-16">
      <div className="grid lg:grid-cols-2 grid-cols-1 md:items-center w-full h-full gap-10 lg:gap-2 overflow-hidden">
        {/* left */}
        <div
          className="md:flex lg:justify-start w-[50%] h-auto lg:w-full mx-auto"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          <img src={ServiceImg} alt="" />
        </div>
        {/* right */}
        <div
          className="flex flex-col gap-7 text-center items-center lg:items-start lg:text-left"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2 className="text-white xl:text-[40px] lg:text-3xl text-2xl font-semibold overflow-y-hidden ">
            Become
            <span className="block lg:pt-4 overflow-y-hidden">
              an Instructor
            </span>
          </h2>
          <p className="text-lg text-[#e0e0e0]">
            Interested in becoming a tutor, instructor, mentor on nerdwarex easy
            and fast and reliable
          </p>
          <motion.button
            className="px-[23px] py-2 btn-primary rounded-[20px] text-white "
            whileTap={{ scale: 0.9 }}
          >
            Instructor
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Service;
