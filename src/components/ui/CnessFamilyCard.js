import React from "react";

const CnessFamilyCard = () => {
  const organizations = [
    {
      name: "Paul Johnson",
      sector: "#youth #arts #poetryjam",
      description:
        "Paul Johnson lends his accounting expertise to London entrepreneurs enthusiastically supports youth community enrichment programs in Walthamstow. singing and writing poetry",
      image: "./images/paulJohnson.png",
    },
    {
      name: "Robert Jones",
      sector: "#youth #arts #poetryjam",
      description:
        "Robert Jones leverages his two decades of non-profit accounting experience to support Chicago organizations in financial reporting and strategic planning when he is not indulging his passions for chess and home brewing.",
      image: "./images/robertjones.png",
    },
    {
      name: "Angela Diaz",
      sector: "#youth #arts #poetryjam",
      description:
        "Angela Diaz applies her sharp expertise in corporate accounting and taxation to serving Orange County business clients when she's not busy watching documentary films, or riding motocross tracks across California.",
      image: "./images/angeladiaz.png",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-base font-semibold text-[#1E1F20] mb-6">
        Check out trusted practitioners from the CNESS family
      </h2>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6">
        <button className="bg-[#FFCC00] text-[#1A237E] py-2 px-3 rounded-lg font-medium text-title-xsm">
          Accountant
        </button>
        <button className="py-2 px-3 font-medium text-black text-title-xsm">
          Architect
        </button>
        <button className="py-2 px-3 font-medium text-black text-title-xsm">
          Teacher
        </button>
        <button className="py-2 px-3 font-medium text-black text-title-xsm">
          Lawyer
        </button>
        <button className="py-2 px-3 font-medium text-black text-title-xsm">
          Others
        </button>
      </div>

      {/* Cards Grid */}
      <div className="bg-[#F6F6F6] rounded-lg p-2 border border-[#EDEDED] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {organizations.map((org, index) => (
          <div key={index} className="rounded-lg flex flex-col h-full">
            <img src={org.image} alt={org.name} className="w-full h-auto" />
            <div className="w-full py-2 flex-grow">
              <h3 className="text-black text-xs font-semibold mb-2">
                {org.name}
              </h3>
              <p className="text-[#606060] text-xs font-normal">
                {org.description}
              </p>
              <p className="text-[#606060] text-xs mb-4 font-semibold">
                {org.sector}
              </p>
            </div>
            <button className="bg-[#FFCC00] w-fit rounded-full my-3 py-2 px-5 text-base text-black font-medium">
              Connect
            </button>
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

export default CnessFamilyCard;
