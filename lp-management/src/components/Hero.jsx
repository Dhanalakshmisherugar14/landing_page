import React from 'react';
import Final from '../assets/Final.png';
import { IoGridOutline } from "react-icons/io5";

function Hero() {
  return (
    <div className="bg-black text-white pt-24 pb-20 px-6 md:px-20 font-['Plus_Jakarta_Sans']">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center space-y-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E8F1FF] rounded-full px-4 py-1.5">
          <IoGridOutline className="text-[#1447E6] text-sm" />
          <span className="text-sm font-medium text-[#1447E6]">LP Management</span>
        </div>

        {/* Heading */}
        <h1 className="text-[40px] md:text-[60px] lg:text-[72px] font-normal leading-[1.1] tracking-tight max-w-5xl">
          Run all your LP-related operations from one intelligent, unified dashboard.
        </h1>

        {/* Subheading */}
        <p className="text-[#97DDFE] text-[18px] md:text-[24px] leading-normal max-w-4xl">
          Centralise fund administration, investor relations and compliance into a single workspace that's built for speed, accuracy and transparency.
        </p>

        {/* Image */}
        <div className="w-full max-w-[1024px] mt-8 relative -mb-40">
             {/* Glow effect behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#2F76FF]/20 blur-[120px] rounded-full -z-10"></div>
            <img src={Final} alt="Dashboard" className="w-full h-auto object-contain" />
        </div>

      </div>
    </div>
  );
}

export default Hero;
