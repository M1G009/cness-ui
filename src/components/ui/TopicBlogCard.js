import React from 'react';

const TopicBlogCard = ({ userName, userIcon, title, description, name }) => {
  return (
    <div className="bg-white w-full md:w-1/2 p-4">
      <span className='text-xs font-medium text-[#606060]'>Project Management</span>

      {/* Title */}
      <h2 className="text-xl font-semibold text-[#1A237E] mx-0 my-3">{title}</h2>

      <div className="flex items-center">
        <img src={userIcon} alt={userName} className="w-6 h-6 rounded-full mr-2" />
        <div>
          <h4 className="text-xs font-normal text-[#606060]">{userName}</h4>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-2 line-clamp-4 text-xs font-normal">{description}</p>

      <div className="flex items-center my-3">
        <span className="font-medium mr-4 text-xs text-[#393939]">14.02.24</span>
        <span className="font-medium mr-4 text-xs text-[#393939]">1.2K contributors</span>
      </div>

      {/* Button */}
      <button className="mt-5 px-6 py-2 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600">
        Contribute
      </button>
    </div>
  );
};

export default TopicBlogCard;
