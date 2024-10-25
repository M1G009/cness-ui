import React from 'react';

const DreamProjectCard = ({ imageSrc,  title, description,tags, name, fieldname }) => {
  return (
    <div className="max-w-sm overflow-hidden p-2 bg-[#F6F6F6] m-1">
      {/* Image */}
      <img className="rounded-[10px] w-full h-36 object-cover" src={imageSrc} alt={title} />

      <div className='mt-4'>
        {/* Title */}
        <h2 className="text-xs font-semibold">{title}</h2>
        {/* Description */}
        <p className="text-xs text-gray-600 mt-2 line-clamp-4">{description}</p>
        <p className="text-xs text-gray-600 mt-2  text-wrap line-clamp-4">{tags}</p>

        <h2 className="text-xs my-2 font-semibold">{name}</h2>
        <p className="text-[10px] text-gray-600 mt-1  text-wrap">{fieldname}</p>
        
      </div>
    </div>
  );
};

export default DreamProjectCard;
