import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

function WhatsOnYourMind({data}){

    const [value, setValue] = useState(0);

    function handleNext(){
        value >= 150? "": setValue((prev) => prev + 50);

    }
    function handlePrevious(){
        value <= 0 ? "" : setValue((prev) => prev - 50);
    }

    if(data.length == 0)    return <div></div>
    return(
        <div className="border-b-2 pb-10 mt-5 overflow-hidden">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl">What's on your mind?</h2>
                <div className="flex gap-4 items-center">
                    <div className="bg-gray-300 rounded-full cursor-pointer" onClick={handlePrevious}>
                        <IoIosArrowRoundBack className="text-3xl"/>
                    </div>
                    <div className="bg-gray-300 rounded-full cursor-pointer" onClick={handleNext}>
                        <IoIosArrowRoundForward className="text-3xl"/>
                    </div>
                </div>
            </div>
            <div className={`flex mt-4 duration-500`} style={{translate: `-${value}%`}}>
                {
                    data.map((item) => 
                        <img 
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + item.imageId} 
                            key={item.id}
                            className="w-40"
                        />
                    )
                }
            </div>
        </div>
    );
}


export default WhatsOnYourMind;