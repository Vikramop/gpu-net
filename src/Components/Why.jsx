import React from 'react';
import cimg1 from '../assets/sec2-i1.png';
import cimg2 from '../assets/sec2-i2.png';
import cimg3 from '../assets/sec2-i3.png';
import cimg4 from '../assets/sec2-i4.png';
import bg from '../assets/sec2-img.png';

const Card = ({ src, heading, desc, change }) => {
  return (
    <div className={`card ${change}`}>
      <img src={src} alt="" />
      <h1>{heading}</h1>
      <p>{desc}</p>
      <button>Learn More</button>
    </div>
  );
};

const Why = () => {
  return (
    <div
      className="why flex justify-center w-[100%] 2xl:flex 2xl:items-center 2xl:justify-center h-auto pb-24 text-white relative font-gemunu px-16 pt-20
      2xl:px-auto 
    max-sm:px-6 max-sm:h-auto max-sm:pb-[50px]
    "
    >
      <div className="w-[90vw] ">
        <img
          src={bg}
          alt=""
          className="absolute right-20 w-[200px]
          lg:w-[120px]
      max-sm:w-[80px] max-sm:top-2 max-sm:right-4
      "
        />
        <div>
          <h1
            className="text-[84px] font-bold
            2xl:ml-[10%]
            xl:ml-[8%] xl:text-[80px]
          max-sm:text-[28px]

          "
          >
            Why Gpu.Net?
          </h1>
          <p
            className=" relative z-50 text-[34px] w-[90%] mt-[42px]
            2xl:ml-[10%]
            xl:ml-[8%] xl:text-[36px]
          max-sm:text-[18px] max-sm:w-[330px]
          "
          >
            GPU.NET is offering computational infrastructure to accelerate the
            adoption of Generative AI, 3D and Web3 Industries
          </p>
        </div>
        <div
          className="mt-[92px] flex
      max-sm:flex-col max-sm:gap-20 relative
      w-[100%] h-[70vh]
      
      "
        >
          <Card
            src={cimg1}
            heading="MULTI PURPOSE GPU"
            desc="United GPU infrastructure that can be utilized for highly optimized 3D rendering, animation, VFX, generative AI, foundation models, LLM training and cryptocurrency mining."
            change="left-0 absolute z-[10px] w-[28%]

            
            "
          />
          <Card
            src={cimg2}
            heading="Data privacy"
            desc="Data privacy at its finest. Confidential information such as “IP or Data training” wouldn’t be accessible by GPU providers thanks to our upcoming Fully Homomorphic Encryption (FHE) technology."
            change="left-[320px] top-[81px] absolute z-[20px] w-[28%] left-[25%]
            
            "
          />
          <Card
            src={cimg3}
            heading="PROTOCOL DRIVEN PRICING"
            desc="Stake GPU tokens to guarantee uninterrupted instances for quick access from a variety of GPUs amid variable demand and availability."
            change="left-[640px] top-[162px] absolute z-[40px] pb-[60px] w-[28%] left-[50%]
            
            "
          />
          <Card
            src={cimg4}
            heading="Decentralized"
            desc="By leveraging Blockchain, GPU.NET mitigates the potential risks of centralization that several web2 platforms contain and upon achieving mainnet, the degree of decentralization with our Validator proxy consensus will be greater than that of current web3 GPU players."
            change="left-[970px] top-[243px] absolute z-[50px] w-[28%] left-[75%]
           
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
