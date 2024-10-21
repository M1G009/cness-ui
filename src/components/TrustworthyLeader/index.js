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
            <h2 className="text-2xl mb-2 text-mainColor">
              Be known as a reliable trustworthy leader
            </h2>
            <p className="text-sm mb-6">
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
              iconColor="text-mainColor"
            >
              Get your CNESS certification
            </Button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
              alt="CNESS Certification Badge"
              className="w-48 h-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustworthyLeader;
