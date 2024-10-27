import React from "react";
import Button from "../common/Button";
import { FaCircleChevronLeft } from "react-icons/fa6";

function Directory() {
  return (
    <div className="py-[50px] bg-[#F7F7F7]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 md:pt-[80px]">
            <h1 className="text-[16px] font-400 mb-4 text-[#1A237E]">
              Directory
            </h1>
            <h2 className="text-[20x] font-semibold mb-2 text-black">
              Connect with Conscious Certified Professionals and Organizations
            </h2>
            <p className="text-[16px] mb-6 text-black font-normal">
              Forge meaningful connections with certified professionals and
              organizations that shares your values and goals. And list your
              entity to join the ranks of change-makers shaping a more conscious
              world.
            </p>
            <div className="flex gap-4">
              <Button
                variant="secondary"
                Icon={FaCircleChevronLeft}
                iconColor="text-primary-main"
              >
                Find a Certified Professional
              </Button>
              <Button className="border-[2px] border-[#FFCC00] bg-[#EFEFEF] !text-common-black">
                List Your Organization
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="/images/directory-image.png"
              alt="CNESS Directory"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directory;
