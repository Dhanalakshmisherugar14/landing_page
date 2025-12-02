import React from "react";
import { IoFlashOutline, IoShieldOutline, IoEyeOutline } from "react-icons/io5";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import hero5 from "../assets/hero5.png";
import hero6 from "../assets/hero6.png";

function Mainbody() {
  return (
    <section className="bg-[#FAF9F6] px-6 md:px-20 lg:px-32 pt-48 pb-2 font-['Plus_Jakarta_Sans'] -mt-[100px]">

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">

        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] font-normal text-black leading-[1.3]">
          Manage LP Records from One Dashboard
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
           Search, filter and access every investor profile and communication instantly.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={hero1}
            alt="Investor onboarding"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

      </div>

      {/* SECOND SECTION - Automate Compliance Checks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center order-last lg:order-first">
          <img
            src={hero2}
            alt="Automate Compliance Checks"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] font-normal text-black leading-[1.3] whitespace-nowrap">
         Track Capital Activity in Real Time
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
           See commitments, calls and distributions with automatic reconciliation.
          </p>
        </div>

      </div>

      {/* THIRD SECTION - Screen AML & Risk Automatically */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
        
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] font-normal text-black leading-[1.3] lg:whitespace-nowrap">
           Offer LPs a Unified  <br /> Investment View
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
            Show each LP's commitments, calls, distributions, IRR and portfolio exposure at a glance.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={hero3}
            alt="Screen AML & Risk Automatically"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

      </div>

      {/* FOURTH SECTION - Secure Documents & Audit Trails */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center order-last lg:order-first">
          <img
            src={hero4}
            alt="Secure Documents & Audit Trails"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] font-normal text-black leading-[1.3]">
         Control Access and Keep Data Audit-Ready
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
           Set precise role permissions and maintain full activity logs with timestamps.
          </p>
        </div>

      </div>

      {/* FIFTH SECTION - Reuse LP Identity Across Funds */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
        
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] font-normal text-black leading-[1.3]">
          Keep All Fund Data Updated Automatically
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
           Sync transactions, reports and metrics with scheduled or manual refreshes.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={hero5}
            alt="Reuse LP Identity Across Funds"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

      </div>

      {/* SIXTH SECTION - Hero 6 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center order-last lg:order-first">
          <img
            src={hero6}
            alt="Hero 6"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] font-normal text-black leading-[1.3]">
            Protect Investor Data <br/> with Enterprise-Grade <br/>Security
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
           Operate on SOC 2-certified, fully encrypted environment to safeguard all LP and fund information.
          </p>
        </div>

      </div>
    </section>
    
  );
}

export default Mainbody;
