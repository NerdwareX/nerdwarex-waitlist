import React from "react";
import quoteIcon from '../../assets/quote-icon.svg'


const Testimonials = () => {

  return (
    <section
      className="max-w-[882px] w-full mx-auto px-4 pt-2 text-center mb-6 flex flex-col items-center gap-8"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <h3 className="lg:text-[40px] text-3xl overflow-y-hidden font-semibold text-white">
        What Our Learners Say About Us
      </h3>
      <img src={quoteIcon} alt="quote icon" />
      <p className="font-medium lg:text-xl text-base text-white">
        I bought the html class and i have to say my experience was was above
        pleasant. The tutor were so detailed that i could easily understand even
        a first timer will understand without so much hassle
      </p>
      <div className="flex items-center gap-2">
        <div className="lg:w-[75px] lg:h-[75px] w-12 h-12 bg-[#d9d9d9] rounded-full"></div>
        <p className="lg:text-2xl text-sm text-white font-medium overflow-y-hidden">
          John Doe
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
