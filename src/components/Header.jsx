import React from "react";

export const Header = () => {
  return (
    <div className="flex w-[100%] px-[80px] py-[16px] justify-between items-center border-b border-[rgba(255, 255, 255, 0.00)] bg-[#FFF] self-stretch">
      <div className="flex w-[100%] px-[32px] py-0 justify-between items-center flex-[1 0 0]">
        <h1 className="text-black text-center font-sans text-[30px] not-italic font-bold leading-9 tracking-[-0.6px]">
          &lt;SS /&gt;
        </h1>
        <div className="flex gap-5">
          <div className="flex gap-3 justify-center items-center">
            <ul className="flex gap-[24px] justify-center items-center">
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
          <div className="flex gap-[16px] justify-center items-center pl-6">
            <img src="/icons/Icon-dmode.jpg" alt="" />
            <button className="flex px-[16px] py-[6px] justify-center items-center gap-[8px] bg-[#111827] rounded-[12px] text-[#F9FAFB] font-sans text-[16px] font-medium">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
