import React from 'react'
import Slider from "react-slick";

const Organizations = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container">
            <div className="bg-gray-100 flex items-end justify-center relative overflow-hidden rounded-2xl">
                <div className="w-full ">
                    <img
                        src="./images/test-full-width.png"
                        alt="Woman painting outdoors"
                        className="w-full"
                    />
                </div>
                <div className="p-5 flex items-center justify-center absolute">
                    <div className="flex flex-col justify-between px-2 ">

                        <h1 className=" text-[34px] text-wrap text-[#FFCC00]">Join the Conscious Eco-system</h1>

                        <p className="text-white text-sm my-2 w-1/2">
                            CNESS is a dynamic eco-system of certified companies, non-profits and visionary individuals partnering on inspiring projects.
                        </p>

                    </div>

                    <button className="flex items-center  justify-center bg-yellow-400 rounded-full px-3 py-2 ">
                        <span className='text-xs text-nowrap font-500 text-black'>Get Started</span>
                        <div className="ml-4 rounded-full bg-[#1A237E] p-2">
                            <svg width="16" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z" fill="white" />
                            </svg>

                        </div>
                    </button>
                </div>
            </div>

            <div className="">
                <div className=" py-5 px-9 flex items-center justify-center">
                    <div className="flex flex-col justify-between px-2 ">
                        <h1 className=" text-2xl font-semibold text-center">Organisations would now be </h1>

                        <p className="text-sm my-2  text-center">
                            At CNESS, we believe in empowering organizations to thrive in a conscious ecosystem. Join our platform and unlock a world of possibilities for your organization to connect, collaborate, and contribute to a better world.
                        </p>
                    </div>

                </div>
                <div className="flex flex-wrap justify-between px-5 gap-2">
                    <img src="./images/company-logo.png" alt="" srcset="" width="100" />
                    <img src="./images/company-logo.png" alt="" srcset="" width="100" />
                    <img src="./images/company-logo.png" alt="" srcset="" width="100" />
                    <img src="./images/company-logo.png" alt="" srcset="" width="100" />
                    <img src="./images/company-logo.png" alt="" srcset="" width="100" />
                    <img src="./images/company-logo.png" alt="" srcset="" width="100" />
                </div>
            </div>

            <div>
                <div className="flex justify-between">
                    <div className="sayingAbout w-full md:w-1/2 mt-3">
                        <Slider {...settings}>
                            <div>
                                <div className="p-4">
                                    <h2 className="text-3xl font-semibold">What organisations are saying about certifying with CNESS:</h2>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs font-normal">By collaborating with like-hearted directors and partners in businesses and nonprofits worldwide, we catalyze scalable solutions that create real social impact. The energy when brilliant minds of tech assembled by cness come together is palpable. Not only are we building sustainable businesses, but forging meaningful friendships while restoring hope that technology can profoundly benefit communities everywhere. I’m grateful and thrilled to be part of this global force for good called cness. The future looks brighter.</p>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-base font-semibold">K.S. Chandran</h2>
                                    <h2 className="text-sm font-medium text-[#7B7B7B]">Managing Director</h2>
                                    <h2 className="text-sm font-normal text-[#7B7B7B]">Solaris Innovations, Singapore</h2>
                                </div>
                            </div>
                            <div>
                                <div className="p-4">
                                    <h2 className="text-3xl font-semibold">What organisations are saying about certifying with CNESS:</h2>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs font-normal">By collaborating with like-hearted directors and partners in businesses and nonprofits worldwide, we catalyze scalable solutions that create real social impact. The energy when brilliant minds of tech assembled by cness come together is palpable. Not only are we building sustainable businesses, but forging meaningful friendships while restoring hope that technology can profoundly benefit communities everywhere. I’m grateful and thrilled to be part of this global force for good called cness. The future looks brighter.</p>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-base font-semibold">K.S. Chandran</h2>
                                    <h2 className="text-sm font-medium text-[#7B7B7B]">Managing Director</h2>
                                    <h2 className="text-sm font-normal text-[#7B7B7B]">Solaris Innovations, Singapore</h2>
                                </div>
                            </div>
                            <div>
                                <div className="p-4">
                                    <h2 className="text-3xl font-semibold">What organisations are saying about certifying with CNESS:</h2>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs font-normal">By collaborating with like-hearted directors and partners in businesses and nonprofits worldwide, we catalyze scalable solutions that create real social impact. The energy when brilliant minds of tech assembled by cness come together is palpable. Not only are we building sustainable businesses, but forging meaningful friendships while restoring hope that technology can profoundly benefit communities everywhere. I’m grateful and thrilled to be part of this global force for good called cness. The future looks brighter.</p>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-base font-semibold">K.S. Chandran</h2>
                                    <h2 className="text-sm font-medium text-[#7B7B7B]">Managing Director</h2>
                                    <h2 className="text-sm font-normal text-[#7B7B7B]">Solaris Innovations, Singapore</h2>
                                </div>
                            </div>
                            <div>
                                <div className="p-4">
                                    <h2 className="text-3xl font-semibold">What organisations are saying about certifying with CNESS:</h2>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs font-normal">By collaborating with like-hearted directors and partners in businesses and nonprofits worldwide, we catalyze scalable solutions that create real social impact. The energy when brilliant minds of tech assembled by cness come together is palpable. Not only are we building sustainable businesses, but forging meaningful friendships while restoring hope that technology can profoundly benefit communities everywhere. I’m grateful and thrilled to be part of this global force for good called cness. The future looks brighter.</p>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-base font-semibold">K.S. Chandran</h2>
                                    <h2 className="text-sm font-medium text-[#7B7B7B]">Managing Director</h2>
                                    <h2 className="text-sm font-normal text-[#7B7B7B]">Solaris Innovations, Singapore</h2>
                                </div>
                            </div>
                            <div>
                                <div className="p-4">
                                    <h2 className="text-3xl font-semibold">What organisations are saying about certifying with CNESS:</h2>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs font-normal">By collaborating with like-hearted directors and partners in businesses and nonprofits worldwide, we catalyze scalable solutions that create real social impact. The energy when brilliant minds of tech assembled by cness come together is palpable. Not only are we building sustainable businesses, but forging meaningful friendships while restoring hope that technology can profoundly benefit communities everywhere. I’m grateful and thrilled to be part of this global force for good called cness. The future looks brighter.</p>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-base font-semibold">K.S. Chandran</h2>
                                    <h2 className="text-sm font-medium text-[#7B7B7B]">Managing Director</h2>
                                    <h2 className="text-sm font-normal text-[#7B7B7B]">Solaris Innovations, Singapore</h2>
                                </div>
                            </div>
                            <div>
                                <div className="p-4">
                                    <h2 className="text-3xl font-semibold">What organisations are saying about certifying with CNESS:</h2>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs font-normal">By collaborating with like-hearted directors and partners in businesses and nonprofits worldwide, we catalyze scalable solutions that create real social impact. The energy when brilliant minds of tech assembled by cness come together is palpable. Not only are we building sustainable businesses, but forging meaningful friendships while restoring hope that technology can profoundly benefit communities everywhere. I’m grateful and thrilled to be part of this global force for good called cness. The future looks brighter.</p>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-base font-semibold">K.S. Chandran</h2>
                                    <h2 className="text-sm font-medium text-[#7B7B7B]">Managing Director</h2>
                                    <h2 className="text-sm font-normal text-[#7B7B7B]">Solaris Innovations, Singapore</h2>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <img className="rounded-[10px] w-full md:w-1/3" src="./images/test-full-width.png" />
                </div>
            </div>
            <div className="mt-10 flex flex-col justify-center">
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col w-full mx-2">
                        <div className="w-full  p-2">
                            <img className="rounded-md w-full h-full" src="./images/test-full-width.png" />

                        </div>
                        <div className="w-full  p-2">
                            <h2 className="text-base py-1 text-[#1A237E]  font-semibold">Connect with the Global Conscious Community</h2>
                            <p className="text-xs font-normal">Engage seamlessly with the world's largest consciousness community.
                                Cultivate meaningful connections, share insights, and collaborate with like-minded organizations globally.</p>
                            <button className="flex items-center  justify-between mt-5 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 px-3 py-1 ">
                                <span className='text-base text-nowrap font-medium justify-center px-4 text-black'>Get Connected</span>
                                <div className="ml-4 rounded-full bg-[#1A237E] p-2">
                                    <svg width="16" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z" fill="white" />
                                    </svg>

                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mx-1">
                        <div className="w-full  p-2">
                            <img className="rounded-md w-full h-full" src="./images/test-full-width.png" />

                        </div>
                        <div className="w-full  p-2">
                            <h2 className="text-base py-1 text-[#1A237E]  font-semibold">Earn CNESS Certification for Trust and Brand Enhancement</h2>
                            <p className="text-xs font-normal">Achieve Conscious Certification on CNESS to boost customer trust and elevate brand perception.
                                Showcase your organization's commitment to ethical practices, transparency, and conscious leadership.</p>
                            <button className="flex items-center  justify-between mt-5  rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 px-2 py-1 ">
                                <span className='text-base text-nowrap font-medium justify-center px-4 text-black'>Get Started</span>
                                <div className="ml-4 rounded-full bg-[#1A237E] p-2">
                                    <svg width="16" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z" fill="white" />
                                    </svg>

                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full mx-2 mt-10">

                    <div className="w-full  p-2">
                        <div className='flex flex-row '>


                            <h2 className="text-base py-1 text-[#1A237E]  font-semibold w-1/2">Contribute to Best Practices and Demonstrate Expertise</h2>
                            <p className="text-xs font-normal w-1/2">Participate in the creation of industry-leading best practices. Showcase your organization's leadership and expertise to a diverse community of conscious businesses.</p>

                        </div>
                        <button className="flex items-center  justify-between mt-5 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 px-3 py-1 ">
                            <span className='text-base text-nowrap font-medium justify-center px-4 text-black'>Contribute!</span>
                            <div className="ml-4 rounded-full bg-[#1A237E] p-2">
                                <svg width="16" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z" fill="white" />
                                </svg>

                            </div>
                        </button>
                    </div>
                    <div className="w-full  p-2">
                        <img className="rounded-xl w-full h-80" src="./images/test-full-width.png" />

                    </div>
                </div>
                <div className="flex flex-row justify-center mt-10">
                    <div className="flex flex-col w-full mx-2">
                        <div className="w-full  p-2">
                            <img className="rounded-md w-full h-full" src="./images/test-full-width.png" />

                        </div>
                        <div className="w-full  p-2">
                            <h2 className="text-base py-1 text-[#1A237E]  font-semibold">Empower Dreams and Foster Personal Growth</h2>
                            <p className="text-xs font-normal">Be a catalyst for individuals to achieve their dreams through collaborative initiatives. Contribute to a platform that supports personal and professional development, creating a positive impact on lives.</p>
                            <button className="flex items-center  justify-between mt-5 rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 px-3 py-1 ">
                                <span className='text-base text-nowrap font-medium justify-center px-4 text-black'>Get Connected</span>
                                <div className="ml-4 rounded-full bg-[#1A237E] p-2">
                                    <svg width="16" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z" fill="white" />
                                    </svg>

                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mx-1">
                        <div className="w-full  p-2">
                            <img className="rounded-md w-full h-full" src="./images/test-full-width.png" />

                        </div>
                        <div className="w-full  p-2">
                            <h2 className="text-base py-1 text-[#1A237E]  font-semibold">Forge Collaborations with NGOs and Like-Minded Organizations</h2>
                            <p className="text-xs font-normal">Discover and connect with NGOs and organizations sharing your values. Foster collaborations that amplify the impact of your conscious initiatives and contribute to collective betterment.</p>
                            <button className="flex items-center  justify-between mt-5  rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 px-2 py-1 ">
                                <span className='text-base text-nowrap font-medium justify-center px-4 text-black'>Discover</span>
                                <div className="ml-4 rounded-full bg-[#1A237E] p-2">
                                    <svg width="16" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62364 15.6093L10.233 7.99996L2.62364 0.390625L0.738312 2.27596L6.46231 7.99996L0.738312 13.724L2.62364 15.6093Z" fill="white" />
                                    </svg>

                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative w-full py-9  px-10 my-7 bg-cover bg-center flex items-center justify-center overflow-hidden rounded-lg"
                style={{
                    backgroundImage: "url('./images/test-full-width.png')",
                }}
            >
                {/* Overlay for better text visibility (optional) */}
                <div className="absolute inset-0 bg-[#2485D1] "></div>

                {/* Content inside the div */}
                <div className="w-full z-10 flex items-center justify-between p-3">
                    <h2 className="text-xs font-semibold text-white w-6/12">Ignite the power of your organization to make a meaningful impact in the world through conscious living and collective growth. Join CNESS today to embark on a transformative journey of positive change and lasting influence.</h2>
                    <button className="flex items-center  justify-between  rounded-full bg-[#FFCC00] font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 px-1 py-1 ">
                        <span className='text-base text-nowrap font-medium justify-center px-4 text-black'>Get Started</span>

                    </button>
                </div>

            </div>

            <div className="mt-10">

                <div className="py-4">
                <h2 className="text-base  text-[#1A237E]  font-semibold">Empower Dreams and Foster Personal Growth</h2>
                </div>
                <div className='flex flex-row '>


                    <div className='mx-2' >
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
                    <div className='mx-2' >
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
                    <div className='mx-2' >
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
                    <div className='mx-2' >
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

        </div>
    )
}

export default Organizations