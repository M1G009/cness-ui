import React from "react";

export default function ArtificialIntelligence() {
  return (
    <div className="w-full bg-common-sonicSliver py-[50px]">
      <div className="container ">
        <div className="md:w-2/5">
          <h4 className="text-[#1A237E] text-[16px] font-normal">
            Artificial Intelligence
          </h4>
          <h2 className="text-black text-[20px] font-semibold">
            Pathfinder AI: Your Guide to Conscious Action
          </h2>
          <p className="text-black text-[16px] font-normal">
            Meet Pathfinder AI, your revolutionary guide within CNESS, crafted
            to unlock your creative potential and help monetize your passions.
            This intelligent mentor not only assists in transforming your ideas
            into compelling conscious content but also acts as a wise navigator,
            guiding you toward actions and projects that deeply align with your
            ambitions. Embrace the journey of conscious living, inspired by an
            AI that always help you know and take the next effective step
            forward on your journey.
          </p>
        </div>
        <img
          src="images/artificial.png"
          alt="CNESS Journeys"
          className="max-w-[900px] ml-auto mt-[-150px]"
        />
        <button className="flex items-center  justify-center bg-yellow-400 rounded-full px-3 py-2 ">
          <span className="text-[16px] text-nowrap font-medium text-black">
            Explore with Pathfinder AI
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
  );
}
