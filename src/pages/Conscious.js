import React, { useState } from "react";
import StoryCard from "../components/ui/StoryCard";
import SocialPostCart from "../components/ui/PostCard";
import CustomVideoPlayer from "../components/ui/CustomVideoPlayer";
import CategoryIcon from "../components/ui/CategoryIcon";
import ExploreCard from "../components/ui/ExploreCard";

const categories = [
  { name: "Los Angeles", src: "./images/category-icons/angeles.png" },
  { name: "Movies", src: "./images/category-icons/movie-reel.png" },
  { name: "In theatre", src: "./images/category-icons/theatre.png" },
  { name: "English", src: "./images/category-icons/bx-globe.png" },
  { name: "Conscious", src: "./images/category-icons/conscious.png" },
];

const movies = [
  {
    id: 1,
    image: "/images/demoimage.png",
    rating: "4.8",
    name: "The Shawshank redemption",
    genre: "Drama",
  },
  {
    id: 2,
    image: "/images/demoimage.png",
    rating: "3",
    name: "The Princess Bride",
    genre: "by Safa",
  },
  {
    id: 3,
    image: "/images/demoimage.png",
    rating: "4.3",
    name: "Up",
    genre: "Romance/Adventure",
  },
  {
    id: 4,
    image: "/images/demoimage.png",
    rating: "3.1",
    name: "Alice Davis",
    genre: "Animation",
  },
  {
    id: 5,
    image: "/images/demoimage.png",
    rating: "4.1",
    name: "The Pursuit of Happyness",
    genre: "Drama",
  },
];

const inspirationalMovies = [
  {
    id: 1,
    image: "/images/demoimage.png",
    rating: "4.8",
    name: "Top Motivational Movies",
    genre: "by Rakesh",
  },
  {
    id: 2,
    image: "/images/demoimage.png",
    rating: "3",
    name: "Top 15 Feel-good Movies",
    genre: "by Jenny",
  },
  {
    id: 3,
    image: "/images/demoimage.png",
    rating: "4.3",
    name: "Top 10 Inspirational Movies",
    genre: "by Safa",
  },
  {
    id: 4,
    image: "/images/demoimage.png",
    rating: "3.1",
    name: "My Positive Picks ",
    genre: "by Esther",
  },
  {
    id: 5,
    image: "/images/demoimage.png",
    rating: "4.1",
    name: "My Positive Picks ",
    genre: "by Esther",
  },
];

const exploreCommunity = [
  { name: "Conscious Movies", src: "./images/explore-1.png" },
  { name: "Podcasts", src: "./images/explore-2.png" },
  { name: "Music", src: "./images/explore-1.png" },
  { name: "Curated Playlists", src: "./images/explore-2.png" },
  { name: "Conscious Series", src: "./images/explore-1.png" },
];

export default function Conscious() {
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
          <button className="flex gap-3 justify-center mt-5 px-6 w-full py-3 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z"
                  fill="#1A237E"
                />
              </svg>
            </span>
            Upload Content
          </button>
        </div>

        {/* Second Part (2/3 width on medium screens and above) */}
        <div className="w-full md:w-2/4">
          <div className="bg-gray-100 flex items-end justify-center relative overflow-hidden rounded-[15px]">
            <CustomVideoPlayer videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
            <div className=" px-4 pb-8 flex items-center justify-center absolute">
              <div className="flex flex-row justify-between px-2 ">
                <div className=" ">
                  <h1 className="text-base text-wrap text-white">
                    Discover the best in Conscious Entertainment from around the
                    World.
                  </h1>

                  <p className="text-white text-sm my-2 ">
                    From inspiring series to enlightening podcasts – find and
                    rate your next conscious watch or listen here.
                  </p>
                </div>
              </div>

              <button className="flex items-center  justify-center bg-yellow-400 rounded-full px-3 py-2 ">
                <span className="text-xs text-nowrap font-500 text-black">
                  Upload
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
          <div className="gap-2 flex justify-center items-center flex-wrap h-scree py-5">
            {categories.map((el) => {
              return <CategoryIcon iconSrc={el.src} iconName={el.name} />;
            })}
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center mb-3">
              <h3 className="title-sm font-semibold text-black">
                Top conscious movies rated by our community to inspire you
              </h3>
              <a href="" className="underline">
                See all
              </a>
            </div>
            <div className="container px-1 py-2">
              <table className="min-w-full bg-white overflow-hidden">
                <thead>
                  <tr className="text-left">
                    <th className="p-2 text-[#606060] text-[14px] font-medium	"></th>
                    <th className="p-2 text-[#606060] text-[14px] font-medium	">
                      Movies
                    </th>
                    <th className="p-2 text-[#606060] text-[14px] font-medium	">
                      Genre
                    </th>
                    <th className="p-2 text-[#606060] text-[14px] font-medium	">
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map((movie, index) => (
                    <tr key={movie.id} className="border-b hover:bg-gray-50">
                      <td className="p-2 text-[#606060] text-[16px] font-semibold">
                        {index + 1}
                      </td>
                      <td className="p-2 flex items-center">
                        <img
                          src={movie.image}
                          alt={movie.name}
                          className="w-10 h-10 rounded-full mr-4"
                        />
                        <span className="p-2 text-black text-[16px] font-medium">
                          {movie.name}
                        </span>
                      </td>
                      <td className="p-2 text-[#7B7B7B] text-[16px] font-normal">
                        {movie.genre}
                      </td>
                      <td className="p-2">
                        <div className="flex items-center">
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.30369 14.2005C2.30369 14.2005 2.2939 14.1906 2.289 14.1857C0.763816 12.558 0 10.6587 0 8.48518C0 7.39843 0.193402 6.37589 0.580206 5.42498C0.96701 4.4716 1.53742 3.60466 2.29145 2.82664C3.05526 2.06591 3.91211 1.48796 4.85953 1.09278C5.8094 0.697592 6.82293 0.5 7.90011 0.5C9.04583 0.5 10.1279 0.7297 11.1488 1.18663C12.1696 1.64356 13.0559 2.29068 13.805 3.12797C14.488 3.89117 15.0046 4.76304 15.3595 5.74112C15.411 5.88191 15.3032 6.0301 15.1539 6.0301H13.7952C13.7095 6.0301 13.6336 5.97823 13.5993 5.8992C13.2884 5.17305 12.8576 4.53334 12.3092 3.98009C11.7265 3.39225 11.0557 2.94026 10.2993 2.62164C9.54035 2.30303 8.74226 2.14495 7.90255 2.14495C6.74704 2.14495 5.69679 2.42405 4.74692 2.98225C3.79704 3.54045 3.04792 4.30364 2.49954 5.27184C1.95116 6.24004 1.67697 7.30951 1.67697 8.48518C1.67697 9.66085 1.95116 10.7328 2.49954 11.7059C3.04792 12.6791 3.79949 13.4447 4.75426 14.0103C5.70903 14.5735 6.75928 14.855 7.90255 14.855C8.74226 14.855 9.54035 14.697 10.2993 14.3784C11.0582 14.0597 11.729 13.6077 12.3092 13.0199C12.8576 12.4667 13.2884 11.8319 13.5993 11.1156C13.6336 11.0366 13.7095 10.9847 13.7952 10.9847H15.1539C15.3032 10.9847 15.4085 11.1329 15.3571 11.2737C15.0021 12.2444 14.4856 13.1088 13.805 13.872C13.0559 14.7093 12.1721 15.3564 11.1488 15.8134C10.1279 16.2703 9.04583 16.5 7.90011 16.5C5.77268 16.5 3.90721 15.7343 2.30124 14.2005H2.30369Z"
                              fill="#1A237E"
                            />
                            <path
                              d="M7.85456 12.7467C10.2803 12.7467 12.2467 10.7803 12.2467 8.35456C12.2467 5.92884 10.2803 3.9624 7.85456 3.9624C5.42884 3.9624 3.4624 5.92884 3.4624 8.35456C3.4624 10.7803 5.42884 12.7467 7.85456 12.7467Z"
                              fill="#FFCC00"
                            />
                          </svg>

                          <span className="p-2 text-[#606060] text-[20px] font-medium	">
                            {movie.rating}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full py-[20px]">
            <div className="flex gap-[12px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.45553 20.5508C3.45553 20.5508 3.44084 20.536 3.4335 20.5286C1.14572 18.0871 0 15.238 0 11.9778C0 10.3476 0.290103 8.81383 0.870309 7.38747C1.45051 5.9574 2.30614 4.65699 3.43717 3.48997C4.58289 2.34887 5.86816 1.48194 7.2893 0.889164C8.71411 0.296388 10.2344 0 11.8502 0C13.5687 0 15.1919 0.34455 16.7232 1.02995C18.2545 1.71534 19.5838 2.68601 20.7075 3.94196C21.732 5.08675 22.5069 6.39457 23.0393 7.86169C23.1164 8.07286 22.9549 8.29515 22.7309 8.29515H20.6928C20.5643 8.29515 20.4504 8.21735 20.399 8.0988C19.9326 7.00957 19.2863 6.05001 18.4638 5.22013C17.5898 4.33837 16.5836 3.66039 15.4489 3.18246C14.3105 2.70454 13.1134 2.46743 11.8538 2.46743C10.1206 2.46743 8.54519 2.88608 7.12038 3.72337C5.69557 4.56067 4.57188 5.70546 3.74931 7.15776C2.92674 8.61006 2.51545 10.2143 2.51545 11.9778C2.51545 13.7413 2.92674 15.3492 3.74931 16.8089C4.57188 18.2686 5.69924 19.4171 7.13139 20.2655C8.56355 21.1102 10.1389 21.5326 11.8538 21.5326C13.1134 21.5326 14.3105 21.2955 15.4489 20.8175C16.5873 20.3396 17.5935 19.6616 18.4638 18.7799C19.2863 17.95 19.9326 16.9978 20.399 15.9234C20.4504 15.8049 20.5643 15.7271 20.6928 15.7271H22.7309C22.9549 15.7271 23.1128 15.9494 23.0356 16.1605C22.5032 17.6165 21.7283 18.9132 20.7075 20.058C19.5838 21.314 18.2581 22.2847 16.7232 22.9701C15.1919 23.6554 13.5687 24 11.8502 24C8.65903 24 5.86082 22.8515 3.45186 20.5508H3.45553Z"
                  fill="#1A237E"
                />
                <path
                  d="M11.7811 18.3698C15.4197 18.3698 18.3693 15.4202 18.3693 11.7816C18.3693 8.14301 15.4197 5.19336 11.7811 5.19336C8.14252 5.19336 5.19287 8.14301 5.19287 11.7816C5.19287 15.4202 8.14252 18.3698 11.7811 18.3698Z"
                  fill="#FFCC00"
                />
              </svg>
              <h2 className="text-[20px] text-black font-semibold	">
                Explore community Content
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 pt-[20px]">
              {exploreCommunity.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-[120px]"
                >
                  <img src={item.src} alt={item.name} className="" />
                  <h3 className="text-center text-title-sm font-normal text-black mt-2">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <ExploreCard
            text="Create Conscious content and get featured on Trending pages!"
            buttonText="Upload Content"
          />
          <ExploreCard
            text="Curate a playlist or a simple list of your favourite movies"
            buttonText="Curate a List"
          />
          <ExploreCard
            text="Created a list? Share it with the world!"
            buttonText="Share your list"
          />
          <ExploreCard
            text="Finished watching a movie? Inspired?"
            buttonText="Take action!"
          />

          <div className="w-full">
            <div className="flex justify-between items-center mb-3">
              <h3 className="title-sm font-semibold text-black md:max-w-[70%]">
                See what inspirational movies recommendations are trending from
                our community
              </h3>
              <a href="" className="underline">
                See all
              </a>
            </div>
            <div className="container px-1 py-2">
              <table className="min-w-full bg-white overflow-hidden">
                <tbody>
                  {inspirationalMovies.map((movie, index) => (
                    <tr
                      key={movie.id}
                      className="border-b hover:bg-gray-50 text-left"
                    >
                      <td className="p-2 text-[#606060] text-[16px] font-semibold">
                        {index + 1}
                      </td>
                      <td className="p-2 flex items-center">
                        <img
                          src={movie.image}
                          alt={movie.name}
                          className="w-10 h-10 rounded-full mr-4"
                        />
                        <span className="p-2 text-black text-[16px] font-medium">
                          {movie.name}
                        </span>
                      </td>
                      <td className="p-2 text-[#7B7B7B] text-[16px] font-normal">
                        {movie.genre}
                      </td>
                      <td className="p-2">
                        <div className="flex items-center justify-end">
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.30369 14.2005C2.30369 14.2005 2.2939 14.1906 2.289 14.1857C0.763816 12.558 0 10.6587 0 8.48518C0 7.39843 0.193402 6.37589 0.580206 5.42498C0.96701 4.4716 1.53742 3.60466 2.29145 2.82664C3.05526 2.06591 3.91211 1.48796 4.85953 1.09278C5.8094 0.697592 6.82293 0.5 7.90011 0.5C9.04583 0.5 10.1279 0.7297 11.1488 1.18663C12.1696 1.64356 13.0559 2.29068 13.805 3.12797C14.488 3.89117 15.0046 4.76304 15.3595 5.74112C15.411 5.88191 15.3032 6.0301 15.1539 6.0301H13.7952C13.7095 6.0301 13.6336 5.97823 13.5993 5.8992C13.2884 5.17305 12.8576 4.53334 12.3092 3.98009C11.7265 3.39225 11.0557 2.94026 10.2993 2.62164C9.54035 2.30303 8.74226 2.14495 7.90255 2.14495C6.74704 2.14495 5.69679 2.42405 4.74692 2.98225C3.79704 3.54045 3.04792 4.30364 2.49954 5.27184C1.95116 6.24004 1.67697 7.30951 1.67697 8.48518C1.67697 9.66085 1.95116 10.7328 2.49954 11.7059C3.04792 12.6791 3.79949 13.4447 4.75426 14.0103C5.70903 14.5735 6.75928 14.855 7.90255 14.855C8.74226 14.855 9.54035 14.697 10.2993 14.3784C11.0582 14.0597 11.729 13.6077 12.3092 13.0199C12.8576 12.4667 13.2884 11.8319 13.5993 11.1156C13.6336 11.0366 13.7095 10.9847 13.7952 10.9847H15.1539C15.3032 10.9847 15.4085 11.1329 15.3571 11.2737C15.0021 12.2444 14.4856 13.1088 13.805 13.872C13.0559 14.7093 12.1721 15.3564 11.1488 15.8134C10.1279 16.2703 9.04583 16.5 7.90011 16.5C5.77268 16.5 3.90721 15.7343 2.30124 14.2005H2.30369Z"
                              fill="#1A237E"
                            />
                            <path
                              d="M7.85456 12.7467C10.2803 12.7467 12.2467 10.7803 12.2467 8.35456C12.2467 5.92884 10.2803 3.9624 7.85456 3.9624C5.42884 3.9624 3.4624 5.92884 3.4624 8.35456C3.4624 10.7803 5.42884 12.7467 7.85456 12.7467Z"
                              fill="#FFCC00"
                            />
                          </svg>

                          <span className="p-2 text-[#606060] text-[20px] font-medium	">
                            {movie.rating}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full py-[30px]">
            <div className="flex justify-between items-center mb-3">
              <h3 className="title-sm font-semibold text-black md:max-w-[60%]">
                Check out motivating and uplifting videos and podcasts from our
                CNESS community
              </h3>
              <a href="" className="underline">
                See all
              </a>
            </div>
            <div className="container px-1 py-2">
              <table className="min-w-full bg-white overflow-hidden">
                <tbody>
                  {inspirationalMovies.map((movie, index) => (
                    <tr
                      key={movie.id}
                      className="border-b hover:bg-gray-50 text-left"
                    >
                      <td className="p-2 text-[#606060] text-[16px] font-semibold">
                        {index + 1}
                      </td>
                      <td className="p-2 flex items-center">
                        <img
                          src={movie.image}
                          alt={movie.name}
                          className="w-10 h-10 rounded-full mr-4"
                        />
                        <span className="p-2 text-black text-[16px] font-medium">
                          {movie.name}
                        </span>
                      </td>
                      <td className="p-2 text-[#7B7B7B] text-[16px] font-normal">
                        {movie.genre}
                      </td>
                      <td className="p-2">
                        <div className="flex items-center justify-end">
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.30369 14.2005C2.30369 14.2005 2.2939 14.1906 2.289 14.1857C0.763816 12.558 0 10.6587 0 8.48518C0 7.39843 0.193402 6.37589 0.580206 5.42498C0.96701 4.4716 1.53742 3.60466 2.29145 2.82664C3.05526 2.06591 3.91211 1.48796 4.85953 1.09278C5.8094 0.697592 6.82293 0.5 7.90011 0.5C9.04583 0.5 10.1279 0.7297 11.1488 1.18663C12.1696 1.64356 13.0559 2.29068 13.805 3.12797C14.488 3.89117 15.0046 4.76304 15.3595 5.74112C15.411 5.88191 15.3032 6.0301 15.1539 6.0301H13.7952C13.7095 6.0301 13.6336 5.97823 13.5993 5.8992C13.2884 5.17305 12.8576 4.53334 12.3092 3.98009C11.7265 3.39225 11.0557 2.94026 10.2993 2.62164C9.54035 2.30303 8.74226 2.14495 7.90255 2.14495C6.74704 2.14495 5.69679 2.42405 4.74692 2.98225C3.79704 3.54045 3.04792 4.30364 2.49954 5.27184C1.95116 6.24004 1.67697 7.30951 1.67697 8.48518C1.67697 9.66085 1.95116 10.7328 2.49954 11.7059C3.04792 12.6791 3.79949 13.4447 4.75426 14.0103C5.70903 14.5735 6.75928 14.855 7.90255 14.855C8.74226 14.855 9.54035 14.697 10.2993 14.3784C11.0582 14.0597 11.729 13.6077 12.3092 13.0199C12.8576 12.4667 13.2884 11.8319 13.5993 11.1156C13.6336 11.0366 13.7095 10.9847 13.7952 10.9847H15.1539C15.3032 10.9847 15.4085 11.1329 15.3571 11.2737C15.0021 12.2444 14.4856 13.1088 13.805 13.872C13.0559 14.7093 12.1721 15.3564 11.1488 15.8134C10.1279 16.2703 9.04583 16.5 7.90011 16.5C5.77268 16.5 3.90721 15.7343 2.30124 14.2005H2.30369Z"
                              fill="#1A237E"
                            />
                            <path
                              d="M7.85456 12.7467C10.2803 12.7467 12.2467 10.7803 12.2467 8.35456C12.2467 5.92884 10.2803 3.9624 7.85456 3.9624C5.42884 3.9624 3.4624 5.92884 3.4624 8.35456C3.4624 10.7803 5.42884 12.7467 7.85456 12.7467Z"
                              fill="#FFCC00"
                            />
                          </svg>

                          <span className="p-2 text-[#606060] text-[20px] font-medium	">
                            {movie.rating}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
            <div className="flex gap-[10px] flex-col bg-[#F6F6F6] p-4 rounded-lg shadow-md mt-5">
              <h3 className="text-[16px] text-nowrap text-black mb-6 font-semibold">
                Popular on CNESS
              </h3>
              <div className="w-full">
                <img
                  className="h-auto w-auto"
                  src="./images/nature.png"
                  alt="nature"
                />
                <h4 className="py-3 text-black text-[12px] font-semibold">
                  Discover the music that connects us to our planet and its
                  preservation.
                </h4>
                <p className="text-[#606060] text-[12px] font-normal">
                  September 1, 2023
                </p>
              </div>
              <div className="w-full">
                <img
                  className="h-auto w-auto"
                  src="./images/nature.png"
                  alt="nature"
                />
                <h4 className="py-3 text-black text-[12px] font-semibold">
                  Discover the music that connects us to our planet and its
                  preservation.
                </h4>
                <p className="text-[#606060] text-[12px] font-normal">
                  September 1, 2023
                </p>
              </div>
              <div className="flex items-center	justify-between">
                <div className="flex gap-[15px] items-center">
                  <span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2929 6.29297L7.58594 12L13.2929 17.707L14.7069 16.293L10.4139 12L14.7069 7.70697L13.2929 6.29297Z"
                          fill="#606060"
                        />
                      </svg>
                    </span>
                  </span>
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.707 17.707L16.414 12L10.707 6.29297L9.29297 7.70697L13.586 12L9.29297 16.293L10.707 17.707Z"
                        fill="#606060"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-[#606060] text-[12px] font-medium	">
                  More featured on CNESS
                </p>
              </div>
            </div>

            <div className="flex gap-[10px] flex-col bg-[#F6F6F6] p-4 rounded-lg shadow-md mt-5">
              <h3 className="text-[16px] text-nowrap text-black mb-1 font-semibold">
                Top Media Headlines
              </h3>
              <div className="flex gap-[12px] items-baseline">
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                      fill="#1A237E"
                    />
                  </svg>
                </span>
                <p className="text-[#000000] text-[16px] font-light	">
                  EcoGuardians’ Wins Award for Best Environmental Documentary
                </p>
              </div>
              <div className="flex gap-[12px] items-baseline">
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                      fill="#1A237E"
                    />
                  </svg>
                </span>
                <p className="text-[#000000] text-[16px] font-light	">
                  EcoGuardians’ Wins Award for Best Environmental Documentary
                </p>
              </div>
              <div className="flex gap-[12px] items-baseline">
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.414 11.414L7.121 5.707L1.414 0L0 1.414L4.293 5.707L0 10L1.414 11.414Z"
                      fill="#1A237E"
                    />
                  </svg>
                </span>
                <p className="text-[#000000] text-[16px] font-light	">
                  EcoGuardians’ Wins Award for Best Environmental Documentary
                </p>
              </div>
              <div className="flex items-center	justify-between">
                <div className="flex gap-[15px] items-center">
                  <span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.2929 6.29297L7.58594 12L13.2929 17.707L14.7069 16.293L10.4139 12L14.7069 7.70697L13.2929 6.29297Z"
                          fill="#606060"
                        />
                      </svg>
                    </span>
                  </span>
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.707 17.707L16.414 12L10.707 6.29297L9.29297 7.70697L13.586 12L9.29297 16.293L10.707 17.707Z"
                        fill="#606060"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-[#606060] text-[12px] font-medium	">
                  More Top Headlines
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
