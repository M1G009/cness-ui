import React from 'react';

const StoryCard = ({ userIcon, userName, title, videoSrc }) => {
    return (
        <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-md">
            <video
                className="w-full h-full object-cover absolute top-0 left-0"
                autoPlay
                loop
                muted
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 w-full p-4">
                <h3 className="text-white text-xs font-semibold mb-2">{title}</h3>
                <div className="flex items-center ">
                    <img
                        src={userIcon}
                        alt={userName}
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <span className="text-white text-xs  font-medium">{userName}</span>
                </div>
            </div>
        </div>
    );
};

export default StoryCard;
