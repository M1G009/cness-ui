import React from "react";

const ConsciousnessSpotlight = () => {
  const organizations = [
    {
      name: "Novenda",
      sector: "Renewable Energy",
      certification: "Aspire",
      description:
        "Novenda (e-waste recycling) - Headquartered in the US, this electronics dismantling and upcycling leader partners with top brands to optimally recover materials from old gadgets and reuse them in manufacturing new products, serving customers worldwide.",
      image: "./images/consciousness-1.png", // Replace with actual path
    },
    {
      name: "SafetyPlus",
      sector: "Industry",
      certification: "Certified",
      description:
        "SafetyPlus - Present across 120 countries, this Indian multinational leverages next-gen technologies like IoT, AR and analytics to create integrated safety systems and training procedures that have reduced on-site accidents globally by over 40%.",
      image: "./images/consciousness-2.png",
    },
    {
      name: "Fabrick",
      sector: "Textiles",
      certification: "Certified",
      description:
        "Fabrick (ethical textiles, UK) - Our stylish fabrics are woven from GOTS certified organic cotton grown by farmers we directly trade with. We use natural dyes and digitally print designs to greatly reduce water usage and waste while paying employees a living wage.",
      image: "./images/consciousness-1.png",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-[#1E1F20] mb-6">
        Consciousness Spotlight
      </h2>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        <button className="bg-[#FFCC00] text-[#1A237E] py-2 px-4 rounded-lg font-medium text-title-xsm">
          Organisations
        </button>
        <button className="py-2 px-4 font-medium text-black text-title-xsm">
          Projects
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {organizations.map((org, index) => (
          <div key={index} className="rounded-lg">
            <img src={org.image} alt={org.name} className="w-full h-auto" />
            <div className="w-full py-2">
              <div className="text-black font-semibold mb-1 text-title-xsm">
                Certification Tier:{" "}
                <span className="text-[#00BB28]">{org.certification}</span>
              </div>
              <h3 className="text-black text-title-xsm font-semibold mb-2">
                {org.name}
              </h3>
              <p className="text-[#606060] text-sm mb-4 font-bold">
                Sector: <span className="font-normal">{org.sector}</span>
              </p>
              <p className="text-[#606060] text-sm font-normal">
                {org.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination or Navigation Controls */}
      <div className="flex justify-center mt-6">
        <button className="text-gray-600 hover:text-gray-800">&lt;</button>
        <button className="text-gray-600 hover:text-gray-800 ml-4">&gt;</button>
      </div>
    </div>
  );
};

export default ConsciousnessSpotlight;
