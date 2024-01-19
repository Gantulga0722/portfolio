import React from "react";
import { hamburgerMenu } from "./Card";

export const Header = () => {
  return (
    <div className="flex w-[100%] sm:px-[80px] py-[16px] justify-between items-center border-b border-[rgba(255, 255, 255, 0.00)] bg-[#FFF] self-stretch ">
      <div className="flex w-[100%] px-[32px] py-0 justify-between items-center flex-[1 0 0]">
        <h1 className="text-black text-center font-sans text-[30px] not-italic font-bold leading-9 tracking-[-0.6px]">
          &lt;SS /&gt;
        </h1>
        <div
          className="flex sm:hidden flex-col gap-1 relative"
          onClick={() => {
            document.getElementById("dropMenu").style.display = "flex";
          }}
        >
          <div className="w-5 h-0.5 bg-gray-600"></div>
          <div className="w-5 h-0.5 bg-gray-600"></div>
          <div className="w-5 h-0.5 bg-gray-600"></div>
        </div>
        <div
          className="hidden sm:flex flex-col sm:flex-row gap-5 w-[600px] h-[660px] items-start bg-[#FFF] shadow-xl sm:shadow-none absolute top-0 right-0 z-[2] sm:mr-[552px] sm:h-[36px]"
          id="dropMenu"
        >
          <div className="flex justify-between items-center px-[32px] py-[16px] w-[100%] border-b border-[rgba(255, 255, 255, 0.00)] sm:hidden">
            <h1 className="text-black text-center font-sans text-[30px] not-italic font-bold leading-9 tracking-[-0.6px] sm:hidden">
              &lt;SS /&gt;
            </h1>
            <div
              className=" flex w-[24px] h-[24px]"
              onClick={() => {
                document.getElementById("dropMenu").style.display = "none";
              }}
            >
              <img src="/icons/Icon-x.png" alt="" />
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <ul className="flex gap-[24px] justify-center items-start flex-col p-[16px] sm:flex-row sm:items-center sm:mt-[6px]">
              <li className="text-[#4B5563] font-sans text-[16px] not-italic font-medium leading-6">
                About
              </li>
              <li className="text-[#4B5563] font-sans text-[16px] not-italic font-medium leading-6">
                Work
              </li>
              <li className="text-[#4B5563] font-sans text-[16px] not-italic font-medium leading-6">
                Testimonials
              </li>
              <li className="text-[#4B5563] font-sans text-[16px] not-italic font-medium leading-6">
                Contact
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[16px] justify-center items-start p-[16px] w-[100%] sm:flex-row sm:items-center">
            <div className="flex w-[100%] justify-between sm:w-fit">
              <span className="flex text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6 sm:hidden">
                Switch Theme
              </span>
              <img src="/icons/Icon-dmode.jpg" alt="" />
            </div>
            <button className="flex w-[100%] sm:w-fit px-[16px] py-[6px] justify-center items-center gap-[8px] bg-[#111827] rounded-[12px] text-[#F9FAFB] font-sans text-[16px] font-medium">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
