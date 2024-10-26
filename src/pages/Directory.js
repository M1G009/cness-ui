import React from "react";
import CustomVideoPlayer from "../components/ui/CustomVideoPlayer";
import RatingIcon from "../utills/Icon/RatingIcon";
import ChevronRight from "../utills/Icon/ChevronRight";
import CnessFamilyCard from "../components/ui/CnessFamilyCard";
import Stepper from "../components/ui/Stepper";

const connectData = [
  {
    name: "Manoj Pillai",
    description: "Lawyer",
    image: "./images/connect-user.png",
    rating: "3.1",
  },
  {
    name: "Isabella Anderson",
    description: "Realtor",
    image: "./images/connect-user.png",
    rating: "3.1",
  },
  {
    name: "Daniel Williams",
    description: "Accountant",
    image: "./images/connect-user.png",
    rating: "3.1",
  },
  {
    name: "Alok Krishna",
    description: "IT",
    image: "./images/connect-user.png",
    rating: "3.1",
  },
];

export default function Directory() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-4 p-4">
        {/* First Part (1/3 width on medium screens and above) */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col  bg-[#F6F6F6] p-4 rounded-md shadow-md">
            <div className="flex flex-row justify-between items-center mb-5">
              <h2 className="size-4 text-nowrap text-[#1A237E]">My CNESS</h2>
              {/* <img className="h-auto w-auto" src="./images/menu.png" alt="menu" /> */}
            </div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <img
                  className="h-auto w-auto"
                  src="./images/connection.png"
                  alt="Connections"
                />
                <span className="ml-2 text-black px-2">Connections</span>
              </li>
              <li className="flex items-center">
                <img
                  className="h-auto w-auto"
                  src="./images/media.png"
                  alt="Media"
                />
                <span className="ml-2 text-black px-2">Media</span>
              </li>
              <li className="flex items-center">
                <img
                  className="h-auto w-auto"
                  src="./images/conciousjuorney.png"
                  alt="Conscious Journey"
                />
                <span className="ml-2 text-black px-2">Conscious Journey</span>
              </li>
              <li className="flex items-center">
                <img
                  className="h-auto w-auto"
                  src="./images/dreamproject.png"
                  alt="Dream Projects"
                />
                <span className="ml-2 text-black px-2">Dream Projects</span>
              </li>
              <li className="flex items-center">
                <img
                  className="h-auto w-auto"
                  src="./images/conciousshopping.png"
                  alt="Conscious Shopping"
                />
                <span className="ml-2 text-black px-2">Conscious Shopping</span>
              </li>
              <li className="flex items-center">
                <img
                  className="h-auto w-auto"
                  src="./images/conciousserviceprovider.png"
                  alt="Conscious Service Providers"
                />
                <span className="ml-2 text-black px-2">
                  Conscious Service Providers
                </span>
              </li>
            </ul>
          </div>
          <button className="mt-5 px-6 w-full py-3 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600">
            Get certified!
          </button>
        </div>

        {/* Second Part (2/3 width on medium screens and above) */}
        <div className="w-full md:w-2/4">
          <div className="bg-gray-100 flex items-end justify-center relative">
            <CustomVideoPlayer videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
            <div className="px-4 pb-8 absolute">
              <div className="">
                <h1 className="text-base text-wrap text-white font-semibold">
                  Find Consciousness Driven Professionals
                </h1>
              </div>

              <div className="flex flex-row justify-between">
                <p className="text-white text-sm my-2 font-normal">
                  Connect and learn from the best Practitioners on CNESS.
                </p>
                <button className="mr-2 border border-[#FFCC00] text-base text-nowrap font-medium text-white text-center  rounded-full px-3 py-2 ">
                  Register Now
                </button>
                <button className="flex items-center gap-2 justify-center bg-yellow-400 rounded-full px-3 py-2 ">
                  <span className="text-base text-nowrap font-medium text-black">
                    Locate Professionals
                  </span>
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full py-[30px]">
            <h2 className="text-black font-semibold text-base pb-2">
              Find a CNESS certified provider
            </h2>
            <div className="md:flex gap-[12px] items-center bg-[#F6F6F6] p-4 rounded-full">
              <button className="w-full rounded-full py-[10px] text-[#606060] font-normal text-sm bg-[#FFFFFF] border border-[#EAEAEA] shadow-lg">
                Services
              </button>
              <button className="w-full rounded-full py-[10px] text-[#606060] font-normal text-sm bg-[#FFFFFF] border border-[#EAEAEA] shadow-lg">
                Location
              </button>
            </div>
          </div>
          <div className="py-[15px]">
            <CnessFamilyCard />
          </div>
          <div className="w-full py-[30px]">
            <h2 className="text-black text-2xl font-semibold pb-3">
              Meet one of our top rated CNESS Professionals
            </h2>
            <div className="flex gap-5 items-center">
              <div className="w-1/2">
                <p className="text-black font-normal text-sm">
                  Barbara Atkins Meyers is that rare Westchester lawyer who
                  wields contracts and trademarks for A-list artists and authors
                  while empowering at-risk girls through a nonprofit mentorship
                  program. Though their worlds contrast, she beams about
                  integrating ambitious career pursuits with uplifting others.
                  Her advice for those seeking to marry success with
                  significance? "Keep sight of the change you most want to see.
                  Find where your professional path intersects with that vision
                  to lift underserved voices.
                </p>
                <h2 className="text-black text-base font-semibold py-1">
                  Barbara Atkins Meyers
                </h2>
                <p className="text-[#7B7B7B] font-normal text-sm pb-2">
                  Lawyer
                </p>

                <div className="bg-[#F6F6F6] rounded py-2 px-4 flex gap-3 items-center w-fit">
                  <RatingIcon />
                  <h2 className="text-black text-base font-medium ">
                    3{" "}
                    <span className="text-[#1A237E] text-xs font-semibold">
                      (Approved)
                    </span>
                  </h2>
                </div>
                <p className="text-[#606060] font-semibold text-sm py-2">
                  Skilled in
                </p>
                <div className="flex flex-wrap gap-2">
                  <button className="text-xs font-normal text-[#646464] bg-[#F8F7F7] rounded py-[6px] px-3">
                    User Experience
                  </button>
                  <button className="text-xs font-normal text-[#646464] bg-[#F8F7F7] rounded py-[6px] px-3">
                    Singing
                  </button>
                  <button className="text-xs font-normal text-[#646464] bg-[#F8F7F7] rounded py-[6px] px-3">
                    Drawing
                  </button>
                  <button className="text-xs font-normal text-[#646464] bg-[#F8F7F7] rounded py-[6px] px-3">
                    Agile Thinking
                  </button>
                  <button className="text-xs font-normal text-[#646464] bg-[#F8F7F7] rounded py-[6px] px-3">
                    Cooking
                  </button>
                </div>
                <button className="mt-[10px] border-[2px] border-[#1A237E] text-sm font-normal text-[#606060] rounded-full py-[6px] px-8">
                  Explore
                </button>
              </div>
              <div className="w-1/2">
                <img
                  className="h-auto w-auto"
                  src="./images/rated.png"
                  alt="rated.png"
                />
              </div>
            </div>
          </div>
          <Stepper />
          <div className="w-full py-[30px] bg-[#1A237E] rounded-lg px-[20px]">
            <div className="flex gap-3 items-center justify-between">
              <div className="">
                <h2 className="text-white text-xl font-semibold pb-2">
                  Ready to Elevate your Business?
                </h2>
                <p className="text-white font-normal text-sm py-1">
                  Join the ranks of conscious entities making an <br />
                  impact. Get CNESS certified.
                </p>
              </div>
              <div className="">
                <button className="flex items-center  justify-center bg-yellow-400 rounded-full px-3 py-2 ">
                  <span className="text-base text-nowrap font-medium text-black">
                    Start Your Certification Journey
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Third Part (1/3 width on medium screens and above) */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col">
            {/* First Section */}
            <div className="flex flex-col bg-[#F6F6F6] p-4 rounded-md shadow-md">
              <h3 className="text-[16px] text-nowrap text-black mb-6 font-semibold">
                My CNESS Team
              </h3>
              <ul className="space-y-4 mx-2">
                {connectData.map((person, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between w-full"
                  >
                    <div className="flex items-center gap-[10px]">
                      <img
                        className="h-auto w-auto"
                        src={person.image}
                        alt={person.name}
                      />
                      <div className="flex flex-col">
                        <span className="font-normal text-black text-[14px]">
                          {person.name}
                        </span>
                        <p className="font-normal text-[#606060] text-[12px]">
                          {person.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <RatingIcon />
                      <span className="p-2 text-[#606060] text-[20px] font-medium">
                        {person.rating}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="" className="underline pt-[10px]">
                See all
              </a>
            </div>

            {/* My Dreambuilders Section */}
            <div className="flex gap-[10px] flex-col bg-[#F6F6F6] p-4 rounded-lg shadow-md mt-5">
              <h3 className="text-[16px] text-nowrap text-black mb-6 font-semibold">
                Popular on CNESS
              </h3>
              <div className="w-full">
                <img
                  className="h-auto w-auto"
                  src="./images/nature.png"
                  alt="nature"
                />
                <h4 className="py-3 text-black text-[12px] font-semibold">
                  Discover the music that connects us to our planet and its
                  preservation.
                </h4>
                <p className="text-[#606060] text-[12px] font-normal">
                  September 1, 2023
                </p>
              </div>
              <div className="w-full">
                <img
                  className="h-auto w-auto"
                  src="./images/nature.png"
                  alt="nature"
                />
                <h4 className="py-3 text-black text-[12px] font-semibold">
                  Discover the music that connects us to our planet and its
                  preservation.
                </h4>
                <p className="text-[#606060] text-[12px] font-normal">
                  September 1, 2023
                </p>
              </div>
              <div className="flex items-center	justify-between">
                <div className="flex gap-[15px] items-center">
                  <span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2929 6.29297L7.58594 12L13.2929 17.707L14.7069 16.293L10.4139 12L14.7069 7.70697L13.2929 6.29297Z"
                          fill="#606060"
                        />
                      </svg>
                    </span>
                  </span>
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.707 17.707L16.414 12L10.707 6.29297L9.29297 7.70697L13.586 12L9.29297 16.293L10.707 17.707Z"
                        fill="#606060"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-[#606060] text-[12px] font-medium	">
                  More featured on CNESS
                </p>
              </div>
            </div>

            <div className="flex gap-[10px] flex-col bg-[#F6F6F6] p-4 rounded-lg shadow-md mt-5">
              <h3 className="text-[16px] text-nowrap text-black mb-1 font-semibold">
                Top Media Headlines
              </h3>
              <div className="flex gap-[12px] items-baseline">
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                      fill="#1A237E"
                    />
                  </svg>
                </span>
                <p className="text-[#000000] text-[16px] font-light	">
                  EcoGuardians’ Wins Award for Best Environmental Documentary
                </p>
              </div>
              <div className="flex gap-[12px] items-baseline">
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                      fill="#1A237E"
                    />
                  </svg>
                </span>
                <p className="text-[#000000] text-[16px] font-light	">
                  EcoGuardians’ Wins Award for Best Environmental Documentary
                </p>
              </div>
              <div className="flex gap-[12px] items-baseline">
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                      fill="#1A237E"
                    />
                  </svg>
                </span>
                <p className="text-[#000000] text-[16px] font-light	">
                  EcoGuardians’ Wins Award for Best Environmental Documentary
                </p>
              </div>
              <div className="flex items-center	justify-between">
                <div className="flex gap-[15px] items-center">
                  <span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2929 6.29297L7.58594 12L13.2929 17.707L14.7069 16.293L10.4139 12L14.7069 7.70697L13.2929 6.29297Z"
                          fill="#606060"
                        />
                      </svg>
                    </span>
                  </span>
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.707 17.707L16.414 12L10.707 6.29297L9.29297 7.70697L13.586 12L9.29297 16.293L10.707 17.707Z"
                        fill="#606060"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-[#606060] text-[12px] font-medium	">
                  More Top Headlines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
