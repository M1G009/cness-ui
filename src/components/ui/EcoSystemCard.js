import React from 'react'

const EcoSystemCard = () => {

    const StepComponent = () => {
        return (
            <div className="flex flex-col  sm:flex-row sm:justify-center sm:space-x-8 py-5">

                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 text-center text-white font-bold flex items-center justify-center -mb-5 z-10">
                        1
                    </div>
                    <div className=" bg-blue-900 rounded-md flex items-center justify-center p-8">
                        <img
                            className="h-10 w-10"
                            src="./images/chooseservice.png"
                            alt="chooseservice"
                        />
                    </div>
                    <div className='p-3 '>
                        <h2 className="text-xs font-semibold">Choose your service</h2>
                        <p className="text-[10px] text-gray-600 py-1  text-wrap">Begin by selecting the service category that aligns with your needs. Whether it's legal advice, accounting services, or home maintenance, our diverse categories ensure you find exactly what you're looking for.</p>
                    </div>

                </div>

                <div className="hidden sm:flex mt-3">
                    <div className="w-5 border-t-2 border-blue-900"></div>
                </div>


                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 bg-white border-[#1A237E] text-center text-[#1A237E] font-bold flex items-center justify-center -mb-5 z-10">
                        2
                    </div>
                    <div className=" border-2 border-blue-900 rounded-md flex items-center justify-center p-8">
                        <img
                            className="h-10 w-10"
                            src="./images/userreview.png"
                            alt="userreview"
                        />
                    </div>
                    <div className='p-3 '>
                        <h2 className="text-xs font-semibold">Read Verified User Reviews</h2>
                        <p className="text-[10px] text-gray-600 py-1  text-wrap">Dive into the wealth of knowledge provided by our conscious community. Explore verified user reviews that offer authentic insights into practitioners' experiences. Benefit from the collective wisdom of those who have walked the path before you.</p>
                    </div>
                </div>


                <div className="hidden sm:flex mt-3">
                    <div className="w-5 border-t-2 border-blue-900"></div>
                </div>


                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 bg-white border-[#1A237E] text-center text-[#1A237E] font-bold flex items-center justify-center -mb-5 z-10">
                        3
                    </div>
                    <div className=" border-2 border-blue-900 rounded-md flex items-center justify-center p-8">
                        <img
                            className="h-10 w-10"
                            src="./images/practitioner.png"
                            alt="practitioner"
                        />
                    </div>
                    <div className='p-3 flex flex-col'>
                        <h2 className="text-xs font-semibold">Select Your Practitioner</h2>
                        <p className="text-[10px] text-gray-600 py-1 text-wrap">Armed with information and community-backed reviews, choose your conscious practitioner with confidence. Our certified list of practitioners ensures that you're connecting with professionals committed to ethical practices and conscious service.</p>


                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className=" flex flex-col items-center justify-center">
            <StepComponent />
            <button className="mt-10 bg-yellow-400 text-black  py-2 px-4 rounded-full shadow-md hover:bg-yellow-500">
                Select service
            </button>
        </div>
    )
}

export default EcoSystemCard