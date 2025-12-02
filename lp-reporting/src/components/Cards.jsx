import React from 'react'
import { IoFlashOutline, IoShieldOutline, IoEyeOutline, IoTimerOutline, IoCheckmarkCircleOutline } from "react-icons/io5";

function Cards() {
  return (
    <div>
      {/* Cards - Moved below */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 pt-16 flex flex-col md:flex-row justify-center gap-6 relative -top-[140px] font-['Plus_Jakarta_Sans']">
        
        {/* Card 1: 95% reduction in manual reporting time (Orange) */}
        <div className="bg-[#FFC66C] text-black w-full md:w-[206px] h-[255px] rounded-[8px] pt-[33px] pb-[33px] px-4 flex flex-col items-center justify-start text-center gap-[41px]">
          <div className="w-[62.67px] h-[62.67px] rounded-[21.93px] opacity-100 bg-[#FFA313] flex items-center justify-center shrink-0">
            <IoTimerOutline className="text-4xl text-white" />
          </div>
          <span className="font-medium text-[20px] leading-[26px]">
            95% reduction in manual reporting time
          </span>
        </div>

        {/* Card 2: Zero reconciliation errors (Purple) */}
        <div className="bg-[#D4C3FF] text-black w-full md:w-[206px] h-[255px] rounded-[8px] pt-[33px] pb-[33px] px-4 flex flex-col items-center justify-start text-center gap-[41px]">
          <div className="w-[62.67px] h-[62.67px] rounded-[21.93px] opacity-100 bg-[#B89DFF] flex items-center justify-center shrink-0">
            <IoCheckmarkCircleOutline className="text-4xl text-white" />
          </div>
          <span className="font-medium text-[20px] leading-[26px]">
            Zeroreconciliation errors
          </span>
        </div>

        {/* Card 3: 4x faster LP communication turnaround (Light Blue) */}
        <div className="bg-[#97DDFE] text-black w-full md:w-[206px] h-[255px] rounded-[8px] pt-[33px] pb-[33px] px-4 flex flex-col items-center justify-start text-center gap-[41px]">
          <div className="w-[62.67px] h-[62.67px] rounded-[21.93px] opacity-100 bg-[#5ECBFF] flex items-center justify-center shrink-0">
            <IoFlashOutline className="text-4xl text-white" />
          </div>
          <span className="font-medium text-[20px] leading-[26px]">
            4x faster LP communication turnaround
          </span>
        </div>
      </div>
    </div>
  )
}

export default Cards;