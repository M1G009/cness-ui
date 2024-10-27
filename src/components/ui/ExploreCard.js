import React from "react";

const ExploreCard = ({ text, buttonText }) => (
  <div
    className="relative w-full py-5 px-3 my-7 bg-cover bg-center flex items-center justify-center overflow-hidden rounded-lg"
    style={{ backgroundImage: "url('./images/explore-bg.png')" }}
  >
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <div className="w-full z-10 flex items-center justify-between">
      <h2 className="text-xs font-semibold text-white w-6/12">{text}</h2>
      <button className="px-6 py-2 bg-yellow-500 rounded-full font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600">
        {buttonText}
      </button>
    </div>
  </div>
);
export default ExploreCard;
