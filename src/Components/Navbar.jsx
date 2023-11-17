import React from 'react';
import logo from '../assets/hLogo.png';
const Navbar = () => {
  return (
    <div
      className="w-[100%] text-white bg-black h-[10vh] font-gemunu flex justify-between px-[50px] items-center
    max-lg:px-[10px]
    max-sm:px-[20px]
    "
    >
      <img src={logo} className="w-[150px] max-lg:w-[120px]" />
      <div
        className=" font-bold flex gap-[52px] text-[24px]
      max-2xl:gap-[40px]
      max-lg:gap-[15px] max-lg:text-[20px]
      max-md:text-[16px] max-md:gap-[10px]
      max-sm:hidden
      "
      >
        <a href="#">
          <p>Foundation</p>
        </a>
        <a href="#">
          <p>Developer</p>
        </a>
        <a href="#">
          <p>Learn</p>
        </a>
        <a href="#">
          <p>Whitepaper</p>
        </a>
        <a href="#">
          <p>Token</p>
        </a>
      </div>
      <button
        className="bg-gradient-to-r from-[#265CAE] via-[#0000009f] to-[#265CAE] px-[24px] py-[14px] text-[24px] rounded-md
      max-lg:text-[20px] max-lg:px-[20px] max-lg:py-[10px]
      max-md:text-[18px]
      max-sm:hidden
      "
      >
        Join Our Waitlist
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-10 h-10 sm:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};

export default Navbar;
