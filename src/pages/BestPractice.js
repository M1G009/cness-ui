import React, { useState } from "react";
import StoryCard from "../components/ui/StoryCard";
import SocialPostCart from "../components/ui/PostCard";
import CustomVideoPlayer from "../components/ui/CustomVideoPlayer";
import CategoryIcon from "../components/ui/CategoryIcon";
import { FaSearch } from "react-icons/fa";
import SliderBlogCard from "../components/ui/SliderBlogCard";
import TopicBlogCard from "../components/ui/TopicBlogCard";

const categories = [
       
  { name: "Consciousness" ,image:'./images/award.png'},
  { name: "Music" ,image:'./images/award.png'},
  { name: "Music" ,image:'./images/award.png'},
  { name: "Music" ,image:'./images/award.png'},
]
const users = [
  { name: 'Suresh Rajan', image: './images/demoimage.png', online: true },
  { name: 'Mia Rodriguez', image: './images/demoimage.png', online: true },
  { name: 'Vijay Kumar', image: '', online: true },
  { name: 'Jacob Harris', image: './images/demoimage.png', online: false },
  { name: 'Divya Prakash', image: './images/demoimage.png', online: false },
];
const myconnections = [
  { name: 'Michael Brown', image: './images/demoimage.png', online: true },
  { name: 'Anand Joshi', image: './images/demoimage.png', online: true },
  { name: 'Deepa Srinivasan', image: '', online: true },
  { name: 'Prasad Varma', image: './images/demoimage.png', online: false },
  { name: 'Jenn Ortega', image: './images/demoimage.png', online: false },
];
const topContributor = [
  { name: 'Michael Brown', image: './images/demoimage.png', award: './images/award.png', points: '195' },
  { name: 'Anand Joshi', image: './images/demoimage.png', award: './images/award.png', points: '195' },
  { name: 'Deepa Srinivasan', image: '', award: './images/award.png', points: '195' },
  { name: 'Prasad Varma', image: './images/demoimage.png', award: './images/award.png', points: '195' },
  { name: 'Jenn Ortega', image: './images/demoimage.png', award: './images/award.png', points: '195' },
];
const items = [
  { id: 1, image: '/images/demoimage.png', title: 'IT', name: 'John Doe' },
  { id: 2, image: '/images/demoimage.png', title: 'Arts & Culture', name: 'Jane Smith' },
  { id: 3, image: '/images/demoimage.png', title: 'Agriculture', name: 'Bob Johnson' },
  { id: 4, image: '/images/demoimage.png', title: 'IT', name: 'Alice Davis' },
  { id: 5, image: '/images/demoimage.png', title: 'Food & Health', name: 'Charlie Brown' },
];

export default function BestPractice() {

  const [postContent, setPostContent] = useState('');

  const handleInputChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleCreatePost = () => {
    // Logic to create a post
    console.log('Post created:', postContent);
  };

  const handleCancel = () => {
    setPostContent('');
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-4 p-4">
        <div className="w-full md:w-1/4">
          <div className="flex flex-col  bg-[#F6F6F6] p-4 rounded-md shadow-md">
            <div className="flex flex-row justify-between items-center mb-5">
              <h2 className="size-4 text-nowrap text-[#1A237E]">My CNESS</h2>
              <img className="h-auto w-auto" src="./images/menu.png" alt="menu" />
            </div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <img className="h-auto w-auto" src="./images/connection.png" alt="Connections" />
                <span className="ml-2 text-black px-2">Connections</span>
              </li>
              <li className="flex items-center">
                <img className="h-auto w-auto" src="./images/media.png" alt="Media" />
                <span className="ml-2 text-black px-2">Media</span>
              </li>
              <li className="flex items-center">
                <img className="h-auto w-auto" src="./images/conciousjuorney.png" alt="Conscious Journey" />
                <span className="ml-2 text-black px-2">Conscious Journey</span>
              </li>
              <li className="flex items-center">
                <img className="h-auto w-auto" src="./images/dreamproject.png" alt="Dream Projects" />
                <span className="ml-2 text-black px-2">Dream Projects</span>
              </li>
              <li className="flex items-center">
                <img className="h-auto w-auto" src="./images/conciousshopping.png" alt="Conscious Shopping" />
                <span className="ml-2 text-black px-2">Conscious Shopping</span>
              </li>
              <li className="flex items-center">
                <img className="h-auto w-auto" src="./images/conciousserviceprovider.png" alt="Conscious Service Providers" />
                <span className="ml-2 text-black px-2">Conscious Service Providers</span>
              </li>
            </ul>
          </div>
          <button
            className=" mt-5 px-6 w-full py-3 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          >
            Contribute
          </button>
        </div>

        <div className="w-full md:w-2/4  px-4">
          <div className="bg-gray-100 flex items-end justify-center relative overflow-hidden rounded-[15px]">
            <CustomVideoPlayer videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
            <div className=" px-4 pb-8 flex items-center justify-center absolute">
              <div className="flex flex-row justify-between px-2 ">
                <div className=' '>
                  <h1 className=" text-base text-wrap text-white">Join the first Conscious Social Media Super App and Move the World</h1>

                  <p className="text-white text-sm my-2 ">
                    Share your opinions and crafts with the world!
                  </p>
                </div>
              </div>

              <button className="flex items-center  justify-center bg-yellow-400 rounded-full px-3 py-2 ">
                <span className='text-xs text-nowrap font-500 text-black'>Post your Inspirations!</span>
                <div className="ml-4 rounded-full bg-[#1A237E] p-2">
                  <svg width="16" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z" fill="white" />
                  </svg>

                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center flex-wrap h-scree p-5">
            {
              categories.map((el => {
                return <CategoryIcon iconSrc={el.image} iconName={el.name} />
              }))
            }
          </div>

          <div>
            <h2 className="text-2xl font-semibold leading-9 mb-6">
              What can we help you find?
            </h2>
            <div className="flex flex-col items-center">
              <div className="relative w-full bg-[#F6F6F6] rounded-lg">
                {/* Post Button */}
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />

                <input
                  type="text"
                  placeholder="Search topic or category of your choice "
                  className="w-full rounded-lg px-5 bg-[#F6F6F6] py-3 pl-10 pr-16  focus:outline-none bg-transparent border-0"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-between items-center ">
              <h3 className="text-xl font-semibold leading-9">
                Trending solutions on CNESS
              </h3>
            </div>
            <div>

              <div className=" p-3  rounded-md">
                <div className="flex flex-row items-start justify-start gap-2 mx-1 ">

                  <div className=" rounded-t-lg bg-[#FFCC00] p-2">
                    <p className="font-medium text-xs text-[#1A237E]">Manufacturing</p>

                  </div>
                  <div className="  p-2">
                    <p className="font-medium text-xs text-[#1A237E]">AI</p>

                  </div>
                  <div className="  p-2">
                    <p className="font-medium text-xs text-[#1A237E]">Consciouness</p>

                  </div>
                  <div className="  p-2">
                    <p className="font-medium text-xs text-[#1A237E]">Media</p>

                  </div>


                </div>
                <div className="flex bg-[#F6F6F6] p-4 rounded-md">
                  <div className="flex px-1">
                    <SliderBlogCard imageSrc="./images/test-story-image.png"
                      title="Sample Blog Post"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit amet at elit." />
                  </div>
                  <div className="flex px-1">
                    <SliderBlogCard imageSrc="./images/test-story-image.png"
                      title="Sample Blog Post"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit amet at elit." />
                  </div>
                  <div className="flex px-1">
                    <SliderBlogCard imageSrc="./images/test-story-image.png"
                      title="Sample Blog Post"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit amet at elit." />
                  </div>

                </div>


              </div>

            </div>

          </div>

          <div>
            <div className="bg-[#F6F6F6] p-4 mt-12">
              <img className="rounded-[10px] w-full" src="./images/test-full-width.png" />
              <div className="flex flex-wrap w-full mt-3">
                <div className="w-full md:w-5/12 p-4">
                  <span className="text-xs font-semibold text-[#1A237E]">Topic of the day</span>
                  <h2 className="text-3xl font-semibold">Healing South Indian Rivers With Local Plants and Species </h2>
                </div>
                <div className="w-full md:w-7/12 p-4">
                  <p className="text-xs font-normal">Our rivers from Kerala to Karnataka are choking with toxins, threatening local ecosystems and health. Thankfully, many natural water purifiers exist in southern India's bountiful nature!
                    Floating water hyacinths absorb heavy metals amazingly. Lush patches of these pretty purple flowers efficiently filter fertilizer runoff too. Kerala’s ancient phytoremediation ponds use these and other diverse native species like antenna fern and butterfly orchids to cleanse polluted waters.
                    We must push authorities via grassroots collectives like WWF-India and SANDRP to implement and scale such localized, nature-based solutions across villages in Karnataka, Telangana, and Andhra Pradesh, which have seen catastrophic declines in freshwater quality.
                    I hope more passionate youth take up this cause across southern India, so our grandchildren can again swim fearlessly in clear waters under starlit skies!</p>
                </div>
              </div>
              <div className="flex flex-wrap w-full mt-2 justify-between items-center">
                <span className="text-xs text-[#606060] font-normal">Dr. Anjali Sureshkumar</span>
                <span className="text-xs font-medium">600 contributors</span>
                <button className="px-6 py-2 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                  Contribute
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold leading-9">
                Top Topics for the day
              </h3>
            </div>
            <div className="flex flex-wrap w-full">
              <TopicBlogCard userIcon="./images/user.png"
                title="Sample Blog Post"
                userName="Karthik Chandra"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit amet at elit." />
              <TopicBlogCard userIcon="./images/user.png"
                title="Sample Blog Post"
                userName="Karthik Chandra"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit amet at elit." />
              <TopicBlogCard userIcon="./images/user.png"
                title="Sample Blog Post"
                userName="Karthik Chandra"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit amet at elit." />
              <TopicBlogCard userIcon="./images/user.png"
                title="Sample Blog Post"
                userName="Karthik Chandra"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit amet at elit." />
            </div>
            <div
              className="relative w-full py-5 px-3 my-7 bg-cover bg-center flex items-center justify-center overflow-hidden rounded-lg"
              style={{
                backgroundImage: "url('./images/test-full-width.png')",
              }}
            >
              {/* Overlay for better text visibility (optional) */}
              <div className="absolute inset-0 bg-black opacity-40"></div>

              {/* Content inside the div */}
              <div className="w-full z-10 flex items-center justify-between">
                <h2 className="text-xs font-semibold text-white w-6/12">Didn’t find what you were looking for? Submit your entry and start your conversing!</h2>
                <button className="px-6 py-2 bg-yellow-500 rounded-full font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                  Create a topic
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold leading-9">
                Trending on Best practices
              </h3>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-sm font-semibold">Top Contributors</p>
              <a href="" className="underline" >View all</a>
            </div>
            <div className="container  px-1 py-2">

              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center w-full justify-between">
                    <div className="flex items-center ">
                      <div className="text-sm font-medium flex pr-3">{item.id}</div>
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                        <img src={item.image} alt='' className="w-full h-full object-cover" />
                      </div>
                      <div className="text-lg font-medium">{item.name}</div>
                    </div>
                    <div >
                      <div className="text-lg font-medium">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="mt-10">
            <div className="flex flex-row justify-between">
              <p className="text-sm font-semibold">Top Topics of the week</p>
              <a href="" className="underline" >View all</a>
            </div>
            <div className=" flex mt-2 ">
              <div className="flex flex-col items-center justify-center px-2  ">
                <div className="w-full">
                  <img
                    src="./images/test-full-width.png"
                    alt="Woman painting outdoors"
                    className="w-full"
                  />
                </div>
                <div className="w-full mt-5 ">
                  <div className="flex items-center justify-between mb-4">
                    <p className=" text-xs font-medium">Certified Green Business</p>
                    <img
                      src="./images/test-full-width.png"
                      alt="Certified Green Business"
                      className="h-10 w-10 ml-2"
                    />

                  </div>
                  <p className=" mb-2 text-xs text-[#606060]">Contributed: 578</p>
                  <p className="text-xs text-[#606060]">
                    Sustainable Art Practices: How to Use Eco-Friendly Materials for Artistic Creation
                  </p>

                </div>
              </div>
              <div className="flex flex-col items-center justify-center px-2  ">
                <div className="w-full">
                  <img
                    src="./images/test-full-width.png"
                    alt="Woman painting outdoors"
                    className="w-full"
                  />
                </div>
                <div className="w-full mt-5 ">
                  <div className="flex items-center justify-between mb-4">
                    <p className=" text-xs font-medium">Certified Green Business</p>
                    <img
                      src="./images/test-full-width.png"
                      alt="Certified Green Business"
                      className="h-10 w-10 ml-2"
                    />

                  </div>
                  <p className=" mb-2 text-xs text-[#606060]">Contributed: 578</p>
                  <p className="text-xs text-[#606060]">
                    Sustainable Art Practices: How to Use Eco-Friendly Materials for Artistic Creation
                  </p>

                </div>
              </div>
              <div className="flex flex-col items-center justify-center px-2  ">
                <div className="w-full">
                  <img
                    src="./images/test-full-width.png"
                    alt="Woman painting outdoors"
                    className="w-full"
                  />
                </div>
                <div className="w-full mt-5 ">
                  <div className="flex items-center justify-between mb-4">
                    <p className="  text-xs font-medium">Certified Green Business</p>
                    <img
                      src="./images/test-full-width.png"
                      alt="Certified Green Business"
                      className="h-10 w-10 ml-2"
                    />

                  </div>
                  <p className=" mb-2 text-xs text-[#606060]">Contributed: 578</p>
                  <p className="text-xs text-[#606060]">
                    Sustainable Art Practices: How to Use Eco-Friendly Materials for Artistic Creation
                  </p>

                </div>
              </div>
              <div className="flex flex-col items-center justify-center px-2  ">
                <div className="w-full">
                  <img
                    src="./images/test-full-width.png"
                    alt="Woman painting outdoors"
                    className="w-full"
                  />
                </div>
                <div className="w-full mt-5 ">
                  <div className="flex items-center justify-between mb-4">
                    <p className=" text-xs font-medium">Certified Green Business</p>
                    <img
                      src="./images/test-full-width.png"
                      alt="Certified Green Business"
                      className="h-10 w-10 ml-2"
                    />

                  </div>
                  <p className=" mb-2 text-xs text-[#606060]">Contributed: 578</p>
                  <p className="text-xs text-[#606060]">
                    Sustainable Art Practices: How to Use Eco-Friendly Materials for Artistic Creation
                  </p>

                </div>
              </div>
            </div>

          </div>


        </div>

        {/* Third Part (1/3 width on medium screens and above) */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-col">
            {/* First Section */}
            <div className="flex flex-row items-start justify-start gap-2  ">

              <div className=" rounded-t-lg bg-[#f6f6f6] p-2">
                <p className="font-medium text-xs text-[#1A237E]">IT services</p>

              </div>
              <div className="  p-2">
                <p className="font-medium text-xs text-[#1A237E]">AI</p>

              </div>
              <div className="  p-2">
                <p className="font-medium text-xs text-[#1A237E]">Consciouness</p>

              </div>
              <div className="  p-2">
                <p className="font-medium text-xs text-[#1A237E]">Media</p>

              </div>


            </div>

            <p className="text-sm font-semibold py-3">Trending in IT services</p>
            <div className="flex flex-col ">
              <div className="flex flex-row items-start justify-start gap-2  ">

                <div className=" rounded-t-lg bg-[#f6f6f6] p-2">
                  <p className="font-medium text-xs text-[#1A237E]">This Week</p>

                </div>
                <div className="  p-2">
                  <p className="font-medium text-xs text-[#1A237E]">This Time</p>

                </div>
                <div className="  p-2">
                  <p className="font-medium text-xs text-[#1A237E]">All Time</p>

                </div>



              </div>

              <div className="flex flex-col  bg-[#f6f6f6] p-3">
                <div className="flex flex-row justify-between items-center mb-5">
                  <h2 className="size-4 text-nowrap text-[#1A237E]">Top Contributors</h2>
                  <img className="h-auto w-auto" src="./images/menu.png" alt="menu" />
                </div>

                <ul className="space-y-4 mb-4">
                  {topContributor.map((user, index) => (
                    <li key={index} className="flex items-center justify-between ">
                      <div className="flex flex-row">
                        {user.image ? (
                          <img className="w-8 h-8 rounded-full mr-3" src={user.image} alt={user.name} />
                        ) : (
                          <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                            <span className="text-black px-2">{user.name.charAt(0)}</span>
                          </div>
                        )}
                        <span className="text-black size-4 text-nowrap">{user.name}</span>

                      </div >

                      <div className="flex flex-row ">
                        <img className="w-4 h-4 rounded-full mr-3" src={user.award} alt={""} />
                        <span className="text-black text-sm text-nowrap">{user.points}</span>

                      </div>

                    </li>
                  ))}
                </ul>
                <div className="flex ">
                  <a href="#see-all" className="text-nowrap text-[#1A237E] text-xs ">
                    Refresh
                  </a>
                </div>

              </div>
            </div>

            {/*  */}

            <div className="flex flex-col items-center bg-[#f6f6f6] rounded-md justify-center mt-5 p-2  ">

              <div>


                <div className="w-full">
                  <img
                    src="./images/test-full-width.png"
                    alt="Woman painting outdoors"
                    className="w-full"
                  />
                </div>
                <div className="w-full ">
                  <p className=" text-sm font-medium py-2">Certified Green Business</p>
                  <div className="flex items-center justify-around py-1">
                    <p className=" text-sm text-[#606060] font-medium">14.02.24</p>
                    <p className=" text-sm text-[#606060] font-medium">24 contributors</p>
                    <div className="flex fltext-[#606060] ex-row ">
                      <img className="w-4 h-4 rounded-full mr-1" src='./images/award.png' alt={""} />
                      <span className="text-[#606060] text-sm text-nowrap">195</span>

                    </div>
                  </div>


                </div>
              </div>

              <div className="mt-5">


                <div className="w-full">
                  <img
                    src="./images/test-full-width.png"
                    alt="Woman painting outdoors"
                    className="w-full"
                  />
                </div>
                <div className="w-full  ">
                  <p className=" text-sm font-medium py-2">Certified Green Business</p>
                  <div className="flex items-center justify-around py-1">
                    <p className=" text-sm text-[#606060] font-medium">14.02.24</p>
                    <p className=" text-sm text-[#606060] font-medium">24 contributors</p>
                    <div className="flex fltext-[#606060] ex-row ">
                      <img className="w-4 h-4 rounded-full mr-1" src='./images/award.png' alt={""} />
                      <span className="text-[#606060] text-sm text-nowrap">195</span>

                    </div>
                  </div>


                </div>
              </div>
              <div className="mt-5">


<div className="w-full">
  <img
    src="./images/test-full-width.png"
    alt="Woman painting outdoors"
    className="w-full"
  />
</div>
<div className="w-full  ">
  <p className=" text-sm font-medium py-2">Certified Green Business</p>
  <div className="flex items-center justify-around py-1">
    <p className=" text-sm text-[#606060] font-medium">14.02.24</p>
    <p className=" text-sm text-[#606060] font-medium">24 contributors</p>
    <div className="flex fltext-[#606060] ex-row ">
      <img className="w-4 h-4 rounded-full mr-1" src='./images/award.png' alt={""} />
      <span className="text-[#606060] text-sm text-nowrap">195</span>

    </div>
  </div>


</div>
</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
