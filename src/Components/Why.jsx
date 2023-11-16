import React from 'react';
import cimg1 from '../assets/sec2-i1.png';
import cimg2 from '../assets/sec2-i2.png';
import cimg3 from '../assets/sec2-i3.png';
import cimg4 from '../assets/sec2-i4.png';
import bg from '../assets/sec2-img.png';

const Card = ({ src, heading, desc }) => {
  return (
    <div className="card">
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
      className="why w-[100%] h-[100vh] text-white relative font-gemunu px-16 pt-20
    max-sm:px-6 max-sm:h-auto max-sm:pb-[50px]
    "
    >
      <img
        src={bg}
        alt=""
        className="absolute right-20 w-[200px]
      max-sm:w-[80px] max-sm:top-2 max-sm:right-4
      "
      />
      <div>
        <h1
          className="text-[84px] font-bold
        max-sm:text-[28px]
        "
        >
          Why Gpu.Net?
        </h1>
        <p
          className="text-[34px] w-[800px] mt-[42px]
        max-sm:text-[18px] max-sm:w-[330px]
        "
        >
          GPU.NET is offering computational infrastructure to accelerate the
          adoption of Generative AI, 3D and Web3 Industries
        </p>
      </div>
      <div
        className="mt-[92px] flex
      max-sm:flex-col max-sm:gap-20
      "
      >
        <Card
          src={cimg1}
          heading="MULTI PURPOSE GPU"
          desc="United GPU infrastructure that can be utilized for highly optimized 3D rendering, animation, VFX, generative AI, foundation models, LLM training and cryptocurrency mining."
        />
        <Card
          src={cimg2}
          heading="Data privacy"
          desc="Data privacy at its finest. Confidential information such as “IP or Data training” wouldn’t be accessible by GPU providers thanks to our upcoming Fully Homomorphic Encryption (FHE) technology."
          className="left-10 absolute z-50"
        />
        <Card
          src={cimg3}
          heading="PROTOCOL DRIVEN PRICING"
          desc="Stake GPU tokens to guarantee uninterrupted instances for quick access from a variety of GPUs amid variable demand and availability."
        />
        <Card
          src={cimg4}
          heading="Decentralized"
          desc="By leveraging Blockchain, GPU.NET mitigates the potential risks of centralization that several web2 platforms contain and upon achieving mainnet, the degree of decentralization with our Validator proxy consensus will be greater than that of current web3 GPU players."
        />
      </div>
    </div>
  );
};

export default Why;
