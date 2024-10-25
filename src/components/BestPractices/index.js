import React from "react";
import Button from "../common/Button";
import { FaCircleChevronLeft } from "react-icons/fa6";

function BestPractices() {
  return (
    <div className="py-[50px]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <h1 className="text-[16px] font-400 mb-4 text-[#606060]">
              Best Practices
            </h1>
            <h2 className="text-[20x] font-semibold mb-2 text-black">
              Peer to Peer knowledge sharing and Mentorship
            </h2>
            <p className="text-[16px] mb-6 text-black font-normal">
              Share your unique knowledge with your peers in conscious business.
              This is your platform to make your unique contribution and learn
              cutting edge conscious best practice in every field.
            </p>
            <div
              style={{
                backdropFilter: "blur(180px)",
              }}
              className="bg-[#F6F6F6] rounded-lg shadow-lg p-4"
            >
              <h1 className="text-[12px] font-500 mb-4 text-[#606060]">
                Project Management
              </h1>
              <h2 className="text-[16px] font-semibold mb-2 text-[#1A237E]">
                Best Way to Lead Successful Agile Projects
              </h2>
              <p className="text-[12px] mb-6 text-black font-normal">
                Leading successful Agile projects necessitates a multifaceted
                approach that prioritizes communication, collaboration, and
                adaptability. Establishing clear project goals and roles within
                cross-functional teams lays the foundation for effective
                collaboration and ensures alignment towards project objectives.
                Embracing iterative development cycles and regular feedback
                loops enables teams to quickly respond to changing requirements
                and deliver value incrementally. Read more
              </p>
              <div className="flex items-center">
                <img src="/images/user.png" alt="user" className="mr-2" />
                <h4 className="font-medium text-[12px] text-black">
                  Karthik Chandra
                </h4>
              </div>
              <div className="py-[15px] flex items-center gap-[20px]">
                <p className="font-medium text-[12px] text-[#393939]">
                  14.02.24
                </p>
                <p className="font-medium text-[12px] text-[#393939]">
                  1.2K contributors
                </p>
              </div>
            </div>
            <img
              src="/images/bestpractices.png"
              alt="CNESS Directory"
              className="w-full pt-[20px]"
            />
            <Button
              variant="secondary"
              Icon={FaCircleChevronLeft}
              iconColor="text-primary-main"
              className="mt-[20px]"
            >
              Share your Best Practice
            </Button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="/images/metting.png"
              alt="CNESS Directory"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestPractices;
