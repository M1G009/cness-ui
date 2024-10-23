import React from 'react';

const CategoryIcon = ({ iconSrc, iconName }) => {
  return (
    <div className="flex items-center border px-5 py-2.5 rounded-[50px] border-solid border-black mr-3 my-1.5">
      {
        iconSrc ? <span className="mr-2">
          <img
            src={iconSrc}
            alt={iconName}
            className="w-6 h-6" // 24x24 pixels
          />
        </span> : ""
      }

      <span className="text-lg font-medium text-gray-900">
        {iconName}
      </span>
    </div>
  );
};

export default CategoryIcon;
