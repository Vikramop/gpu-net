import React from 'react';
import x from '../assets/x.png';
import tele from '../assets/tele.png';
import discord from '../assets/discord.png';

const Social = () => {
  return (
    <div
      className="social  h-[100vh] text-white font-gemunu flex items-center
    justify-center"
    >
      <div className="w-[70vw] h-[50vh] border-2 rounded-2xl border-[#D9D9D9]">
        <h1 className="mt-[5%] text-center text-[84px] font-extrabold">
          Stay Connected TO Our Network
        </h1>
        <p className="text-[#636363] text-center text-[34px] font-medium">
          Stay subscribed to our social media channels and be a part of our
          mission.
        </p>
        <div className="my-12 gap-12 cursor-pointer flex justify-center  ">
          <img src={x} alt="x" className="w-[84px] h-[84px]" />
          <img src={tele} alt="tele" className="w-[84px] h-[84px]" />
          <img src={discord} alt="discord" className="w-[84px] h-[84px]" />
        </div>
      </div>
    </div>
  );
};

export default Social;
