import React from 'react';
import img from '../assets/network-img.png';
import sImg from '../assets/sec2-img.png';

const Network = () => {
  return (
    <div
      className="network relative text-white font-gemunu flex flex-col items-center
    max-sm:h-auto
    "
    >
      <img
        src={sImg}
        alt=""
        className="absolute w-[150px] top-4 left-4
      max-sm:w-[100px] 
      "
      />
      <h1
        className="text-[84px] mt-[120px] font-bold
        max-lg:text-[80px]
      max-sm:text-[28px] max-sm:items-start max-sm:mt-[150px]
      "
      >
        GPU Network
      </h1>
      <p
        className="text-[34px] mt-[40px] text-center w-[930px]
        max-lg:text-[28px] max-lg:w-[700px]
        max-md:text-[24px] max-md:w-[550px]
      max-sm:text-[18px] max-sm:items-start max-sm:w-[330px]
      "
      >
        GPU.NET is offering computational infrastructure to accelerate the
        adoption of Generative AI, 3D and Web3 Industries
      </p>
      <img
        src={img}
        alt="img"
        className="w-[1050px] mt-[120px] mb-[130px]
        max-xl:w-[900px]
        max-lg:w-[700px]
        max-md:w-[550px]
      max-sm:w-[350px] max-sm:mt-[50px]
      "
      />
    </div>
  );
};

export default Network;
