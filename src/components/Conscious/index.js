import React from "react";
import Button from "../common/Button";
import { FaCircleChevronRight } from "react-icons/fa6";

function Conscious() {
  return (
    <>
      <div className="w-full py-[50px]">
        <div className="container">
          <div className="w-2/5 mb-10">
            <h4 className="font-normal text-title-xsm text-primary-main">
              Conscious Social Media
            </h4>
            <h2 className="text-title-sm font-semibold text-primary-main mb-4">
              Welcome to the Heart of <br /> CNESS Community
            </h2>
            <p className="font-normal text-xs text-lightGray">
              Together, we build a supportive, inclusive, and empowering
              community committed to conscious living and continuous growth.
              Join us on CNESS and be part of the conversation.
            </p>
          </div>
        </div>

        <div className="container max-w-[1432px] bg-blue-200 py-3">
          <div className="container">
            <div className="flex">
              <div className="w-2/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card 1 */}
                  <div className="flex flex-col items-start justify-center bg-white rounded-lg py-8 px-5 border">
                    <h3 className="text-title-xsm font-semibold text-primary-main">
                      Forge Meaningful Connections
                    </h3>
                    <p className="text-xs mt-2 text-common-black">
                      Connect with like-minded individuals, thought leaders, and
                      dreammakers who share your passion for conscious living
                      and positive change.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="flex flex-col items-start justify-center bg-white rounded-lg py-8 px-5 border">
                    <h3 className="text-title-xsm font-semibold text-primary-main">
                      Share Your Journey
                    </h3>
                    <p className="text-xs mt-2 text-common-black">
                      Share your experiences, insights, and inspirations,
                      fostering conversations that spark growth and
                      transformation within our vibrant community.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="flex flex-col items-start justify-center bg-white rounded-lg py-8 px-5 border">
                    <h3 className="text-title-xsm font-semibold text-primary-main">
                      Discover New Perspectives
                    </h3>
                    <p className="text-xs mt-2 text-common-black">
                      Explore diverse viewpoints, discover new ideas, and expand
                      your horizons as you engage in thought-provoking
                      discussions on topics that matter most to you.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="flex flex-col items-start justify-center bg-white rounded-lg py-8 px-5 border">
                    <h3 className="text-title-xsm font-semibold text-primary-main">
                      Collaborate and Co-Create
                    </h3>
                    <p className="text-xs mt-2 text-common-black">
                      Collaborate on projects, initiatives, and causes with
                      fellow members, amplifying your impact and collectively
                      shaping a better world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-3/5 relative">
                <img
                  src="/images/cness-journeys.png"
                  alt="CNESS Journeys"
                  className="object-contain	h-[763px] w-full absolute top-[-180x] bottom-[-150px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Button
            variant="secondary"
            Icon={FaCircleChevronRight}
            iconColor="text-primary-main"
            className="mt-4"
          >
            Explore our community
          </Button>
        </div>
      </div>
    </>
  );
}

export default Conscious;
