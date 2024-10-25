import React from "react";
import Button from "../common/Button";
import { FaCircleChevronLeft } from "react-icons/fa6";

function TrustworthyLeader() {
  return (
    <div className="py-[50px]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">Certifications</h1>
            <h2 className="text-2xl mb-2 text-primary-main">
              Be known as a reliable trustworthy leader
            </h2>
            <p className="text-sm mb-6 text-black font-normal">
              Becoming CNESS certified is more than just earning a badge: it's
              about aligning with a global standard of consciousness in business
              and practices. Certification validates your dedication to ethical,
              sustainable, and positive impacts, enhancing your credibility,
              connecting you with like-minded partners, and opening doors to a
              conscious consumer base eager to support businesses that share
              their values.
            </p>
            <Button
              variant="secondary"
              Icon={FaCircleChevronLeft}
              iconColor="text-primary-main"
            >
              Get your CNESS certification
            </Button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="/images/trustworthyleader.png"
              alt="CNESS Certification Badge"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="pt-[20px] flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <img
              src="/images/celebrating.png"
              alt="CNESS Certification Badge"
              className="w-full h-full"
            />
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="/images/celebrating2.png"
              alt="CNESS Certification Badge"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustworthyLeader;
