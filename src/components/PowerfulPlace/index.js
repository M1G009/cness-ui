import React from "react";

function PowerfulPlace() {
  return (
    <div className="w-full bg-common-bgGray py-[50px]">
      <div className="container">
        <div className="flex gap-[40px] items-center">
          <div className="w-2/5">
            <h1 className="text-title-xl font-bold text-primary-main mb-4">
              Everything you need to create your best life and a better world,
              all in one powerful place.
            </h1>
            <p className="title-sm text-common-black font-normal">
              Connecting leaders, visionaries across the world in a Conscious
              eco-system that creates powerful, positive change.
            </p>
          </div>
          <div className="w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/powerful-place/icon1.png"
                  alt="Conscious Social Media Network"
                  className=" w-[62px] h-[58px]"
                />
                <p className="text-center text-title-xsm1 font-bold text-primary-main pt-[25px]">
                  Conscious Social Media Network. A Platform for a Better World
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/powerful-place/icon2.png"
                  alt="Inspirational Entertainment"
                  className="w-[63px] h-[65px]"
                />
                <p className="text-center text-title-xsm1 font-bold text-primary-main pt-[25px]">
                  Inspirational Entertainment Uplift Conscious Content
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/powerful-place/icon3.png"
                  alt="AI Pathfinder"
                  className="w-[56px] h-[54px]"
                />
                <p className="text-center text-title-xsm1 font-bold text-primary-main pt-[25px]">
                  AI Pathfinder Empower Your Choices
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/powerful-place/icon4.png"
                  alt="Best Practice Strategies"
                  className="w-[72px] h-[71px]"
                />
                <p className="text-center text-title-xsm1 font-bold text-primary-main pt-[25px]">
                  Best Practice Strategies. Make your Dream a Reality
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/powerful-place/icon5.png"
                  alt="CNESS Certification"
                  className="w-[57px] h-[65px]"
                />
                <p className="text-center text-title-xsm1 font-bold text-primary-main pt-[25px]">
                  CNESS Certification. Trust, Reliability, and Quality
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/powerful-place/icon6.png"
                  alt="Crowdsourced Excellence"
                  className="w-[66px] h-[59px]"
                />
                <p className="text-center text-title-xsm1 font-bold text-primary-main pt-[25px]">
                  Crowdsourced Excellence. Conscious Products & Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PowerfulPlace;
