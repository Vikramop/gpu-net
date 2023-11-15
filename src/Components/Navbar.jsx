import React from 'react';
import logo from '../assets/hLogo.png';
export const Navbar = () => {
  return (
    <div className="w-[100%] text-white bg-black h-[10vh] font-gemunu flex justify-between px-[50px] items-center">
      <img src={logo} className="w-[150px]" />
      <div className=" font-bold flex gap-[52px] text-[24px]">
        <p>Foundation</p>
        <p>Developer</p>
        <p>Learn</p>
        <p>Whitepaper</p>
        <p>Token</p>
      </div>
      <button className="bg-gradient-to-r from-[#265CAE] via-[#0000009f] to-[#265CAE] px-[24px] py-[14px] text-[24px] rounded-md">
        Join Our Waitlist
      </button>
    </div>
  );
};
