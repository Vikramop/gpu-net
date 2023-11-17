import React from 'react';
import infra from '../assets/infrastucture.png';
import graph from '../assets/graph.png';
import crystal from '../assets/crystal.png';

const Now = () => {
  return (
    <div className="now font-gemunu text-white flex justify-center items-center">
      <div className=" w-[90vw]  my-[120px]">
        <h1
          className="text-center font-bold text-[84px] mb-[76px]
        max-sm:text-[30px]
        "
        >
          Why Now?
        </h1>
        <div className="flex flex-col gap-[47px]">
          <div
            className="card1 mx-auto px-[27px] pt-[47px] flex justify-between 
          max-2xl:w-[1100px]
          max-xl:w-[920px]
          max-lg:w-[700px] max-lg:flex-col max-lg:h-auto 
          max-md:flex-col max-md:h-auto max-md:w-[550px] 
          max-sm:w-[350px]
          
          "
          >
            <div>
              <p
                className="text-[24px] font-bold
              
              max-xl:text-[20px]
              max-sm:text-[18px]
              "
              >
                GPU PRICE SURGE
              </p>
              <h1
                className="text-[64px] font-bold
              max-xl:text-[58px]
              max-sm:text-[28px]
              "
              >
                RAPID SURGE
              </h1>
              <p
                className="text-[24px] font-normal w-[900px]
              max-2xl:w-[800px]
              max-xl:w-[680px] max-xl:text-[20px]
              max-md:w-[520px]
              max-sm:text-[18px] max-sm:w-[320px]
              "
              >
                As Of 2023, There Has Been A Rapid Surge In The Training Of AI
                Models Increasing The Consumption Of GPUs All Over The World.
                This Drastic Surge Resulted In Shortage Of GPU’s Availability
                And Cost Skyrocketing 10 Times.
              </p>
            </div>
            <img
              src={graph}
              alt="graph"
              className="w-[200px] h-[256px] 
              max-lg:mt-12
            max-md:mt-12 max-md:mx-auto
            "
            />
          </div>
          <div
            className="flex justify-center gap-[3%] 
            max-2xl:gap-[2%]
            
            max-md:flex-col max-md:items-center max-md:gap-[47px]
          "
          >
            <div
              className="card2 flex justify-between px-[26px] pt-[32px]
            max-2xl:w-[550px]
            max-xl:w-[450px]
            max-lg:flex-col max-lg:h-auto
            max-md:flex-col max-md:h-auto max-md:w-[550px] 
            max-sm:w-[350px]
            "
            >
              <div
                className="
              max-2xl:w-[300px]"
              >
                <p
                  className="text-[18px] font-bold 
                  max-md:text-[24px] 
                  max-sm:text-[18px]
                "
                >
                  GPU STRUCTURE
                </p>
                <h3
                  className="text-[28px] font-bold mt-[58px]
                max-xl:text-[24px]
                max-md:text-[58px] max-md:mt-[24px]
                max-sm:text-[28px]
                "
                >
                  {' '}
                  CRITICAL INFRASTRUCTURE
                </h3>
                <p
                  className="text-[18px] font-normal mt-[28px]
                max-2xl:w-[350px] max-2xl:text-[16px]
                max-xl:w-[300px] 
                max-lg:text-[18px]
                max-md:w-[520px] max-md:text-[22px]
                max-sm:text-[18px] max-sm:w-[320px]
                "
                >
                  Web3 Has Witnessed The Development Of Critical Infrastructure
                  Such As L1s, L2s, Data (Filecoin/IPFS), Crosschain & CPU
                  (Akash Network/Flow), But Falls Short For Multi Purpose GPU
                  Infrastructure.
                </p>
              </div>
              <img
                src={infra}
                alt="infra"
                className="w-[176px] h-[230px] mt-[50px]
                max-2xl:w-[150px]
                max-xl:w-[120px] max-xl:h-[150px] max-xl:mt-[100px]
                max-lg:mt-12 max-lg:w-[176px] max-lg:h-[230px]
                max-md:mt-12 max-md:mx-auto max-md:w-[176px] max-md:h-[230px]"
              />
            </div>
            <div
              className="card3 flex justify-between px-[26px] pt-[30px]
            max-2xl:w-[550px]
            max-xl:w-[450px]
            max-lg:flex-col max-lg:h-auto
            max-md:flex-col max-md:h-auto max-md:w-[550px] 
            max-sm:w-[350px]
            "
            >
              <div
                className="
              max-2xl:w-[300px]"
              >
                <p
                  className="text-[18px] font-bold 
                max-md:text-[24px]              max-sm:text-[18px]
                "
                >
                  RISING COST
                </p>
                <h3
                  className="text-[28px] font-bold mt-[45px]
                max-xl:text-[24px]
                max-md:text-[58px] max-md:mt-[24px]
                max-sm:text-[28px]
                "
                >
                  THE COST
                </h3>
                <p
                  className="text-[18px] font-normal mt-[25px]
                max-2xl:w-[350px] max-2xl:text-[16px]
                max-xl:w-[320px] max-xl:text-[14px]
                max-md:w-[520px] max-md:text-[22px]
                max-sm:text-[18px] max-sm:w-[320px]
                "
                >
                  The Cost Of The CPU Is Less Than One Cent/Hour, Which
                  Technically Eliminates The Need To Migrate To An Alternative
                  In The Presence Of Big Tech Infrastructure (AWS/GCP/Azure).
                  GPU Instances, On The Other Hand, Begin At $3/Hour And Provide
                  A Compelling Urge To Seek For Alternative Providers.
                </p>
              </div>
              <img
                src={crystal}
                alt="crystal"
                className="w-[176px] h-[230px] mt-[-40px]
                max-xl:w-[150px] max-xl:h-[170px]
                max-xl:ml-[-15px]
                max-lg:w-[176px] max-lg:h-[230px]
                max-md:mt-12 max-md:mx-auto max-md:w-[176px] max-md:h-[230px]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Now;
