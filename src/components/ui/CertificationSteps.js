// CertificationSteps.js
import React from "react";

const steps = [
  {
    id: 1,
    title: "Contribute to Best Practice",
    description:
      "Start your Certification Journey by contributing to best practice relevant to your industry",
    icon: "./images/certification1.png",
    bgColor: "bg-[#1C77C3]",
  },
  {
    id: 2,
    title: "Submit your Application",
    description:
      "Fill the application form and provide details to the questionnaire",
    icon: "./images/certification3.png",
    bgColor: "bg-[#44AF69]",
  },
  {
    id: 3,
    title: "Certification",
    description: "Join our network and directory of certified organisations",
    icon: "./images/certification2.png",
    bgColor: "bg-[#FC7A1E]",
  },
];

const CertificationSteps = () => {
  return (
    <div className="w-full p-6 bg-[#F4F4F4] rounded-lg">
      <h2 className="font-semibold mb-4 text-[#1A237E] text-[20px]">
        CNESS certification signals reliability, trust, and value for
        organisations, media, and services
      </h2>
      <p className="text-[#606060] mb-8 text-[14px] font-normal">
        Here’s how you get started
      </p>
      <div className="relative flex  justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex-1 relative">
            {/* Step Content */}
            <div className="flex flex-col">
              <div
                className={`z-10 w-[104px] h-[104px] mb-4 rounded-lg flex items-center justify-center ${step.bgColor}`}
              >
                <img src={step.icon} alt={step.title} />
              </div>
              <h3 className="text-[12px] font-semibold text-[#1A237E] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-[#606060] text-[12px] font-normal">
                {step.description}
              </p>
            </div>
            {/* Line Connector */}
            {index < steps.length - 1 && (
              <div className="absolute top-12 right-0 w-full h-1/2 transform translate-x-1/3">
                <div className="border-b border-gray-400 mx-8 bg-gray-100"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CertificationSteps;
