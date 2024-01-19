import React from "react";

export const Hero = () => {
  return (
    <div className="flex px-[80px] py-[96px] bg-[#FFF]">
      <div className="flex px-[32px] py-0 items-start gap-[48px] flex-[1 0 0] flex-wrap">
        <div className="flex max-w-[768px] flex-col justify-center items-start gap-[48px] self-stretch">
          <div className="flex flex-col justify-center items-start gap-[8px] self-stretch">
            <h1 className="text-[#111827] font-sans text-[60px] not-italic font-bold leading-[72px] tracking-[-1.2px]">
              Hi, I’m Sagar 👋
            </h1>
            <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-2 self-stretch">
            <div className="flex items-center gap-2 self-stretch">
              <img
                src="/icons/icon-location.jpg"
                alt=""
                className="object-fill blur-none"
              />
              <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6">
                Ahmedabad, India
              </p>
            </div>
            <div className="flex items-center gap-2 self-stretch">
              <div className="flex w-[24px] h-[24px] flex-col justify-center items-center">
                <div className="w-[8px] h-2 shrink-0 rounded-[20px] bg-[#10B981]"></div>
              </div>
              <p className="text-[#4B5563] font-sans text-[16px] not-italic font-normal leading-6">
                Available for new projects
              </p>
            </div>
          </div>
          <div className="flex items-start gap-[4px] self-stretch">
            <div className="flex p-[6px] justify-center items-center rounded-[8px]">
              <img src="/icons/Icon-cat.jpg" alt="" />
            </div>
            <div className="flex p-[6px] justify-center items-center rounded-[8px]">
              <img src="/icons/Icon-twitter.jpg" alt="" />
            </div>
            <div className="flex p-[6px] justify-center items-center rounded-[8px]">
              <img src="/icons/Icon-fig.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex w-[400px] h-[360px] flex-[1 0 0] self-stretch relative">
          <div
            className="w-[280px] h-[320px] shrink-0 border-8 border-[#FFF] object-fill z-[1] absolute bottom-[40px] right-[40px]
          bg-[url(/HeroPic.jpg)] 
          bg-cover"
          ></div>
          <div className="w-[280px] h-[320px] shrink-0 border-8 border-[#FFF] bg-[#E5E7EB] absolute bottom-0 right-0"></div>
        </div>
      </div>
    </div>
  );
};
