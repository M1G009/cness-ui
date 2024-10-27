import React, { useState } from 'react'
import CustomVideoPlayer from '../components/ui/CustomVideoPlayer';
import CategoryIcon from '../components/ui/CategoryIcon';
import CreaterCard from '../components/ui/CreatorCard';
import CreaterCategoriesCard from '../components/ui/CreatorCategoriesCard';
import CnessFamilyCard from '../components/ui/CnessFamilyCard';
import EcoSystemCard from '../components/ui/EcoSystemCard';
import RatingIcon from '../utills/Icon/RatingIcon';

const Trending = () => {
    const categories = [

        { name: "Consciousness", image: './images/award.png' },
        { name: "Music", image: './images/award.png' },
        { name: "Music", image: './images/award.png' },
        { name: "Music", image: './images/award.png' },
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
    const [activeTab, setActiveTab] = useState('About');

    const tabs = ['About', 'Consciousness', 'Social'];
    const content = {
        About: `Barbara Atkins Meyers is a distinctive presence in Westchester’s legal landscape, expertly wielding contracts and trademarks for A-list artists and authors while simultaneously dedicating herself to empowering at-risk girls through a nonprofit mentorship program. This dual commitment exemplifies her belief that professional success and social impact can go hand in hand.
    
In her legal practice, Barbara navigates the complexities of intellectual property law, ensuring that her high-profile clients' creative works are protected and their rights upheld. She thrives in a fast-paced environment, negotiating deals and providing strategic advice to some of the most recognized names in the industry.
    
However, her work doesn’t stop there. Barbara is deeply passionate about giving back to her community. Through her nonprofit, she mentors young girls, providing them with guidance, resources, and the confidence to pursue their own ambitions. She believes that by uplifting underserved voices, she can help shape a more equitable future.
    
Reflecting on her journey, Barbara emphasizes the importance of aligning one’s career with a personal mission. Her advice for those seeking to blend success with significance is...`,
        Consciousness: "Consciousness content goes here.",
        Social: "Social content goes here."
    };
    return (
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
                <button className="flex items-center justify-center mt-5 w-full rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 px-3 py-2 ">
                    <span className='text-base text-nowrap font-medium   text-black'>Start Sharing</span>

                </button>
            </div>
            <div className="w-full md:w-2/4  px-2">
                <div className="w-full bg-[#1A237E] rounded-xl  p-5">
                    <h2 className="text-white text-2xl font-semibold pb-3">
                        Meet one of our top rated CNESS Professionals
                    </h2>
                    <div className="flex gap-5 items-center">
                        <div className="w-1/2">
                            <img
                                className="h-auto w-auto"
                                src="./images/rated.png"
                                alt="rated.png"
                            />
                        </div>

                        <div className="w-1/2">
                            <div className='bg-[#FFCC00] rounded-lg p-2 '>
                                <h2 className="text-black text-base font-semibold px-1">
                                    Barbara Atkins Meyers
                                </h2>
                                <p className="text-black font-normal text-sm px-1">
                                    Lawyer
                                </p>
                            </div>

                            <p className="text-[#CCCCCC] font-normal text-xs py-2">
                                Barbara Atkins Meyers is that rare Westchester lawyer who
                                wields contracts and trademarks for A-list artists and authors
                                while empowering at-risk girls through a nonprofit mentorship
                                program. Though their worlds contrast, she beams about
                                integrating ambitious career pursuits with uplifting others.
                                Her advice for those seeking to marry success with
                                significance? "Keep sight of the change you most want to see.
                                Find where your professional path intersects with that vision
                                to lift underserved voices.
                            </p>


                            <div className="bg-white rounded py-2 px-4 flex gap-3 items-center w-fit">
                                <RatingIcon />
                                <h2 className="text-black text-base font-medium ">
                                    3{" "}
                                    <span className="text-[#1A237E] text-xs font-semibold">
                                        (Approved)
                                    </span>
                                </h2>
                            </div>
                            <p className="text-white font-semibold text-sm py-2">
                                Skilled in
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <button className="text-xs font-normal text-[#646464] bg-[#F8F7F7] rounded py-[6px] px-3">
                                    User Experience
                                </button>
                                <button className="text-xs font-normal text-[#646464] bg-[#F8F7F7] rounded py-[6px] px-3">
                                    Singing
                                </button>
                                <button className="text-xs font-normal text-[#646464] bg-[#F8F7F7] rounded py-[6px] px-3">
                                    Drawing
                                </button>
                                <button className="text-xs font-normal text-[#646464] bg-[#F8F7F7] rounded py-[6px] px-3">
                                    Agile Thinking
                                </button>
                                <button className="text-xs font-normal text-[#646464] bg-[#F8F7F7] rounded py-[6px] px-3">
                                    Cooking
                                </button>
                            </div>
                           
                        </div>

                    </div>

                    <div className="p-4 max-w-3xl mx-auto">
                     
                        <div className="flex justify-between mb-4">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 mx-2 py-2 font-semibold rounded-full ${activeTab === tab
                                        ? 'bg-yellow-400 text-black'
                                        : 'bg-gray-200 text-gray-600'
                                        } flex-1 text-center`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md max-h-56 overflow-y-auto">
                            <p className="text-gray-700 whitespace-pre-line line-clamp-10">
                                {content[activeTab]}
                            </p>
                        </div>
                        <button className="mt-[15px] border-[2px] bg-[#FFCC00] text-sm font-normal text-[#1A237E] rounded-full py-[6px] px-8">
                                Connect
                            </button>
                    </div>

                  
                </div>
                <div className="w-full py-[30px]">
                    <h2 className="text-black font-semibold text-base pb-2">
                        Find a CNESS certified provider
                    </h2>
                    <div className="md:flex gap-[12px] items-center bg-[#F6F6F6] p-4 rounded-full">
                        <button className="w-full rounded-full py-[10px] text-[#606060] font-normal text-sm bg-[#FFFFFF] border border-[#EAEAEA] shadow-lg">
                            Services
                        </button>
                        <button className="w-full rounded-full py-[10px] text-[#606060] font-normal text-sm bg-[#FFFFFF] border border-[#EAEAEA] shadow-lg">
                            Location
                        </button>
                    </div>
                </div>


                <div className="mt-10">
                    <div className="flex flex-row justify-between py-3 px-2">
                        <p className="text-sm font-semibold">Help to Build You Build Your Dreams</p>
                        <a href="" className="underline text-sm" >View All</a>
                    </div>
                    <div className=" flex mt-2 ">

                        <CreaterCategoriesCard imageSrc="./images/test-story-image.png"
                            title="How to create work that brings meaning."
                            categories="Digital Music Compilation"
                            fieldname="Ebook"
                            profileImage="./images/test-full-width.png"
                        />

                        <CreaterCategoriesCard imageSrc="./images/test-story-image.png"
                            title="How to create work that brings meaning."
                            categories="Digital Music Compilation"
                            fieldname="Ebook"
                            profileImage="./images/test-full-width.png"
                        />

                        <CreaterCategoriesCard imageSrc="./images/test-story-image.png"
                            title="How to create work that brings meaning."
                            categories="Digital Music Compilation"
                            fieldname="Ebook"
                            profileImage="./images/test-full-width.png"
                        />

                        <CreaterCategoriesCard imageSrc="./images/test-story-image.png"
                            title="How to create work that brings meaning."
                            categories="Digital Music Compilation"
                            fieldname="Ebook"
                            profileImage="./images/test-full-width.png"
                        />


                    </div>
                </div>
                <div
                    className="relative w-full py-5 px-3 my-7 bg-cover bg-center flex items-center justify-center overflow-hidden rounded-lg"
                    style={{
                        backgroundImage: "url('./images/test-full-width.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="w-full z-10 flex items-center justify-between">
                        <h2 className="text-xs font-semibold text-white w-6/12">Didn’t find what you were looking for? Submit your entry and start your conversing!</h2>
                        <button className="px-6 py-2 bg-yellow-500 rounded-full font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600">
                            Create a topic
                        </button>
                    </div>
                </div>

                <div className="mt-10">
                    <CnessFamilyCard />
                </div>
                <div className="mt-10">
                    <div >
                        <p className="text-sm font-semibold">Build your team of people you trust for your ecosystem</p>

                    </div>
                    <EcoSystemCard />
                </div>
                <div className="relative w-full py-5  px-3 my-7 bg-cover bg-center flex items-center justify-center overflow-hidden rounded-lg"
                    style={{
                        backgroundImage: "url('./images/test-full-width.png')",
                    }}
                >
                    {/* Overlay for better text visibility (optional) */}
                    <div className="absolute inset-0 bg-[#1A237E] "></div>

                    {/* Content inside the div */}
                    <div className="w-full z-10 flex items-center justify-between p-3">
                        <h2 className="text-xs font-semibold text-white w-6/12">Feeling inspired? Start documenting your own journey and share your progress with our supportive community eager to cheer you on.</h2>
                        <button className="flex items-center  justify-between  rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 px-1 py-1 ">
                            <span className='text-base text-nowrap font-medium justify-center px-4 text-black'>Start Building</span>
                            <div className="ml-4 rounded-full bg-[#1A237E] p-2">
                                <svg width="16" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z" fill="white" />
                                </svg>

                            </div>
                        </button>
                    </div>

                </div>

            </div>



            <div className="w-full md:w-1/4">
                <div className="flex flex-col">

                    <div className="flex flex-col ">
                        <div className="flex flex-col  bg-[#f6f6f6] rounded-lg p-3">
                            <div className="flex flex-row justify-between items-center mb-5">
                                <h2 className="size-4 text-nowrap text-[#1A237E]">CNESS Recommends for you</h2>

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

                </div>

            </div>
        </div>
    )
}

export default Trending