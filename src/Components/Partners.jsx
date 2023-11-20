import React from 'react';
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import partner3 from '../assets/partner3.png';
import partner4 from '../assets/partner4.png';

const Partners = () => {
  return (
    <div
      className="partner  text-white font-gemunu flex items-center
       justify-center"
    >
      <div className="w-[65vw] ">
        <h1
          className="my-[5%]  text-[84px] font-bold text-center
        max-lg:text-[64px]
        max-md:text-[32px]
        max-sm:text-[28px]
        max-sm:mt-12 
        "
        >
          {' '}
          Investors & Partners
        </h1>
        <div
          className="mb-[5%] flex flex-col    ml-[5%]
        max-xl:ml-[2%]
        max-lg:ml-[-2%]
        max-md:mt-12   max-md:gap-12 
        max-sm:mb-12 
        "
        >
          <div
            className="flex gap-[50%]
          max-xl:gap-[30%] items-center
          max-md:flex-col max-md:gap-12
          "
          >
            <img
              src={partner1}
              alt="partner1"
              className="w-[250px] max-lg:w-[200px]"
            />
            <img
              src={partner2}
              alt="partner2"
              className="w-[250px] h-[50px] max-lg:w-[200px]"
            />
          </div>
          <div
            className="flex gap-[50%] mt-[5%] items-center
          max-xl:gap-[30%]
          max-md:flex-col max-md:gap-12
          "
          >
            <img
              src={partner4}
              alt="partner4"
              className="w-[250px] max-lg:w-[200px]"
            />
            <img
              src={partner3}
              alt="partner3"
              className="w-[250px] max-lg:w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
