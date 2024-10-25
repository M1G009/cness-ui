// src/components/CertifiedMember.js
import React from "react";
import CustomVideoPlayer from "./CustomVideoPlayer";
import RatingIcon from "../../utills/Icon/RatingIcon";
import ChevronRight from "../../utills/Icon/ChevronRight";

const CertifiedMember = () => {
  return (
    <div className="bg-[#44AF69] rounded-lg py-5 px-3 w-full">
      <h2 className="text-white text-2xl font-medium py-2">
        Celebrating Our Certified Members
      </h2>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-2">
        <div className="flex-1 relative">
          <div className="relative">
            <CustomVideoPlayer videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
            <div className="items-center flex gap-1 absolute bottom-4 left-4 bg-[#0098F4] text-[#EBEBEB] text-title-xsm font-medium py-1 px-3 rounded-full">
              <span>
                <RatingIcon />
              </span>
              Level 3
            </div>
          </div>
        </div>

        {/* Right Section: Certification Details */}
        <div className="flex-1 text-black">
          <h2 className="text-title-xsm font-bold mb-2">
            GreenSolve Solutions
          </h2>
          <p className="mb-4">
            <span className="font-normal text-sm">Certification Tier:</span>{" "}
            Certified
            <br />
            <span className="font-normal text-sm">Industry:</span> Renewable
            Energy
            <br />
            <span className="font-normal text-sm">
              Certification Date:
            </span>{" "}
            January 1, 2023
          </p>
          <p className="mb-4 font-normal text-sm">
            In January 2023, GreenSolve Solutions reached the pinnacle of their
            certification journey by attaining the Certified tier. This
            prestigious achievement symbolises their unwavering commitment to
            conscious leadership, innovation, and excellence in the renewable
            energy industry. As a Certified member of CNESS, they continue to
            inspire others and drive positive change on a global scale.
          </p>
          <button className="flex items-center gap-2 justify-center bg-yellow-400 rounded-full px-3 py-2 ">
            <span className="text-title-xsm text-nowrap font-medium text-black">
              Get your CNESS certification
            </span>
            <ChevronRight />
          </button>
          <div className="mt-4">
            <div className="flex gap-2">
              <div className="w-full">
                <video
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  controls
                  className="rounded-lg w-full"
                />
                <div className=" text-white mt-2 text-sm font-normal">
                  Certification Tier:{" "}
                  <span className="font-semibold">Approved</span>
                </div>
              </div>
              <div className="w-full">
                <video
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  controls
                  className="rounded-lg w-full"
                />
                <div className=" text-white mt-2 text-sm font-normal">
                  Certification Tier:{" "}
                  <span className="font-semibold">Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertifiedMember;
