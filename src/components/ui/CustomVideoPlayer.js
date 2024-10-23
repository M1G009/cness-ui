import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const CustomVideoPlayer = ({ videoSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="relative w-full h-auto">
            {/* Video element */}
            <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-auto"
                controls={false}
                onClick={handlePlayPause}
            />

            {/* Play/Pause button */}
            {!isPlaying && (
                <button
                    onClick={handlePlayPause}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl"
                >
                    <FaPlay />
                </button>
            )}

            {isPlaying && (
                <button
                    onClick={handlePlayPause}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl"
                >
                    <FaPause />
                </button>
            )}
        </div>
    );
};

export default CustomVideoPlayer;
