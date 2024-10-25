import React from "react";
import Button from "../common/Button";
import { FaCircleChevronLeft } from "react-icons/fa6";

const BuildYourDream = () => {
  return (
    <div className="relative w-full py-[40px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[20px]">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="w-full">
              <h5 className="text-common-lightGray1 text-title-xsm font-normal mb-2">
                Build Your Dream
              </h5>
              <p className="text-title-sm font-semibold text-common-black">
                Manifest Your Destiny
              </p>
              <p className="mt-4 text-title-xsm1 font-normal text-common-black">
                Bring your deepest aspirations to life with the collective power
                of a community that believes in the possible.
              </p>
              <p className="mt-2 text-title-sm font-semibold text-common-black">
                Check out the latest inspiring stories from Dreambuilders like
                you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg w-full relative">
                <img
                  src="/images/build-your-dream/image-1.png"
                  alt="Story 1"
                  className="w-[342px] h-[460px] rounded-lg"
                />
                <div className="p-4 absolute bottom-0">
                  <p className="font-normal	text-common-white text-xs">
                    1 hour ago
                  </p>

                  <p className="font-semibold text-common-white text-title-xsm1">
                    It finally happened #hope
                  </p>
                  <div className="flex items-center pt-[10px] gap-[10px]">
                    <img
                      src="/images/build-your-dream/user.png"
                      alt="user"
                      className="max-w-full"
                    />
                    <div className="">
                      <p className="font-medium text-title-xsm text-common-white">
                        Anand Joshi,
                      </p>
                      <p className="font-normal text-title-xsm1 text-[#EDEDED]">
                        Travel Guru
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg w-full relative">
                <img
                  src="/images/build-your-dream/image-1.png"
                  alt="Story 1"
                  className="w-[342px] h-[460px] rounded-lg"
                />
                <div className="p-4 absolute bottom-0">
                  <p className="font-normal	text-common-white text-xs">
                    1 hour ago
                  </p>

                  <p className="font-semibold text-common-white text-title-xsm1">
                    It finally happened #hope
                  </p>
                  <div className="flex items-center pt-[10px] gap-[10px]">
                    <img
                      src="/images/build-your-dream/user.png"
                      alt="user"
                      className="max-w-full"
                    />
                    <div className="">
                      <p className="font-medium text-title-xsm text-common-white">
                        Anand Joshi,
                      </p>
                      <p className="font-normal text-title-xsm1 text-[#EDEDED]">
                        Travel Guru
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full">
                <div className="w-full relative">
                  <img
                    src="/images/build-your-dream/image-2.png"
                    alt="Story 1"
                    className="object-cover	w-[336px] h-[259px] rounded-lg"
                  />
                  <div className="p-4 absolute bottom-0 flex items-center">
                    <p className="w-full font-semibold text-common-white text-xs">
                      We moved out of New York back home to create our farm and
                      have never been happier
                    </p>
                    <div className="items-center w-full flex gap-[5px]">
                      <div className="bg-[#00BB28] h-[5px] w-[50px]"></div>
                      <p className="font-semibold text-common-white text-[10px]">
                        50% Achieved
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center pt-[15px] gap-[10px]">
                  <img
                    src="/images/build-your-dream/user.png"
                    alt="user"
                    className="max-w-full"
                  />
                  <div className="">
                    <p className="font-semibold	 text-title-xsm text-common-black">
                      Sofie Martinez
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full relative">
                  <img
                    src="/images/build-your-dream/image-2.png"
                    alt="Story 1"
                    className="object-cover	w-[336px] h-[259px] rounded-lg"
                  />
                  <div className="p-4 absolute bottom-0 flex items-center">
                    <p className="w-full font-semibold text-common-white text-xs">
                      We moved out of New York back home to create our farm and
                      have never been happier
                    </p>
                    <div className="items-center w-full flex gap-[5px]">
                      <div className="bg-[#00BB28] h-[5px] w-[50px]"></div>
                      <p className="font-semibold text-common-white text-[10px]">
                        50% Achieved
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center pt-[15px] gap-[10px]">
                  <img
                    src="/images/build-your-dream/user.png"
                    alt="user"
                    className="max-w-full"
                  />
                  <div className="">
                    <p className="font-semibold	 text-title-xsm text-common-black">
                      Sofie Martinez
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="secondary"
              Icon={FaCircleChevronLeft}
              iconColor="text-primary-main"
            >
              Build Your Dream
            </Button>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 ">
            <p className="my-2 text-title-sm font-semibold text-common-black">
              Featured Dream Project: Vocational School Madurai
            </p>
            <div
              style={{
                backdropFilter: "blur(180px)",
              }}
              className="bg-[#EDEDED] rounded-lg shadow-lg p-4"
            >
              <img
                src="/images/build-your-dream/image-4.png"
                alt="Featured Dream"
                className="w-full h-full object-cover rounded-lg"
              />
              <h3 className="pt-[20px] text-title-sm font-semibold text-common-black">
                My Dream: Help Orphan Kids Learn Practical Work Skills
              </h3>
              <p className="my-3 text-title-sm font-normal text-common-black">
                My name is Gopinath. I run a family textile shop in Madurai.
                Having seen many parentless children forced into begging and
                crime, I dream of helping them build real skills. I plan to
                start the Madurai Vocational Training Center for Orphans - a
                safe school teaching vulnerable youth trades like tailoring,
                metalwork, and carpentry. Students will rotate through
                workshops, learning responsibility alongside technical skills
                for future jobs. With community support, these children can
                develop independence and self-worth. I believe in empowering
                Madurai's most disadvantaged youth through practical vocational
                education.
              </p>
              <p className="my-2 text-title-sm font-semibold text-common-black">
                #mentoring #Skills #Youth #Madurai
              </p>
              <h4 className="py-[20px] text-title-sm font-semibold text-[#FF8811]">
                Help me Build My Dream.
              </h4>
              <hr className="bg-[#FC7A1E] h-[3px]" />
              <h3 className="py-[15px] text-title-sm font-semibold text-common-black">
                Take your next effective step
              </h3>
              <p className="text-title-xsm1 font-medium text-common-black">
                Pathdinder AI recommends:
              </p>
              <div className="flex pt-[20px] gap-[30px]">
                <div className="justify-center flex-col flex items-center gap-[5px] rounded-lg w-[126px] h-[99px] border-[1px] border-[#606060]">
                  <img
                    src="/images/build-your-dream/dreambuilder-image.png"
                    alt="Dreambuilders"
                    className="w-[45px] h-[32px]"
                  />
                  <h3 className="text-title-xsm1 font-semibold text-common-black">
                    Dreambuilders
                  </h3>
                </div>
                <div className="justify-center flex-col flex items-center gap-[5px] rounded-lg w-[126px] h-[99px] border-[1px] border-[#606060]">
                  <img
                    src="/images/build-your-dream/resources-image.png"
                    alt="Resources"
                    className="w-[37px] h-[32px]"
                  />
                  <h3 className="text-title-xsm1 font-semibold text-common-black">
                    Resources
                  </h3>
                </div>
                <div className="justify-center flex-col flex items-center gap-[5px] rounded-lg w-[126px] h-[99px] border-[1px] border-[#606060]">
                  <img
                    src="/images/build-your-dream/dreambuilder-image.png"
                    alt="Tools"
                    className="w-[45px] h-[32px]"
                  />
                  <h3 className="text-title-xsm1 font-semibold text-common-black">
                    Tools
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildYourDream;
