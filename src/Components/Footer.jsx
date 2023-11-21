import React from 'react';
import logo from '../assets/hLogo.png';

const Footer = () => {
  return (
    <div
      className="footer h-auto py-20 text-white font-gemunu flex items-center
    justify-center"
    >
      <div className=" w-[90vw] flex justify-center">
        <div>
          <img src={logo} alt="" className="w-[270px]" />
          <p className="text-[24px] text-[#a7a7a7] w-[65%] mt-4">
            Accelerating the adoption of Generative AI, 3D and Web3 Industries
          </p>
          <button className="mt-20 bg-gradient-to-r from-[#265CAE] via-[#142950ec] to-[#265CAE] px-[24px] py-[14px] text-[24px] rounded-md">
            Join Our Waitlist.
          </button>
        </div>
        <div className="divide-y-2 divide-[#9C9E9F]">
          <div className=" mb-12 flex pl-6">
            <div className="w-[20vw] ">
              <h2 className="text-[34px] font-bold">FOUNDATION</h2>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium ">
                Overview
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Team
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Roadmaps
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Blogs
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Products
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Brand Assets
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                FAQs
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Contact Us
              </p>
            </div>
            <div className="w-[20vw]">
              <h2 className="text-[34px] font-bold">DEVELOPERS</h2>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Documentations
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                API Tool kits
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Technical Documents
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Audits
              </p>
            </div>
            <div className="w-[20vw]">
              <h2 className="text-[34px] font-bold">TOKEN</h2>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                About GPU Token
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Token Utility
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Tokenomics
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Coinmarket Cap
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Coingecko
              </p>
            </div>
          </div>

          <div className="flex pt-12 justify-center w-[60vw] ">
            <div className="w-[20vw]">
              <h2 className="text-[34px] font-bold">WHITEPAPER</h2>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Introduction
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Market Potential
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Potential Use Case
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Technical Architecture
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Fully Homomorphic <br />
                Encryption
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Token Economy
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Network Resilience / <br /> Fault tolerance
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Competitor Analysis
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                RoadMap
              </p>
            </div>
            <div className="w-[20vw] ">
              <h2 className="text-[34px] font-bold">LEARN</h2>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                About GPU.NET
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Why GPU.NET?
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Comparison Table
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Products live on GPU.NET?
              </p>
              <p className="w-fit cursor-pointer text-[#a7a7a7] text-[22px] font-medium">
                Our Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
