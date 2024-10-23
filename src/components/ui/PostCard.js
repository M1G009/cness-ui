import React, { useState } from 'react';
import { FaRegThumbsUp, FaRegBookmark } from 'react-icons/fa';
import { BiShare, BiComment } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";


const SocialPostCart = ({ userIcon, userName, followers, postMediaSrc, postMediaType }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // Logic to handle comment submission
    console.log('Comment submitted:', comment);
    setComment('');
  };

  return (
    <div className="w-full bg-[#F9F9F9] rounded-lg p-4 mb-5">
      {/* User Info */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={userIcon} alt={userName} className="w-10 h-10 rounded-full mr-2" />
          <div>
            <h4 className="font-medium">{userName}</h4>
            <p className="text-gray-600">{followers} followers</p>
          </div>
        </div>
        <button className="flex items-center px-3 py-1 rounded-full">
          <FaArrowTrendUp className='mr-2' />  Following
        </button>
      </div>

      {/* Post Media */}
      <div className="mb-4">
        {postMediaType === 'video' ? (
          <video className="w-full rounded-lg" controls>
            <source src={postMediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={postMediaSrc} alt="Post Media" className="w-full rounded-lg" />
        )}
      </div>

      {/* Interaction Icons */}
      <div className="flex mb-4 gap-3">
        <button className="flex items-center">
          <FaRegThumbsUp className="text-yellow-500 text-[25px]" />
          <span className="ml-1">546</span>
        </button>
        <button className="flex items-center">
          <BiShare className="text-[#1A237E] text-[25px]" />
        </button>
        <button className="flex items-center">
          <FaRegBookmark className="text-[#1A237E] text-[25px]" />
        </button>
        <button className="flex items-center">
          <BiComment className="text-[#1A237E] text-[25px]" />
          <span className="ml-1">5</span>
        </button>
      </div>

      {/* Comment Input */}
      <div className="flex">
        <img src={userIcon} alt={userName} className="w-10 h-10 rounded-full mr-2" />
        <div className="relative w-full bg-[#F0F0F2] rounded-lg">
          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Enter your comment"
            className="w-full rounded-lg px-4 py-2 pr-16 bg-white focus:outline-none bg-transparent border-0"
          />

          {/* Post Button */}
          <button
            onClick={handleCommentSubmit}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 px-6 py-1 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialPostCart;
