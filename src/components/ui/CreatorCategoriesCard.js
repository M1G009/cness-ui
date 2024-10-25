import React from 'react';

const CreaterCategoriesCard = ({ imageSrc, profileImage, title, categories,  name, fieldname }) => {
  return (
    <div className="max-w-sm overflow-hidden m-1">
      <img className="rounded-[10px] w-full h-36 object-cover" src={imageSrc} alt={title} />

      <div className='mt-4'>
        <h2 className="text-xs font-semibold">{title}</h2>
        <p className="text-[10px] text-gray-600 py-1  text-wrap">{categories}</p>
        <button
            className=" mt-3 px-2 w-full py-2 rounded-full flex justify-center bg-[#F6F6F6] font-medium "
          >
            <img
            src='./images/cart.png'
            alt='cart'
            className="w-6 h-6 p-1 mx-2"
          />
           <p className="text-[10px] text-gray-600 py-1  text-wrap">{fieldname}</p>
          </button>

      </div>
    </div>
  );
};

export default CreaterCategoriesCard;
