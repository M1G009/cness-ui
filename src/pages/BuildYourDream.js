import React from 'react'
import CustomVideoPlayer from '../components/ui/CustomVideoPlayer'
import StoryCard from '../components/ui/StoryCard';
import DreamProjectCard from '../components/ui/DreamProjectCard';
const BuildYourDream = () => {
    const categories = [
        { name: "Information Technology" },
        { name: "Consciousness" },
        { name: "Music" },
        { name: "Music" },
        { name: "Music" },
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
                <button className="flex items-center  justify-between mt-5 w-full rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 px-3 py-2 ">
                    <span className='text-base text-nowrap font-medium justify-center px-4 text-black'>Build Your Dream</span>
                    <div className="ml-4 rounded-full bg-[#1A237E] p-2">
                        <svg width="16" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z" fill="white" />
                        </svg>

                    </div>
                </button>
            </div>

            <div className="w-full md:w-2/4  px-2">
                <div className="bg-gray-100 flex items-end justify-center relative overflow-hidden rounded-[15px]">
                    <CustomVideoPlayer videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
                    <div className=" px-4 pb-8 flex items-center justify-center absolute">
                        <div className="flex flex-row justify-between px-2 ">
                            <div className=' '>
                                <h1 className=" text-xs text-wrap text-white">Your Personal Canvas for Dreams</h1>

                                <p className="text-white text-[10px] my-2 ">
                                    Step into a realm where dreams transform into conscious realities. On Dreamspace, discover a space to publish, track, and celebrate your aspirations. Whether personal or shared, your dreams find a purposeful home here
                                </p>
                            </div>
                        </div>

                        <button className="flex items-center  justify-center bg-yellow-400 rounded-full px-2 py-1 ">
                            <span className='text-xs text-nowrap font-500 text-black'>Build Your Dream</span>
                            <div className="ml-4 rounded-full bg-[#1A237E] p-1">
                                <svg width="16" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z" fill="white" />
                                </svg>

                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex  flex-wrap h-scree ">
                    <h2 className="text-base  mb-2 mt-6">
                        Make your dreams come true with the power of consciousness
                    </h2>
                    <div className="flex flex-wrap w-full ">
                        <div className="w-full md:w-5/12 p-2">
                            <img className="rounded-[10px] w-full h-full" src="./images/test-full-width.png" />

                        </div>
                        <div className="w-full md:w-7/12 p-4">
                            <h2 className="text-sm font-semibold">Publish your Dream Project and Connect</h2>
                            <p className="text-xs font-normal">Our platform invites you to manifest your dreams into reality. Publish your dreams, track your progress, and connect with a community dedicated to making aspirations come true. Your journey to fulfillment starts here. Make every dream a conscious reality with CNESS.</p>
                            <button
                                className=" mt-5 px-3  py-1 rounded-full bg-[#FFCC00] text-[10px] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            >
                                Start Building
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-base  mb-2 mt-6">
                        You can do it
                    </h2>
                    <div className="flex flex-row justify-between">
                        <p className="text-sm ">Check out the latest inspiring stories from Dreambuilders like you.</p>

                        <div className="flex flex-row justify-center ">
                            <img className="w-4 h-3 rounded-full mr-1" src='./images/refresh.png' alt={"refresh"} />
                            <span className="text-black text-xs">Refresh</span>

                        </div>
                    </div>

                    <div className="flex gap-3 p-2 mt-3">
                        <StoryCard videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" title="Got my movie made" userIcon="./images/user.png" userName="Shreya Patel" />
                        <StoryCard videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" title="Got my movie made" userIcon="./images/user.png" userName="Shreya Patel" />
                        <StoryCard videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" title="Got my movie made" userIcon="./images/user.png" userName="Shreya Patel" />
                    </div>
                </div>

                <div className="mt-10">
                    <div className="flex justify-between items-center ">
                        <h3 className="text-xl font-semibold leading-9">
                            CNESS Dream projects posted this week:
                        </h3>
                    </div>
                    <div>
                        <div className=" p-3  rounded-md">
                            <div className="flex flex-row items-start justify-start gap-2 ">

                                <div className=" rounded-t-lg bg-[#FFCC00] p-2">
                                    <p className="font-medium text-xs text-[#1A237E]">Create</p>

                                </div>
                                <div className="  p-2">
                                    <p className="font-medium text-xs text-[#1A237E]">Animals</p>

                                </div>
                                <div className="  p-2">
                                    <p className="font-medium text-xs text-[#1A237E]">Volunteer</p>

                                </div>
                                <div className="  p-2">
                                    <p className="font-medium text-xs text-[#1A237E]">Environmental</p>

                                </div>
                                <div className="  p-2">
                                    <p className="font-medium text-xs text-[#1A237E]">Causes</p>

                                </div>


                            </div>
                            <div className="flex bg-[#F6F6F6] p-4 rounded-md">
                                <div className="flex px-1">
                                    <DreamProjectCard imageSrc="./images/test-story-image.png"

                                        tags="#musicdad #housemusic #norway"
                                        name="Jonas Sørensen, Oslo"
                                        description="My father wanted me to be a lawyer.  Now, my dream is to write a hit song in Norway to support my local kid's charity." />

                                    <DreamProjectCard imageSrc="./images/test-story-image.png"

                                        tags="#musicdad #housemusic #norway"
                                        name="Jonas Sørensen, Oslo"
                                        description="My father wanted me to be a lawyer.  Now, my dream is to write a hit song in Norway to support my local kid's charity." />

                                    <DreamProjectCard imageSrc="./images/test-story-image.png"

                                        tags="#musicdad #housemusic #norway"
                                        name="Jonas Sørensen, Oslo"
                                        description="My father wanted me to be a lawyer.  Now, my dream is to write a hit song in Norway to support my local kid's charity." />

                                </div>


                            </div>


                        </div>

                    </div>

                </div>

                <div>
                    <div className="bg-[#FFF2C6] p-4 mt-12">
                        <img className="rounded-[10px] w-full" src="./images/test-full-width.png" />
                        <div className="flex flex-wrap w-full mt-3">
                            <div className="w-full  p-4">
                                <p className="text-xs">Achieving your boldest dreams requires support. Connect, collaborate, synergize with like minded conscious individuals and organizations.</p>
                                <h2 className="text-sm font-semibold py-2">Create your own trustworthy, strategic and uplifting team.</h2>
                                <p className="text-xs ">Join our global community of like-minded individuals and organisations who motivate you as take the next steps to making your dream a reality. Access stories from members who actualized their dreams thanks to the inspiration from our alliance. Create your own personal dreambuilders to connect you with wisdom, knowledge and resources for your dream project.
                                    With Dreambuilder you don't walk this path alone. Tap into a network tailored for your vision and find energizing unity behind your purpose. Together, we make visions a reality.</p>

                            </div>
                            <button
                                className=" mt-5 px-4  py-2 rounded-full bg-[#FFCC00] text-xs hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            >
                                Start Building
                            </button>
                        </div>

                    </div>
                </div>

                <div className="mt-10">
                    <div className="flex justify-between  mb-2">
                        <h3 className="text-sm font-semibold leading-9">Be inspired and supported by your CNESS community</h3>
                        <h3 className="text-[10px]  leading-9">Read More </h3>
                    </div>
                    <div className="flex flex-column  w-full">
                        <DreamProjectCard imageSrc="./images/test-story-image.png"

                            title="Together, we've created a legacy of sustainability for generations to come"
                            name="Christina Loe"
                            fieldname="Environmental Lawyer"
                            description="Our river is now a symbol of our shared commitment to a healthier environment." />
                        <DreamProjectCard imageSrc="./images/test-story-image.png"

                            title="Together, we've created a legacy of sustainability for generations to come"
                            name="Christina Loe"
                            fieldname="Environmental Lawyer"
                            description="Our river is now a symbol of our shared commitment to a healthier environment." />

                        <DreamProjectCard imageSrc="./images/test-story-image.png"

                            title="Together, we've created a legacy of sustainability for generations to come"
                            name="Christina Loe"
                            fieldname="Environmental Lawyer"
                            description="Our river is now a symbol of our shared commitment to a healthier environment." />

                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="text-xs ">
                            Explore a mosaic of dreams in action. From creative pursuits to personal milestones, these updates capture the essence of community support and individual perseverance.
                        </h3>
                    </div>
                    <div className='flex flex-row '>


                        <div className='mx-1' >
                            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md" >
                                <img className="rounded-[10px] w-full h-full" src="./images/test-full-width.png" />
                                <div className="absolute bottom-0 left-0 w-full p-2">

                                    <div className="flex items-center ">

                                        <span className="text-white text-[10px]  font-medium"> Our native plants are creating new medicines that work</span>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-end py-2' >
                                <span className="text-black text-[10px]  font-medium"> 50% Achieved</span>

                            </div>
                            <div className="flex items-center  ">
                                <img
                                    src="./images/test-full-width.png"
                                    alt="name"
                                    className="w-6 h-6 rounded-full mr-2"
                                />
                                <span className="text-black text-sm  font-medium">Sofie Martinez</span>
                            </div>

                        </div>
                        <div className='mx-1' >
                            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md" >
                                <img className="rounded-[10px] w-full h-full" src="./images/test-full-width.png" />
                                <div className="absolute bottom-0 left-0 w-full p-2">

                                    <div className="flex items-center ">

                                        <span className="text-white text-[10px]  font-medium"> Our native plants are creating new medicines that work</span>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-end py-2' >
                                <span className="text-black text-[10px]  font-medium"> 50% Achieved</span>

                            </div>
                            <div className="flex items-center  ">
                                <img
                                    src="./images/test-full-width.png"
                                    alt="name"
                                    className="w-6 h-6 rounded-full mr-2"
                                />
                                <span className="text-black text-sm  font-medium">Sofie Martinez</span>
                            </div>

                        </div>
                        <div className='mx-1' >
                            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md" >
                                <img className="rounded-[10px] w-full h-full" src="./images/test-full-width.png" />
                                <div className="absolute bottom-0 left-0 w-full p-2">

                                    <div className="flex items-center ">

                                        <span className="text-white text-[10px]  font-medium"> Our native plants are creating new medicines that work</span>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-end py-2' >
                                <span className="text-black text-[10px]  font-medium"> 50% Achieved</span>

                            </div>
                            <div className="flex items-center  ">
                                <img
                                    src="./images/test-full-width.png"
                                    alt="name"
                                    className="w-6 h-6 rounded-full mr-2"
                                />
                                <span className="text-black text-sm  font-medium">Sofie Martinez</span>
                            </div>

                        </div >
                        <div className='mx-1' >
                            <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md" >
                                <img className="rounded-[10px] w-full h-full" src="./images/test-full-width.png" />
                                <div className="absolute bottom-0 left-0 w-full p-2">

                                    <div className="flex items-center ">

                                        <span className="text-white text-[10px]  font-medium"> Our native plants are creating new medicines that work</span>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-end py-2' >
                                <span className="text-black text-[10px]  font-medium"> 50% Achieved</span>

                            </div>
                            <div className="flex items-center  ">
                                <img
                                    src="./images/test-full-width.png"
                                    alt="name"
                                    className="w-6 h-6 rounded-full mr-2"
                                />
                                <span className="text-black text-sm  font-medium">Sofie Martinez</span>
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

                <div className="mt-10">
                    <div className="flex flex-row justify-between">
                        <p className="text-sm font-semibold">Dream Projects happening this week</p>
                        <a href="" className="underline text-sm" >See All</a>
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
                                <p className=" mb-2 text-[8px] text-[#606060]">Farming</p>
                                <div className="flex items-center justify-between mb-2">

                                    <p className=" text-xs font-medium">Eco-Friendly Urban Farming Initiative</p>

                                </div>
                                <p className=" mb-2 text-[8px] text-[#606060]">By Kate W</p>

                                <p className="text-xs text-[#606060]">
                                    Transforming city rooftops into sustainable green spaces for community farming and education.
                                </p>
                                <div className='flex justify-end py-1'>
                                    <p className='text-xs font-medium text-[#00BB28]'>88% backed</p>
                                </div>
                                <div className='flex justify-between py-1'>
                                <div className='flex flex-row'>
                                    <p className=" text-xs font-bold mr-1">355</p>
                                    <p className="text-xs text-[#606060]">
                                        backers
                                    </p>
                                </div>
                                <p className="text-xs text-[#606060]">
                                    Testimonial
                                </p>
                                </div>
                                <p className="text-[8px] text-[#606060]">
                                12 days more to go
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
                                <p className=" mb-2 text-[8px] text-[#606060]">Farming</p>
                                <div className="flex items-center justify-between mb-2">

                                    <p className=" text-xs font-medium">Eco-Friendly Urban Farming Initiative</p>

                                </div>
                                <p className=" mb-2 text-[8px] text-[#606060]">By Kate W</p>

                                <p className="text-xs text-[#606060]">
                                    Transforming city rooftops into sustainable green spaces for community farming and education.
                                </p>
                                <div className='flex justify-end py-1'>
                                    <p className='text-xs font-medium text-[#00BB28]'>88% backed</p>
                                </div>
                                <div className='flex justify-between py-1'>
                                <div className='flex flex-row'>
                                    <p className=" text-xs font-bold mr-1">355</p>
                                    <p className="text-xs text-[#606060]">
                                        backers
                                    </p>
                                </div>
                                <p className="text-xs text-[#606060]">
                                    Testimonial
                                </p>
                                </div>
                                <p className="text-[8px] text-[#606060]">
                                12 days more to go
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
                                <p className=" mb-2 text-[8px] text-[#606060]">Farming</p>
                                <div className="flex items-center justify-between mb-2">

                                    <p className=" text-xs font-medium">Eco-Friendly Urban Farming Initiative</p>

                                </div>
                                <p className=" mb-2 text-[8px] text-[#606060]">By Kate W</p>

                                <p className="text-xs text-[#606060]">
                                    Transforming city rooftops into sustainable green spaces for community farming and education.
                                </p>
                                <div className='flex justify-end py-1'>
                                    <p className='text-xs font-medium text-[#00BB28]'>88% backed</p>
                                </div>
                                <div className='flex justify-between py-1'>
                                <div className='flex flex-row'>
                                    <p className=" text-xs font-bold mr-1">355</p>
                                    <p className="text-xs text-[#606060]">
                                        backers
                                    </p>
                                </div>
                                <p className="text-xs text-[#606060]">
                                    Testimonial
                                </p>
                                </div>
                                <p className="text-[8px] text-[#606060]">
                                12 days more to go
                                </p>
                                

                            </div>
                        </div>
                    </div>

                </div>

                
            </div>

            {/* Third Part (1/3 width on medium screens and above) */}
            <div className="w-full md:w-1/4">
                <div className="flex flex-col">


                    {/* My Dreambuilders Section */}
                    <div className="flex flex-col bg-[#F6F6F6] p-4 rounded-lg shadow-md ">
                        <h3 className="size-4 text-nowrap text-[#1A237E] mb-6">My Dreambuilders</h3>
                        <ul className="space-y-4 mb-4">
                            {users.map((user, index) => (
                                <li key={index} className="flex items-center">
                                    <span
                                        className={`w-2 h-2 rounded-full mr-3 ${user.online ? 'bg-green-500' : 'bg-gray-400'}`}
                                    />
                                    {user.image ? (
                                        <img className="w-8 h-8 rounded-full mr-3" src={user.image} alt={user.name} />
                                    ) : (
                                        <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                                            <span className="text-black px-2">{user.name.charAt(0)}</span>
                                        </div>
                                    )}
                                    <span className="text-black size-4 text-nowrap">{user.name}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#see-all" className="text-nowrap text-[#1A237E] size-4 underline">
                            See all
                        </a>
                    </div>

                    {/* My Connections Section */}
                    <div className="flex flex-col bg-[#F6F6F6] p-4 rounded-lg shadow-md mt-5">
                        <h3 className="size-4 text-nowrap text-[#1A237E] mb-6">My Connections</h3>
                        <ul className="space-y-4 mb-4">
                            {myconnections.map((user, index) => (
                                <li key={index} className="flex items-center">
                                    <span
                                        className={`w-2 h-2 rounded-full mr-3 ${user.online ? 'bg-green-500' : 'bg-gray-400'}`}
                                    />
                                    {user.image ? (
                                        <img className="w-8 h-8 rounded-full mr-3" src={user.image} alt={user.name} />
                                    ) : (
                                        <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                                            <span className="text-black px-2">{user.name.charAt(0)}</span>
                                        </div>
                                    )}
                                    <span className="text-black size-4 text-nowrap">{user.name}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#see-all" className="text-nowrap text-[#1A237E] size-4 underline">
                            See all
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildYourDream