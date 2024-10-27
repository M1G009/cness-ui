import React from 'react'
import CustomVideoPlayer from '../components/ui/CustomVideoPlayer';
import CategoryIcon from '../components/ui/CategoryIcon';
import CreaterCard from '../components/ui/CreatorCard';
import CreaterCategoriesCard from '../components/ui/CreatorCategoriesCard';

const MarketPlace = () => {
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
                <div className="bg-gray-100 flex items-end justify-center relative overflow-hidden rounded-[15px]">
                    <CustomVideoPlayer videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
                    <div className=" px-4 pb-8 flex items-center justify-center absolute">
                        <div className="flex flex-row justify-between px-2 ">
                            <div className=' '>
                                <h1 className=" text-xs text-wrap text-white">Monetize Your Purpose and Passions for Good</h1>

                                <p className="text-white text-[10px] my-2 ">
                                    Step into the heart of conscious creation with CNESS Marketplace - a vibrant hub where your digital products come to life. Whether you're a creator or seeker, explore a marketplace designed for you. Share your digital gems, from books and music to courses, and earn a livelihood.
                                </p>
                            </div>
                        </div>

                        <button className="flex items-center  justify-center bg-yellow-400 rounded-full px-3 py-1 ">
                            <span className='text-xs text-nowrap font-500 text-black'>Start Sharing</span>
                            <div className="ml-4 rounded-full bg-[#1A237E] p-2  ">
                                <svg width="16" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z" fill="white" />
                                </svg>

                            </div>
                        </button>
                    </div>
                </div>

                <div className="flex justify-center items-center flex-wrap h-scree mt-5">
                    {
                        categories.map((el => {
                            return <CategoryIcon iconSrc={el.image} iconName={el.name} />
                        }))
                    }
                </div>
                <div className="mt-10">
                    <div className="flex flex-row justify-between py-3 px-2">
                        <p className="text-sm font-semibold">Featured Content from our CNESS Creators</p>
                        <a href="" className="underline text-sm" >View All</a>
                    </div>
                    <div className=" flex mt-2 ">

                        <CreaterCard imageSrc="./images/test-story-image.png"
                            title="How to create work that brings meaning."
                            name="Jonas Sørensen, Oslo"
                            fieldname="Ebook"
                            profileImage="./images/test-full-width.png"
                        />

                        <CreaterCard imageSrc="./images/test-story-image.png"
                            title="How to create work that brings meaning."
                            name="Jonas Sørensen, Oslo"
                            fieldname="Ebook"
                            profileImage="./images/test-full-width.png"
                        />

                        <CreaterCard imageSrc="./images/test-story-image.png"
                            title="How to create work that brings meaning."
                            name="Jonas Sørensen, Oslo"
                            fieldname="Ebook"
                            profileImage="./images/test-full-width.png"
                        />

                        <CreaterCard imageSrc="./images/test-story-image.png"
                            title="How to create work that brings meaning."
                            name="Jonas Sørensen, Oslo"
                            fieldname="Ebook"
                            profileImage="./images/test-full-width.png"
                        />


                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex flex-row justify-between py-3 px-2">
                        <p className="text-sm font-semibold">Popular with your Friends</p>
                        <a href="" className="underline text-sm" >View All</a>
                    </div>
                    <div className=" flex mt-2 ">

                        <CreaterCard imageSrc="./images/test-story-image.png"
                            title="How to create work that brings meaning."
                            name="Jonas Sørensen, Oslo"
                            fieldname="Ebook"
                            profileImage="./images/test-full-width.png"
                        />

                        <CreaterCard imageSrc="./images/test-story-image.png"
                            title="How to create work that brings meaning."
                            name="Jonas Sørensen, Oslo"
                            fieldname="Ebook"
                            profileImage="./images/test-full-width.png"
                        />

                        <CreaterCard imageSrc="./images/test-story-image.png"
                            title="How to create work that brings meaning."
                            name="Jonas Sørensen, Oslo"
                            fieldname="Ebook"
                            profileImage="./images/test-full-width.png"
                        />

                        <CreaterCard imageSrc="./images/test-story-image.png"
                            title="How to create work that brings meaning."
                            name="Jonas Sørensen, Oslo"
                            fieldname="Ebook"
                            profileImage="./images/test-full-width.png"
                        />


                    </div>
                </div>

                <div className="flex mt-10 flex-wrap h-scree bg-[#ABD9FF] rounded-lg p-5">

                    <div className="flex flex-wrap w-full ">

                        <div className="w-full md:w-5/12 p-2">
                            <img className="w-8 h-8 rounded-full mr-3" src="./images/giftbag.png" alt="" />
                            <h2 className="text-sm text-[#1A237E] font-semibold">Share with Purpose, Support with Heart</h2>
                            <p className="text-[10px] text-[#1A237E]  py-2 font-normal">Every product shared on CNESS can be a beacon of change. When you list your digital products with us, you’re not just earning - you can choose to contribute a portion of your proceeds to a cause close to your heart. Here, commerce meets compassion, allowing you to support NGOs and initiatives that make a difference in the world.</p>
                            <button className="flex items-center  justify-between mt-5  rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 px-2 py-1 ">
                                <span className='text-xs text-nowrap font-medium justify-center px-1 text-black'>Start Sharing</span>
                                <div className="ml-4 rounded-full bg-[#1A237E] p-2">
                                    <svg width="12" height="12" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z" fill="white" />
                                    </svg>

                                </div>
                            </button>
                        </div>
                        <div className="w-full md:w-7/12 ">
                            <img className="rounded-[10px] w-full h-full" src="./images/test-full-width.png" />

                        </div>
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

                <div className="mt-10">
                    <div className="flex flex-row justify-between py-3 px-2">
                        <p className="text-sm font-semibold">New from your favourite creators</p>
                        <a href="" className="underline text-sm" >View All</a>
                    </div>
                    <div className=" flex mt-2 ">
                        <div className="max-w-sm overflow-hidden m-1 w-1/2">
                            <img className="rounded-[10px] w-full h-36 object-cover" src="./images/test-story-image.png" alt="" />

                            <div className='mt-4'>
                                <h2 className="text-xs font-semibold">Be a Kid Again</h2>
                                <p className="text-[10px] text-gray-600 py-1  text-wrap">Noah Lewis</p>
                                <button
                                    className=" mt-3 px-1  py-1 rounded-full flex justify-center bg-[#F6F6F6] font-medium "
                                >
                                    <img
                                        src='./images/cart.png'
                                        alt='cart'
                                        className="w-6 h-6 p-1 mx-2"
                                    />
                                    <p className="text-[10px] text-gray-600 p-2  text-wrap">EBook</p>
                                </button>

                            </div>
                        </div>

                        <div className="max-w-sm overflow-hidden m-1 w-1/2">
                            <img className="rounded-[10px] w-full h-36 object-cover" src="./images/test-story-image.png" alt="" />

                            <div className='mt-4'>
                                <h2 className="text-xs font-semibold">Be a Kid Again</h2>
                                <p className="text-[10px] text-gray-600 py-1  text-wrap">Noah Lewis</p>
                                <button
                                    className=" mt-3 px-1  py-1 rounded-full flex justify-center bg-[#F6F6F6] font-medium "
                                >
                                    <img
                                        src='./images/cart.png'
                                        alt='cart'
                                        className="w-6 h-6 p-1 mx-2"
                                    />
                                    <p className="text-[10px] text-gray-600 p-2  text-wrap">EBook</p>
                                </button>

                            </div>
                        </div>


                    </div>
                </div>
                <div className="relative w-full py-5  px-3 my-7 bg-cover bg-center flex items-center justify-center overflow-hidden rounded-lg"
                    style={{
                        backgroundImage: "url('./images/test-full-width.png')",
                    }}
                >
                    {/* Overlay for better text visibility (optional) */}


                    {/* Content inside the div */}
                    <div className="w-full z-10 flex items-center justify-between p-3">
                        <div>
                            <h2 className="text-xl font-semibold text-[#FFCC00] w-6/12">New</h2>
                            <h2 className="text-xs font-semibold text-wrap text-white w-6/12">Online Course added</h2>

                        </div>
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



                

                <div className="mt-10">
                    <div className="flex flex-row justify-between py-3 px-2">
                        <p className="text-sm font-semibold">New music to match your mood</p>
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

                <div className="mt-10">

                    <div className=" flex mt-2 ">
                        <div className=" z-10 flex items-center justify-center flex-col p-3 w-1/3">
                            <h2 className="text-sm font-semibold text-black ">MonetizeYour Conscious Creations</h2>
                            <button className="flex    bg-[#FFCC00] rounded-full  font-medium mt-5 px-2 py-1 ">
                                <span className='text-[10px] text-nowrap font-medium justify-center  text-black'>Start Building</span>

                            </button>
                        </div>

                        <div className="max-w-sm overflow-hidden flex items-center justify-center rounded-xl bg-[#F4F4F4] m-1 w-1/3">

                            <div className='p-3 '>
                                <h2 className="text-xs font-semibold">Why list on CNESS</h2>
                                <p className="text-[10px] text-gray-600 py-1  text-wrap">Turn your passion into livelihood. Monetize your digital products in a marketplace that values consciousness as much as you do</p>


                            </div>
                        </div>

                        <div className="max-w-sm overflow-hidden flex items-center justify-center rounded-xl bg-[#F4F4F4] m-1 w-1/3">

                            <div className='p-3 '>
                                <h2 className="text-xs font-semibold">Simple listing process</h2>
                                <p className="text-[10px] text-gray-600 py-1  text-wrap">List, Review, Thrive. Share your work with us, pass our quality check, and start earning in a community that champions conscious living.”</p>


                            </div>
                        </div>

                    </div>
                </div>

            </div>


            {/* Third Part (1/3 width on medium screens and above) */}
            <div className="w-full md:w-1/4">
                <div className="flex flex-col">
                    {/* My Dreambuilders Section */}
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
                <div className="flex flex-col  bg-[#f6f6f6] rounded-md justify-center mt-5 p-2  ">
                <div className="flex  mb-5">
                                <h2 className="text-base text-nowrap text-[#1A237E]">Popular on CNESS</h2>

                            </div>

                    <div>
                        <div className="w-full">
                            <img
                                src="./images/test-full-width.png"
                                alt="Woman painting outdoors"
                                className="w-full rounded-md"
                            />
                        </div>
                        <div className="w-full ">
                            <p className=" text-sm font-medium py-2">Certified Green Business</p>
                            <p className=" text-sm text-[#606060] font-medium">Yoga and Life Masterclass </p>
                           

                        </div>
                    </div>

                    <div className="mt-5">


                    <div className="w-full">
                            <img
                                src="./images/test-full-width.png"
                                alt="Woman painting outdoors"
                                className="w-full rounded-md"
                            />
                        </div>
                        <div className="w-full ">
                            <p className=" text-sm font-medium py-2">Green Living Podcast Series</p>
                            <p className=" text-sm text-[#606060] font-medium">Digital Podcast </p>
                        </div>
                    </div>
                    </div>

            </div>
        </div>
    )
}

export default MarketPlace