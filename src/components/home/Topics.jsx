import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { imageCarousel } from "../../data";
import ImageCarousel from "../ImageCarousel";
import AOS from "aos";


const Topics = () => {
  const carousel = useRef()
  
  const increment = (snap) => {
    if(carousel.current) {
      const width = carousel.current.offsetWidth;
      // console.log(width);
      carousel.current.scrollTo(carousel.current.scrollLeft + width * snap, 0)
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  
  return (
    <>
      {/* desktop */}
      <section
        className="2xl:px-[186px] lg:px-20 px-8 mt-24 "
        data-aos="fade-up" data-aos-delay="150"
      >
        <div className="w-full flex justify-between items-center">
          <h3 className="text-white lg:text-[40px] md:text-3xl text-2xl font-semibold overflow-y-hidden">
            Popular Topics
          </h3>
          <div className="md:flex items-center gap-[80px] hidden">
            <motion.button
              className="text-white w-[58px] h-[58px] rounded-[20px] bg-[#3551a0] grid place-items-center"
              onClick={() => increment(-1)}
              whileTap={{ scale: 0.9 }}
            >
              <i className="ri-arrow-left-line"></i>
            </motion.button>
            <motion.button
              className="text-white w-[58px] h-[58px] rounded-[20px] bg-[#3551a0] grid place-items-center"
              onClick={() => increment(+1)}
              whileTap={{ scale: 0.9 }}
            >
              <i className="ri-arrow-right-line"></i>
            </motion.button>
          </div>

          <motion.button
            className="px-4 py-2 text-sm font-semibold btn-primary rounded-[20px] text-white md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            View All
          </motion.button>
        </div>
        {/* carousel container */}
        <div className="carousel-container" ref={carousel}>
          {imageCarousel.map((carousel, index) => {
            return <ImageCarousel carousel={carousel} key={index} />;
          })}
        </div>

        <div className="md:flex hidden items-center justify-center mt-8">
          <motion.button
            className="px-[23px] py-2 btn-primary rounded-[20px] text-white"
            whileTap={{ scale: 0.9 }}
          >
            View All
          </motion.button>
        </div>
      </section>

      {/* mobile to display scroll buttons */}
      <div className="flex items-center gap-4 md:hidden justify-center mb-4">
        <motion.button
          className="text-white w-[58px] h-[58px] rounded-[20px] bg-[#3551a0] grid place-items-center"
          onClick={() => increment(-1)}
          whileTap={{ scale: 0.9 }}
        >
          <i className="ri-arrow-left-line"></i>
        </motion.button>
        <motion.button
          className="text-white w-[58px] h-[58px] rounded-[20px] bg-[#3551a0] grid place-items-center"
          onClick={() => increment(+1)}
          whileTap={{ scale: 0.9 }}
        >
          <i className="ri-arrow-right-line"></i>
        </motion.button>
      </div>
    </>
  );
};

export default Topics;
