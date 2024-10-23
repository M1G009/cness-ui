import React from 'react';

const SliderBlogCard = ({ imageSrc, title, description, buttonLabel }) => {
  return (
    <div className="max-w-sm bg-white overflow-hidden">
      {/* Image */}
      <img className="rounded-[10px] w-full h-48 object-cover" src={imageSrc} alt={title} />

      <div className='mt-4'>
        {/* Title */}
        <h2 className="text-xs font-semibold">{title}</h2>

        {/* Description */}
        <p className="text-xs text-gray-600 mt-2 line-clamp-4">{description}</p>

        {/* Button */}
        <button className="mt-5 px-6 py-2 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600">
        Contribute
        </button>
      </div>
    </div>
  );
};

export default SliderBlogCard;
