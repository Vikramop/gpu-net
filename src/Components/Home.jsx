import React from 'react';
import Traning from '../assets/traning.png';
import Rendering from '../assets/rendering.png';
import Mining from '../assets/mining.png';
import bg1 from '../assets/Item1.png';
import bg2 from '../assets/Item2.png';
import bg3 from '../assets/Item3.png';

const Home = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed w-[100%] h-[90vh] font-gemunu text-white flex flex-col justify-center items-center">
      <h1
        className="text-[84px] font-bold mb-[60px]
      max-xl:text-[72px]
      max-lg:text-[60px]
      max-md:text-[52px]
      max-sm:text-[30px]
      "
      >
        Decentralized GPU Network For
      </h1>

      {/* 3 features */}
      <div
        className="flex gap-[66px] text-[24px] font-bold mb-[109px]
      max-lg:text-[20px] max-lg:gap-[40px]
      max-sm:flex-col
      "
      >
        <div
          className="flex gap-[66px]
        max-lg:gap-[40px]
        max-md:text-[18px] max-md:gap-[20px]
        max-sm:text-[20px]
        "
        >
          <div
            className="flex gap-[12px]
        max-md:gap-[8px]
          "
          >
            <img
              src={Traning}
              alt=""
              className="w-6 h-6 my-auto
            max-sm:w-4 max-sm:h-4
            "
            />
            Traning AI Model
          </div>
          <div
            className="flex gap-[12px] text-[24px] font-bold
          max-lg:text-[20px]
          max-md:gap-[8px]
          max-sm:text-[20px]
          "
          >
            <img
              src={Rendering}
              alt=""
              className="w-6 h-6 my-auto
            max-sm:w-4 max-sm:h-4
            "
            />
            Rendering Graphics.
          </div>
        </div>
        {/* 3rd feature */}
        <div>
          <div
            className="flex gap-[12px] text-[24px] font-bold
          max-lg:text-[20px]
          max-md:gap-[8px]
          max-sm:text-[20px] max-sm:justify-center
          "
          >
            <img
              src={Mining}
              alt=""
              className="w-6 h-6 my-auto
            max-sm:w-4 max-sm:h-4
            "
            />
            Mining Cryptocurrency
          </div>
        </div>
      </div>
      <button className="bg-gradient-to-r from-[#265CAE] via-[#142950ec] to-[#265CAE] px-[24px] py-[14px] text-[24px] rounded-md">
        Join Our Waitlist
      </button>
      <img
        src={bg1}
        alt=""
        className="absolute right-40 top-1/4 
      max-lg:right-12
      max-sm:w-[90px] max-sm:right-6 max-sm:top-40
      "
      />
      <img
        src={bg2}
        alt=""
        className="absolute right-40 bottom-1/4 w-[90px] h-[50px]
        max-lg:right-12
        max-md:bottom-40
        max-sm:bottom-20 max-sm:right-4 max-sm:w-[70px] max-sm:h-[30px]
        "
      />
      <img
        src={bg3}
        alt=""
        className="absolute left-10 bottom-1/4 w-[30px]
      max-sm:bottom-10 max-sm:w-[20px] max-sm:left-4
      "
      />
    </div>
  );
};

export default Home;
