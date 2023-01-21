import React from "react";

const ImageCarousel = ({carousel}) => {
  return (
    <article className="min-w-[255px] max-w-[255px] h-[196px] rounded-[20px] bg-[#3551a0] mr-[15px] py-5 px-4 cursor-grabbing snap-start" >
      <div className="w-[100px] h-[100px] mx-auto bg-white rounded-full grid place-items-center mb-6">
        <img src={carousel.image} alt="carousel " />
      </div>
      <p className="text-center text-xl font-semibold text-white overflow-y-hidden">{carousel.desc}</p>
    </article>
  );
};

export default ImageCarousel;
