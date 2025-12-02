import React from "react";
import { IoFlashOutline, IoShieldOutline, IoEyeOutline } from "react-icons/io5";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/Third.png";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";

function Mainbody() {
  return (
    <section className="bg-[#FAF9F6] px-6 md:px-20 lg:px-32 pt-0 pb-2 font-['Plus_Jakarta_Sans'] -mt-[100px]">

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">

        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] font-normal text-black leading-[1.3]">
           Deliver Branded LP Reporting Digitally
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
            Share performance reports, notices and updates through a secure, white-labelled LP portal.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={first}
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
            src={second}
            alt="Automate Compliance Checks"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] font-normal text-black leading-[1.3] whitespace-nowrap">
            Automate Fund & NAV Reporting
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
            Generate quarterly reports, valuations and NAV updates using real-time portfolio data.
          </p>
        </div>

      </div>

      {/* THIRD SECTION - Screen AML & Risk Automatically */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
        
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] font-normal text-black leading-[1.3] lg:whitespace-nowrap">
           Provide Personalised <br /> Performance Views
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
            Show each LP's commitments, calls, distributions, IRR and portfolio exposure at a glance.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={third}
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
            src={fourth}
            alt="Secure Documents & Audit Trails"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] font-normal text-black leading-[1.3]">
          Secure Every Report & Transaction
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
           Store reports, statements and notices in an indexed audit-ready vault with transaction-level accuracy.
          </p>
        </div>

      </div>

      {/* FIFTH SECTION - Reuse LP Identity Across Funds */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24 items-center">
        
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h2 className="text-[30px] md:text-[40px] font-normal text-black leading-[1.3]">
           Act on Real-Time LP Engagement
          </h2>
          <p className="text-[17px] text-gray-700 leading-[28px] max-w-md">
           Track opens, responses and interactions to prioritise outreach and strengthen investor relationships.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={fifth}
            alt="Reuse LP Identity Across Funds"
            className="w-full max-w-xl rounded-xl"
          />
        </div>

      </div>
    </section>







    
  );
}

export default Mainbody;
