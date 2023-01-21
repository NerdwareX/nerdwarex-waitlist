import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { courseCategories, courses } from "../../data";
import Course from "../Course";

const Courses = () => {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(0)

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);

  return (
    <section className="mt-[93px] 2xl:px-[186px] lg:px-20 px-8">
      <div
        className="w-full flex justify-between items-center"
        data-aos="fade-right"
        data-aos-delay="150"
      >
        <h3 className="text-white lg:text-[40px] md:text-3xl text-2xl font-semibold overflow-y-hidden">
          Exclusive courses
        </h3>
        <div className="lg:flex items-center gap-5 hidden">
          <motion.button
            className="w-6 h-6 bg-[#3551a0] text-white grid place-items-center rounded-[20px]"
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-arrow-left-line"></i>
          </motion.button>

          <div className="flex items-center gap-5 ">
            {courseCategories.map((item, index) => {
              return (
                <small
                  key={index}
                  className={`text-[#b3b3b3] cursor-pointer ${
                    selected === index
                      ? "text-white border-b border-b-[#15add9]"
                      : ""
                  }`}
                  onClick={() => {
                    setSelected(index);
                    setActive(!active);
                  }}
                >
                  {item.category}
                </small>
              );
            })}
          </div>

          <motion.button
            className="w-6 h-6 bg-[#3551a0] text-white grid place-items-center rounded-[20px]"
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-arrow-right-line"></i>
          </motion.button>
        </div>
        <button className="text-white text-xs sm:text-sm md:text-base font-medium lg:hidden tracking-wider">
          See More
        </button>
      </div>

      {/* desktop */}
      <div
        className="mt-[92px] mb-[60px] hidden lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[15px]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {courses.map((course, idx) => {
          return <Course course={course} key={idx} />;
        })}
      </div>

      {/* mobile */}
      <motion.div
        className="my-5 cursor-grab overflow-hidden lg:hidden"
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <motion.div
          className="flex gap-[15px]"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {courses.map((course, index) => {
            return <Course course={course} key={index} />;
          })}
        </motion.div>
      </motion.div>

      <div className="lg:flex items-center justify-center hidden">
        <motion.button
          className="px-[23px] py-2 btn-primary rounded-[20px] text-white"
          whileTap={{ scale: 0.9 }}
        >
          View All
        </motion.button>
      </div>
    </section>
  );
};

export default Courses;
