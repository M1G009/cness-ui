import React from 'react';

const CreaterCard = ({ imageSrc, profileImage, title, description, tags, name, fieldname }) => {
  return (
    <div className="max-w-sm overflow-hidden m-1">
      {/* Image */}
      <img className="rounded-[10px] w-full h-36 object-cover" src={imageSrc} alt={title} />

      <div className='mt-4'>
        {/* Title */}
        <h2 className="text-xs font-semibold">{title}</h2>
        {/* Description */}
        <p className="text-[10px] text-gray-600 py-1  text-wrap">{fieldname}</p>
        <div className="flex items-center py-2 ">
          <img
            src={profileImage}
            alt={name}
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-black text-xs  font-medium">{name}</span>
        </div>

        <button
            className=" mt-3 px-2 w-full py-2 rounded-full flex justify-center bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            <img
            src='./images/cart.png'
            alt='cart'
            className="w-6 h-6 p-1"
          />
          </button>

      </div>
    </div>
  );
};

export default CreaterCard;
