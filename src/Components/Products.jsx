import React from 'react';
import img from '../assets/genielogo.png';

const Products = () => {
  return (
    <div className="products font-gemunu text-white flex items-center justify-center w-[100%]">
      <div
        className="flex items-center justify-center  my-24 
      max-lg:flex-col 
      "
      >
        <h1
          className="text-[80px] font-bold  w-[30%]
        max-2xl:text-[60px]
        max-xl:text-[52px]
        max-lg:w-[70%]  max-lg:text-center max-lg:mb-12
        max-sm:text-[28px]
        "
        >
          PRODUCTS COMING SOON ON GPU.NET
        </h1>
        <div
          className="w-[600px]  divide-y-2 divide-[#9C9E9F] border-[#9C9E9F]    
          max-xl:w-[500px]  
          max-sm:w-[390px]  
        "
        >
          <div
            className="flex gap-[5%] text-[34px] font-semibold mt-[24px] ml-[32px] mb-4
          max-xl:text-[30px]
          max-sm:text-[20px]
          "
          >
            <p className="text-[#9C9E9F]">Video to 3D</p>
            <p className="text-[#9C9E9F]">Text to 3D</p>
            <p className="bg-[#16205D] rounded-[20px] px-4"> Image to 3D</p>
          </div>
          <div className="py-12">
            <img
              src={img}
              alt=""
              className="w-[250px] mt-[24px] ml-[32px]
            max-sm:w-[150px]
            "
            />
            <p
              className="text-[32px] font-semibold mt-[24px] ml-[32px]
            max-xl:text-[28px]
            max-sm:text-[24px]
            "
            >
              A suite of 3D Generative AI tools, built in-house by the team.
            </p>
            <p
              className="text-[18px] mt-[24px] ml-[32px]
            max-sm:text-[16px]
            "
            >
              Reinvent your images to life utilizing Blockchain Technology and
              Generative AI.
            </p>
            <p className="text-[32px] mt-[24px] ml-[32px] underline font:semibold pb-[50px]">
              Coming soon...
            </p>
          </div>
          <div className="llm">
            <h1
              className="text-[64px] font-bold mt-[40px] ml-[32px]
            max-sm:text-[32px]

            "
            >
              OPEN SOURCELLM&apos;s
            </h1>
            <p
              className="text-[18px] mt-[18px] ml-[32px] w-[70%]
            max-sm:text-[18px]
            "
            >
              An open-sourced LLM library ready to be accessed anytime. Choose a
              predefined instance or public container.
            </p>
            <p className="text-[32px] mt-[24px] ml-[32px] underline font:semibold">
              Coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
