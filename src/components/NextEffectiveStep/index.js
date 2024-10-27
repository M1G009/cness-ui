import React from "react";
import Button from "../common/Button";
import { FaCircleChevronLeft } from "react-icons/fa6";

function NextEffectiveStep() {
  return (
    <div className="py-[80px]">
      <div
        className="w-full mx-auto py-10 bg-no-repeat bg-cover h-full"
        style={{
          backgroundImage: `linear-gradient(44.82deg, #0000008f 5%, rgba(217, 217, 217, 0) 45%), linear-gradient(71.07deg, #3E6473 -1.52%, rgba(62, 100, 115, 0.992272) 30.11%, rgba(115, 115, 115, 0) 76.06%), url('/images/next-effective-step.png')`,
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Now is the time to act.
              </h1>
              <p className="text-lg text-white mb-6 max-w-[390px]">
                Whether as an individual with a vision or an organization with a
                mission, your journey towards making a significant impact starts
                here.{" "}
                <span className="text-yellow-500">
                  Made simpler with Pathfinder AI.
                </span>
              </p>
            </div>
            <Button
              variant="primary"
              Icon={FaCircleChevronLeft}
              iconColor="text-yellow-500"
              className="min-w-fit"
            >
              Take your next effective step
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextEffectiveStep;
