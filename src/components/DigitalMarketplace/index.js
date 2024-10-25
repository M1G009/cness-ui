import React from "react";
import Button from "../common/Button";
import { FaCircleChevronLeft } from "react-icons/fa6";

function DigitalMarketplace() {
  return (
    <div className="py-[50px] bg-[#F7F7F7]">
      <div className="container">
        <div className="items-center flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-2/5">
            <h1 className="text-[16px] font-400 mb-4 text-[#1A237E]">
              Digital Marketplace
            </h1>
            <h2 className="text-[20x] font-semibold mb-2 text-black">
              Create. Share. Monetize.
            </h2>
            <p className="text-[16px] mb-6 text-black font-normal">
              Your creations can fuel the future. Share your digital wonders
              where every transaction supports a greater mission.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="flex flex-col items-start justify-center bg-white rounded-lg p-6">
                <h3 className="text-title-xsm1 font-semibold text-primary-main">
                  Why share your creations on CNESS?
                </h3>
                <p className="font-normal text-xs mt-2 text-common-black">
                  Turn your passion into livelihood. Monetize your digital
                  products in a marketplace that values consciousness as much
                   as you do.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-start justify-center bg-white rounded-lg py-8 px-5">
                <h3 className="text-title-xsm1 font-semibold text-primary-main">
                  Simple listing process
                </h3>
                <p className="font-normal text-xs mt-2 text-common-black">
                  List, Review, Thrive.   Share your work with us, pass our
                  quality check, and start earning in a community that champions
                  conscious living.
                </p>
              </div>
            </div>
            <div className="flex gap-4 pt-[15px]">
              <Button
                variant="secondary"
                Icon={FaCircleChevronLeft}
                iconColor="text-primary-main"
              >
                Start sharing
              </Button>
              <Button className="border-[2px] border-[#FFCC00] bg-[#EFEFEF] !text-common-black">
                Shop Inspirational Products
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-3/5 flex justify-center mt-8 md:mt-0">
            <img
              src="/images/digitalmarketplace.png"
              alt="Digital Marketplace"
              className="max-w-[492px] h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketplace;
