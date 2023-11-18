import React from 'react';
import logo from '../assets/hLogo.png';
import img from '../assets/comparisonimg.png';
import sideimg from '../assets/sec2-img.png';
import imgMobile from '../assets/mComparision.png';

const Comparison = () => {
  return (
    <div className="comparison font-gemunu text-white flex justify-center items-center">
      <div className="relative w-[90vw]  my-[120px] flex flex-col items-center ">
        <img
          src={sideimg}
          alt=""
          className="absolute top-0 w-[145px] left-20
          max-xl:w-[120px]
          max-md:w-[80px]
          "
        />
        <h1
          className="relative z-50 text-[84px] font-bold text-center
        max-lg:text-[64px]
        max-sm:text-[28px]
        max-sm:text-start
        "
        >
          COMPARISON TABLE
        </h1>
        <div
          className="  w-[80%] flex text-[34px] font-semibold items-center gap-[13%] pl-[13%] mt-[112px]
        max-xl:gap-[10%] max-xl:pl-[12%]
        max-lg:gap-[7%] max-lg:text-[25px] max-lg:pl-[8%]
        max-md:text-[20px]
        "
        >
          <img
            src={logo}
            alt=""
            className="w-[185px] text-white
            max-lg:w-[150px]
            max-md:w-[120px]
          "
          />
          <p className="max-sm:hidden">Render</p>
          <p className="max-sm:hidden">Vast</p>
          <p className="max-sm:hidden">Big Tech</p>
        </div>
        <img
          src={img}
          alt=""
          className="w-[80%] mt-[35px]
        max-sm:hidden
        "
        />
        <img src={imgMobile} alt="" className="w-[80%] mt-[35px] sm:hidden" />
      </div>
    </div>
  );
};

export default Comparison;
