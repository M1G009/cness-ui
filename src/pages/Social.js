import React, { useState } from "react";
import StoryCard from "../components/ui/StoryCard";
import SocialPostCart from "../components/ui/PostCard";
import CustomVideoPlayer from "../components/ui/CustomVideoPlayer";
import CategoryIcon from "../components/ui/CategoryIcon";

const categories = [
  { name: "Music", src: "./images/category-icons/bx-music.png" },
  { name: "Music", src: "./images/category-icons/bx-music.png" },
  { name: "Music", src: "./images/category-icons/bx-music.png" },
];
const users = [
  { name: "Suresh Rajan", image: "./images/demoimage.png", online: true },
  { name: "Mia Rodriguez", image: "./images/demoimage.png", online: true },
  { name: "Vijay Kumar", image: "", online: true },
  { name: "Jacob Harris", image: "./images/demoimage.png", online: false },
  { name: "Divya Prakash", image: "./images/demoimage.png", online: false },
];
const myconnections = [
  { name: "Michael Brown", image: "./images/demoimage.png", online: true },
  { name: "Anand Joshi", image: "./images/demoimage.png", online: true },
  { name: "Deepa Srinivasan", image: "", online: true },
  { name: "Prasad Varma", image: "./images/demoimage.png", online: false },
  { name: "Jenn Ortega", image: "./images/demoimage.png", online: false },
];

export default function Social() {
  const [postContent, setPostContent] = useState("");

  const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleCreatePost = () => {
    // Logic to create a post
    console.log("Post created:", postContent);
  };

  const handleCancel = () => {
    setPostContent("");
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-4 p-4">
        {/* First Part (1/3 width on medium screens and above) */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col  bg-[#F6F6F6] p-4 rounded-md shadow-md">
            <div className="flex flex-row justify-between items-center mb-5">
              <h2 className="size-4 text-nowrap text-[#1A237E]">My CNESS</h2>
              {/* <img className="h-auto w-auto" src="./images/menu.png" alt="menu" /> */}
            </div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <img
                  className="h-auto w-auto"
                  src="./images/connection.png"
                  alt="Connections"
                />
                <span className="ml-2 text-black px-2">Connections</span>
              </li>
              <li className="flex items-center">
                <img
                  className="h-auto w-auto"
                  src="./images/media.png"
                  alt="Media"
                />
                <span className="ml-2 text-black px-2">Media</span>
              </li>
              <li className="flex items-center">
                <img
                  className="h-auto w-auto"
                  src="./images/conciousjuorney.png"
                  alt="Conscious Journey"
                />
                <span className="ml-2 text-black px-2">Conscious Journey</span>
              </li>
              <li className="flex items-center">
                <img
                  className="h-auto w-auto"
                  src="./images/dreamproject.png"
                  alt="Dream Projects"
                />
                <span className="ml-2 text-black px-2">Dream Projects</span>
              </li>
              <li className="flex items-center">
                <img
                  className="h-auto w-auto"
                  src="./images/conciousshopping.png"
                  alt="Conscious Shopping"
                />
                <span className="ml-2 text-black px-2">Conscious Shopping</span>
              </li>
              <li className="flex items-center">
                <img
                  className="h-auto w-auto"
                  src="./images/conciousserviceprovider.png"
                  alt="Conscious Service Providers"
                />
                <span className="ml-2 text-black px-2">
                  Conscious Service Providers
                </span>
              </li>
            </ul>
          </div>
          <button className=" mt-5 px-6 w-full py-3 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600">
            Contribute
          </button>
        </div>

        {/* Second Part (2/3 width on medium screens and above) */}
        <div className="w-full md:w-2/4  px-4">
          <div className="bg-gray-100 flex items-end justify-center relative overflow-hidden rounded-[15px]">
            <CustomVideoPlayer videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
            <div className=" px-4 pb-8 flex items-center justify-center absolute">
              <div className="flex flex-row justify-between px-2 ">
                <div className=" ">
                  <h1 className=" text-base text-wrap text-white">
                    Join the first Conscious Social Media Super App and Move the
                    World
                  </h1>

                  <p className="text-white text-sm my-2 ">
                    Share your opinions and crafts with the world!
                  </p>
                </div>
              </div>

              <button className="flex items-center  justify-center bg-yellow-400 rounded-full px-3 py-2 ">
                <span className="text-xs text-nowrap font-500 text-black">
                  Post your Inspirations!
                </span>
                <div className="ml-4 rounded-full bg-[#1A237E] p-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 11 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center flex-wrap h-scree p-5">
            {categories.map((el) => {
              return <CategoryIcon iconSrc={el.src} iconName={el.name} />;
            })}
          </div>

          <div>
            <h2 className="text-2xl font-semibold leading-9 mb-6">
              Today’s inspiration
            </h2>
            <div className="flex flex-col items-center">
              <div className="flex w-full">
                <img
                  src="./images/user.png"
                  alt="Profile Picture"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div className="w-full rounded-md bg-white flex">
                  <textarea
                    value={postContent}
                    onChange={handleInputChange}
                    className="w-full text-xs h-24 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F6F6F6]"
                    placeholder="What inspires you today?"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-4 justify-end w-full">
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 rounded-full border border-solid border-[#FFCC00] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Discard
                </button>
                <button
                  onClick={handleCreatePost}
                  className="px-6 py-2 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                >
                  Create a post
                </button>
              </div>
            </div>
            <div className="w-full border border-solid border-black my-8"></div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold leading-9 mb-6">
              CNESS Journeys
            </h2>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold leading-9">
                Share your story
              </h3>
              <button
                onClick={handleCreatePost}
                className="w-10 h-10 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600"
              >
                +
              </button>
            </div>
            <div className="flex gap-3">
              <StoryCard
                videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                title="Got my movie made"
                userIcon="./images/user.png"
                userName="Shreya Patel"
              />
              <StoryCard
                videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                title="Got my movie made"
                userIcon="./images/user.png"
                userName="Shreya Patel"
              />
              <StoryCard
                videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                title="Got my movie made"
                userIcon="./images/user.png"
                userName="Shreya Patel"
              />
              <StoryCard
                videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                title="Got my movie made"
                userIcon="./images/user.png"
                userName="Shreya Patel"
              />
            </div>

            <div className="flex flex-col mt-5">
              <SocialPostCart
                userIcon="https://via.placeholder.com/40"
                userName="Jane Doe"
                followers="150"
                postMediaSrc="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your media URL
                postMediaType="video" // or "image"
              />
              <SocialPostCart
                userIcon="https://via.placeholder.com/40"
                userName="Jane Doe"
                followers="150"
                postMediaSrc="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your media URL
                postMediaType="video" // or "image"
              />
              <SocialPostCart
                userIcon="https://via.placeholder.com/40"
                userName="Jane Doe"
                followers="150"
                postMediaSrc="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your media URL
                postMediaType="video" // or "image"
              />
              <SocialPostCart
                userIcon="https://via.placeholder.com/40"
                userName="Jane Doe"
                followers="150"
                postMediaSrc="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your media URL
                postMediaType="video" // or "image"
              />
            </div>
          </div>
        </div>

        {/* Third Part (1/3 width on medium screens and above) */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col">
            {/* First Section */}
            <div className="flex flex-col bg-[#F6F6F6] p-4 rounded-md shadow-md">
              <ul className="space-y-4 mx-2">
                <li className="flex items-center">
                  <img
                    className="h-auto w-auto"
                    src="./images/peopleyoufollow.png"
                    alt="People you follow"
                  />
                  <span className="ml-2 text-black px-2">
                    People you follow
                  </span>
                </li>
                <li className="flex items-center">
                  <img
                    className="h-auto w-auto"
                    src="./images/campains.png"
                    alt="Campaigns"
                  />
                  <span className="ml-2 text-black px-2">Campaigns</span>
                </li>
                <li className="flex items-center">
                  <img
                    className="h-auto w-auto"
                    src="./images/mycollections.png"
                    alt="My collection"
                  />
                  <span className="ml-2 text-black px-2">My collection</span>
                </li>
                <li className="flex items-center">
                  <img
                    className="h-auto w-auto"
                    src="./images/announcement.png"
                    alt="Announcements"
                  />
                  <span className="ml-2 text-black px-2">Announcements</span>
                </li>
                <li className="flex items-center">
                  <img
                    className="h-auto w-auto"
                    src="./images/trending.png"
                    alt="Trending"
                  />
                  <span className="ml-2 text-black px-2">Trending</span>
                </li>
                <li className="flex items-center">
                  <img
                    className="h-auto w-auto"
                    src="./images/mentionandtag.png"
                    alt="Mentions & tags"
                  />
                  <span className="ml-2 text-black px-2">Mentions & tags</span>
                </li>
                <li className="flex items-center">
                  <img
                    className="h-auto w-auto"
                    src="./images/leaderboard.png"
                    alt="Leaderboard"
                  />
                  <span className="ml-2 text-black px-2">Leaderboard</span>
                </li>
              </ul>
            </div>

            {/* My Dreambuilders Section */}
            <div className="flex flex-col bg-[#F6F6F6] p-4 rounded-lg shadow-md mt-5">
              <h3 className="size-4 text-nowrap text-[#1A237E] mb-6">
                My Dreambuilders
              </h3>
              <ul className="space-y-4 mb-4">
                {users.map((user, index) => (
                  <li key={index} className="flex items-center">
                    <span
                      className={`w-2 h-2 rounded-full mr-3 ${
                        user.online ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                    {user.image ? (
                      <img
                        className="w-8 h-8 rounded-full mr-3"
                        src={user.image}
                        alt={user.name}
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                        <span className="text-black px-2">
                          {user.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="text-black size-4 text-nowrap">
                      {user.name}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#see-all"
                className="text-nowrap text-[#1A237E] size-4 underline"
              >
                See all
              </a>
            </div>

            {/* My Connections Section */}
            <div className="flex flex-col bg-[#F6F6F6] p-4 rounded-lg shadow-md mt-5">
              <h3 className="size-4 text-nowrap text-[#1A237E] mb-6">
                My Connections
              </h3>
              <ul className="space-y-4 mb-4">
                {myconnections.map((user, index) => (
                  <li key={index} className="flex items-center">
                    <span
                      className={`w-2 h-2 rounded-full mr-3 ${
                        user.online ? "bg-green-500" : "bg-gray-400"
                      }`}
                    />
                    {user.image ? (
                      <img
                        className="w-8 h-8 rounded-full mr-3"
                        src={user.image}
                        alt={user.name}
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                        <span className="text-black px-2">
                          {user.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="text-black size-4 text-nowrap">
                      {user.name}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#see-all"
                className="text-nowrap text-[#1A237E] size-4 underline"
              >
                See all
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
