import React from "react";

const Course = ({
  course: {
    image,
    title,
    starIcon,
    rating,
    desc,
    authorImg,
    name,
    price,
    clockIcon,
    bookIcon,
    groupIcon,
    time,
    para,
    number,
    rate,
    heartIcon,
  },
}) => {
  return (
    <>
      {/* desktop */}
      <article className="h-fit w-full border border-[#15add9] rounded-[20px] relative hidden lg:block">
        <button className="absolute left-[13px] top-5 z-10 text-white text-sm px-4 py-1 btn-secondary rounded-[20px]">
          {rate}
        </button>
        <div className="absolute right-[13px] top-5 z-10 w-7 h-7 rounded-full btn-secondary grid place-items-center">
          <i className={heartIcon} style={{ color: "#fff" }}></i>
        </div>
        <div className="m-1 overflow-hidden mb-[10px]">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="px-[13px] pb-3">
          <div className="flex items-center justify-between">
            <small className="text-[#b3b3b3]">{title}</small>
            <div className="flex items-center gap-1">
              <i className={starIcon} style={{ color: "#ffca0e" }}></i>
              <small className="text-white">{rating}</small>
            </div>
          </div>
          <p className="text-white font-medium pb-2">{desc}</p>
          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center gap-2">
              <img src={authorImg} alt="author" />
              <small className="text-white font-medium">{name}</small>
            </div>
            <p className="text-white font-medium">{price}</p>
          </div>
          <div className="flex items-center justify-between pt-5 border-t border-t-[#15add9]">
            <div className="flex items-center gap-1">
              <i className={clockIcon} style={{ color: "#e0e0e0" }}></i>
              <p className="text-[#e0e0e0] text-sm">{time}</p>
            </div>
            <div className="flex items-center gap-1">
              <i className={bookIcon} style={{ color: "#e0e0e0" }}></i>
              <p className="text-[#e0e0e0] text-sm">{para}</p>
            </div>
            <div className="flex items-center gap-1">
              <i className={groupIcon} style={{ color: "#e0e0e0" }}></i>
              <p className="text-[#e0e0e0] text-sm">{number}</p>
            </div>
          </div>
        </div>
      </article>

      {/* mobile */}
      
        <article className="min-w-[235px] h-full border border-[#15add9] rounded-[20px] relative lg:hidden pointer-events-none ">
          <button className="absolute left-[13px] top-5 z-10 text-white text-sm px-4 py-1 btn-secondary rounded-[20px]">
            {rate}
          </button>
          <div className="absolute right-[13px] top-5 z-10 w-7 h-7 rounded-full btn-secondary grid place-items-center">
            <i className={heartIcon} style={{ color: "#fff" }}></i>
          </div>
          <div className="m-1 overflow-hidden mb-[10px]">
            <img src={image} alt="" className="w-full" />
          </div>
          <div className="px-[13px] pb-3">
            <div className="flex items-center justify-between">
              <small className="text-[#b3b3b3]">{title}</small>
              <div className="flex items-center gap-1">
                <i className={starIcon} style={{ color: "#ffca0e" }}></i>
                <small className="text-white">{rating}</small>
              </div>
            </div>
            <p className="text-white font-medium pb-2">{desc}</p>
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-2">
                <img src={authorImg} alt="author" />
                <small className="text-white font-medium">{name}</small>
              </div>
              <p className="text-white font-medium">{price}</p>
            </div>
            <div className="flex items-center justify-between pt-5 border-t border-t-[#15add9]">
              <div className="flex items-center gap-1">
                <i className={clockIcon} style={{ color: "#e0e0e0" }}></i>
                <p className="text-[#e0e0e0] text-sm">{time}</p>
              </div>
              <div className="flex items-center gap-1">
                <i className={bookIcon} style={{ color: "#e0e0e0" }}></i>
                <p className="text-[#e0e0e0] text-sm">{para}</p>
              </div>
              <div className="flex items-center gap-1">
                <i className={groupIcon} style={{ color: "#e0e0e0" }}></i>
                <p className="text-[#e0e0e0] text-sm">{number}</p>
              </div>
            </div>
          </div>
        </article>
      
    </>
  );
};

export default Course;
