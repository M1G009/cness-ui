import React from "react";
import CustomVideoPlayer from "../components/ui/CustomVideoPlayer";
import RatingIcon from "../utills/Icon/RatingIcon";
import DotsIcon from "../utills/Icon/DotsIcon";
import CertificationSteps from "../components/ui/CertificationSteps";
import ChevronRight from "../utills/Icon/ChevronRight";
import ConsciousnessSpotlight from "../components/ui/ConsciousnessSpotlight";
import CertifiedMember from "../components/ui/CertifiedMember";

const connectData = [
  {
    name: "Suresh Rajan",
    description: "Music, Art and Entertainment",
    image: "./images/connect-user.png",
    rating: "3.1",
  },
  {
    name: "Jenn Ortega",
    description: "Product Photography",
    image: "./images/connect-user.png",
    rating: "3.1",
  },
  {
    name: "Suresh Rajan",
    description: "Conscious Causes",
    image: "./images/connect-user.png",
    rating: "3.1",
  },
  {
    name: "Anand Joshi",
    description: "Conscious Causes",
    image: "./images/connect-user.png",
    rating: "3.1",
  },
];

export default function Certifications() {
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
            <div className=" px-4 pb-8 flex items-center justify-center absolute">
              <div className="flex flex-row justify-between px-2 ">
                <div className=" ">
                  <h1 className="text-base text-wrap text-white font-semibold">
                    Elevate Your Impact with CNESS Certification
                  </h1>

                  <p className="text-white text-sm my-2 font-normal">
                    Showcase your commitment to conscious practices and join a
                    global network of certified entities making a real
                    difference.
                  </p>
                </div>
              </div>

              <button className="flex items-center  justify-center bg-yellow-400 rounded-full px-3 py-2 ">
                <span className="text-xs text-nowrap font-medium text-black">
                  Get your CNESS certification
                </span>
                <div className="ml-4 rounded-full bg-[#1A237E] p-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 11 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <div className="w-full py-[30px]">
            <div className="flex gap-[12px] items-center">
              <div className="w-1/2">
                <img
                  className="h-auto w-auto"
                  src="./images/trustworthy.png"
                  alt="trustworthy"
                />
              </div>

              {/* Second div */}
              <div className="w-1/2">
                <h3 className="text-2xl font-semibold	 text-[#1A237E]">
                  Take your stand as a reliable trustworthy leader
                </h3>
                <p className="font-normal	text-xs text-[#606060] py-[12px]">
                  Becoming CNESS certified is more than just earning a badge;
                  it's about aligning with a global standard of consciousness in
                  business and practices. Certification validates your
                  dedication to ethical, sustainable, and positive impacts,
                  enhancing your credibility, connecting you with like-minded
                  partners, and opening doors to a conscious consumer base eager
                  to support businesses that share their values.
                </p>
                <DotsIcon />
              </div>
            </div>
          </div>
          <div className="w-full">
            <CertificationSteps />
          </div>
          <div
            className="w-full p-[30px] bg-cover bg-center my-5 rounded-lg"
            style={{
              backgroundImage: "url('./images/elevate.png')",
            }}
          >
            <h1 className="text-white font-semibold text-[20px]">
              Elevate Your Impact: <br /> Discover Certification Levels
            </h1>
            <img
              className="h-auto w-auto"
              src="./images/elevate1.png"
              alt="elevate1"
            />
            <button className="ml-auto flex items-center gap-2 justify-center bg-yellow-400 rounded-full px-3 py-2 ">
              <span className="text-title-xsm text-nowrap font-medium text-black">
                Get your CNESS certification
              </span>
              <ChevronRight />
            </button>
          </div>
          <ConsciousnessSpotlight />
          <CertifiedMember />
          <div className="w-full py-[30px]">
            <div className="flex gap-5 items-center">
              <div className="w-1/2">
                <h2 className="text-black text-2xl font-medium pb-2">
                  From Organisations
                </h2>
                <p className="text-black font-light text-sm py-[30px]">
                  Becoming CNESS certified has transformed how our stakeholders
                  perceive us, opening new opportunities and connecting us with
                  consumers and partners who share our vision for a sustainable
                  future.
                </p>
                <h2 className="text-black text-base font-semibold py-1">
                  John Berry
                </h2>
                <p className="text-[#7B7B7B] font-normal text-sm">
                  J&N Associates
                </p>
              </div>
              <div className="w-1/2">
                <img
                  className="h-auto w-auto"
                  src="./images/organisations.png"
                  alt="organisations.png"
                />
              </div>
            </div>
          </div>
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
                Connect with other certified <br /> organizations
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
