import React from "react";

const Stepper = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <h2 className="text-black font-semibold text-2xl py-[20px]">
        Build your team of people you trust for your ecosystem
      </h2>
      <div className="relative w-full">
        <div className="flex justify-between gap-2 w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-start">
            <div className="bg-[#FFCC00] border-2 border-[#1A237E] text-[#1A237E] rounded-full w-[67px] h-[67px] flex items-center justify-center text-2xl font-medium">
              1
            </div>
            <div className="bg-[#1A237E] text-white p-4 rounded-lg w-[123px] h-[123px] flex items-center justify-center">
              <img
                src="./images/stepper-1.png"
                alt="Choose Service"
                className="w-auto"
              />
            </div>
            <h3 className="text-[#000000] text-base font-semibold py-[20px]">
              Choose your service
            </h3>
            <p className="text-xs text-black font-normal">
              Begin by selecting the service category that aligns with your
              needs. Whether it’s legal advice, accounting services, or home
              maintenance, our diverse categories ensure you find exactly what
              you're looking for.
            </p>
          </div>

          <div className="hidden md:flex justify-center">
            <svg
              width="232"
              height="11"
              viewBox="0 0 232 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M231.662 5.05456L227.225 10.1091L226.126 8.85677L228.686 5.94028H0.433594V3.94028H228.485L226.126 1.25235L227.225 0L231.662 5.05456Z"
                fill="#1A237E"
              />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-start">
            <div className="bg-[#FFCC00] border-2 border-[#1A237E] text-[#1A237E] rounded-full w-[67px] h-[67px] flex items-center justify-center text-2xl font-medium">
              1
            </div>
            <div className="bg-[#1A237E] text-white p-4 rounded-lg w-[123px] h-[123px] flex items-center justify-center">
              <img
                src="./images/stepper-1.png"
                alt="Choose Service"
                className="w-auto"
              />
            </div>
            <h3 className="text-[#000000] text-base font-semibold py-[20px]">
              Choose your service
            </h3>
            <p className="text-xs text-black font-normal">
              Begin by selecting the service category that aligns with your
              needs. Whether it’s legal advice, accounting services, or home
              maintenance, our diverse categories ensure you find exactly what
              you're looking for.
            </p>
          </div>

          <div className="hidden md:flex justify-center">
            <svg
              width="232"
              height="11"
              viewBox="0 0 232 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M231.662 5.05456L227.225 10.1091L226.126 8.85677L228.686 5.94028H0.433594V3.94028H228.485L226.126 1.25235L227.225 0L231.662 5.05456Z"
                fill="#1A237E"
              />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-start">
            <div className="bg-[#FFCC00] border-2 border-[#1A237E] text-[#1A237E] rounded-full w-[67px] h-[67px] flex items-center justify-center text-2xl font-medium">
              1
            </div>
            <div className="bg-[#1A237E] text-white p-4 rounded-lg w-[123px] h-[123px] flex items-center justify-center">
              <img
                src="./images/stepper-1.png"
                alt="Choose Service"
                className="w-auto"
              />
            </div>
            <h3 className="text-[#000000] text-base font-semibold py-[20px]">
              Choose your service
            </h3>
            <p className="text-xs text-black font-normal">
              Begin by selecting the service category that aligns with your
              needs. Whether it’s legal advice, accounting services, or home
              maintenance, our diverse categories ensure you find exactly what
              you're looking for.
            </p>
          </div>
        </div>
      </div>

      <button className="mt-10 px-6 py-3 bg-yellow-500 text-white rounded-full shadow-lg">
        Select Service
      </button>
    </div>
  );
};

export default Stepper;
