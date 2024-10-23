import React from 'react';

const StoryCard = ({ userIcon, userName, title, videoSrc }) => {
    return (
        <div className="relative w-64 h-96 rounded-lg overflow-hidden shadow-md">
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
                <h3 className="text-white font-semibold mb-3">{title}</h3>
                <div className="flex items-center mb-2">
                    <img
                        src={userIcon}
                        alt={userName}
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <span className="text-white font-medium">{userName}</span>
                </div>
            </div>
        </div>
    );
};

export default StoryCard;
