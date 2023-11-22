import React from 'react';

const New = () => {
  return (
    <div className="new font-gemunu text-white flex items-center justify-center">
      <div className=" my-24 w-[90vw] flex flex-col items-center justify-center">
        <div
          className="flex gap-[2%] max-xl:gap-[-4%]
        max-xl:mb-12
        max-md:flex-col 
        "
        >
          <div className="whats ">
            <h1
              className=" text-[84px] font-bold
            max-xl:text-[72px]
            max-lg:text-[60px]
            "
            >
              WHAT&apos;S NEW?
            </h1>
            <p
              className="text-[32px] mt-20 font-semibold w-[80%]
            max-xl:text-[28px]
            "
            >
              {' '}
              GPU.NET is on a mission and the events below shows our recent
              developments.
            </p>
          </div>
          <div className="gpu1 ">
            <h1 className="text-[64px] font-bold">Welcome to GPU</h1>
            <p className="text-[28px]">
              Read the vision of Cosmos and learn about the powerful blockchain
              technology that makes it possible.
            </p>
            <p className="text-[32px] underline">Learn</p>
          </div>
        </div>
        <div
          className="flex gap-8
         max-lg:flex-col
        "
        >
          <div className="gpu2 ">
            <h1
              className="text-[64px] font-bold 
            max-lg:text-[54px]
            "
            >
              Discover the GPU
            </h1>
            <p
              className="text-[36px]
            max-lg:text-[30px]
            max-lg:mt-12 
            "
            >
              ATOM secures and governs the Cosmos Hub, the first blockchain in
              the Cosmos Network.
            </p>
            <p
              className="text-[32px] underline
             max-lg:mt-12
            "
            >
              Stake
            </p>
          </div>

          <div className="gpu3">
            <h1
              className="text-[64px] font-bold
            max-lg:text-[54px]
            "
            >
              Explore the GPU ecosystem
            </h1>
            <p
              className="text-[36px]
            max-lg:text-[30px] max-lg:mt-12
            "
            >
              Browse the ever-expanding, diverse collection of apps, services,
              and tools built on Cosmos to date.
            </p>
            <p className="text-[32px] underline  max-lg:mt-6">Discover</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
