import React from 'react';

const Roadmap = () => {
  return (
    <div
      className="roadmap  text-white font-gemunu flex items-center
    justify-center"
    >
      <div className=" w-[80vw] py-32">
        <h1
          className="mb-[7%]  text-[84px] font-bold text-center
        max-lg:text-[64px]
        max-md:text-[32px]
        max-sm:text-[28px]
        max-sm:mt-12 
        "
        >
          ROADMAP
        </h1>
        {/* 1st sec */}
        <div className="flex gap-32 mb-16">
          {/* 1st r */}
          <div className="pl-[10%] w-[40%]  ">
            <h1 className=" w-fit text-[34px] font-semibold bg-[#16205D] rounded-lg px-4 mb-4">
              Q4 2022
            </h1>
            <div className="border-y-2 border-[#9C9E9F]  ">
              <p className="text-[32px] font-semibold mt-4">Core: </p>
              <ul className="marker:text-white">
                <li className="ml-6  text-[24px] font-semibold ">
                  Company formed.
                </li>
                <li className="ml-6 text-[24px] font-semibold ">
                  Demo Outputs.
                </li>
              </ul>
              <ul>
                <p className="text-[32px] font-semibold mt-4"> Products: </p>
                <li className="ml-6 text-[24px] font-semibold ">
                  R&D generatie AI.
                </li>
              </ul>
              <ul>
                <p className="text-[32px] font-semibold mt-4">Financial</p>
                <li className="ml-6 text-[24px] font-semibold mb-12">
                  Funding: Pre-seed Phase.
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd r */}
          <div className="pl-[10%] w-[45%] ">
            <h1 className="w-fit text-[34px] font-semibold bg-[#16205D] rounded-lg px-4 mb-4">
              Q2 2024
            </h1>
            <div className="border-y-2 border-[#9C9E9F]  ">
              <ul>
                <p className="text-[32px] font-semibold mt-4">Core: </p>
                <li className="ml-6 text-[24px] font-semibold ">
                  Platform Alpha.
                </li>
                <li className="ml-6 text-[24px] font-semibold ">
                  Community SDK.
                </li>
              </ul>
              <ul>
                <p className="text-[32px] font-semibold mt-4"> Products: </p>
                <li className="ml-6 text-[24px] font-semibold w-[80%]">
                  Product: Video to 3D as a service platform.
                </li>
              </ul>
              <ul>
                <p className="text-[32px] font-semibold mt-4">Financial</p>
                <li className="ml-6 text-[24px] font-semibold ">
                  Revenue: 50K w/Taanga
                </li>
                <li className="ml-6 text-[24px] font-semibold mb-6">
                  Funding: Seed & Strategic.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 2nd sec */}
        <div className="flex gap-32">
          {/* 1st r */}
          <div className="pl-[10%] w-[40%]  ">
            <h1 className=" w-fit text-[34px] font-semibold bg-[#16205D] rounded-lg px-4 mb-4">
              Q3/Q4 2023 Current Phase
            </h1>
            <div className="border-y-2 border-[#9C9E9F]  ">
              <p className="text-[32px] font-semibold mt-4">Core: </p>
              <ul className="marker:text-white">
                <li className="ml-6  text-[24px] font-semibold ">
                  Testnet GPU Network.
                </li>
                <li className="ml-6 text-[24px] font-semibold ">
                  Platform: Bata scale.
                </li>
                <li className="ml-6 text-[24px] font-semibold ">
                  Community 100K.
                </li>
              </ul>
              <ul>
                <p className="text-[32px] font-semibold mt-4"> Products: </p>
                <li className="ml-6 text-[24px] font-semibold ">
                  Products: Upscale, API, Image to 3D &Text to 3D.
                </li>
              </ul>
              <ul>
                <p className="text-[32px] font-semibold mt-4">Financial</p>
                <li className="ml-6 text-[24px] font-semibold ">
                  Revenue: 250K w/Clients.
                </li>
                <li className="ml-6 text-[24px] font-semibold mb-12">
                  Funding: Private & Public.
                </li>
              </ul>
            </div>
          </div>

          {/* 2nd r */}
          <div className="pl-[10%] w-[45%] ">
            <h1 className="w-fit text-[34px] font-semibold bg-[#16205D] rounded-lg px-4 mb-4">
              2024
            </h1>
            <div className="border-y-2 border-[#9C9E9F]  ">
              <ul>
                <p className="text-[32px] font-semibold mt-4">Core: </p>
                <li className="ml-6 text-[24px] font-semibold ">
                  Mainnet GPU Network.
                </li>
                <li className="ml-6 text-[24px] font-semibold ">
                  Platform fill-scale.
                </li>
                <li className="ml-6 text-[24px] font-semibold ">
                  Community 250K.
                </li>
              </ul>
              <ul>
                <p className="text-[32px] font-semibold mt-4"> Products: </p>
                <li className="ml-6 text-[24px] font-semibold w-[80%]">
                  Product: 5+ AI Pipelines, GPU & Data network integration.
                </li>
                <li className="ml-6 text-[24px] font-semibold w-[80%]">
                  Plugins: Unreal/50k.
                </li>
              </ul>
              <ul>
                <p className="text-[32px] font-semibold mt-4">Financial</p>
                <li className="ml-6 text-[24px] font-semibold mb-12">
                  Revenue: 1.2 Million
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
