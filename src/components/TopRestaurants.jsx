import React, {useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward} from "react-icons/io";

import RestaurantCard from "./RestaurantCard";
function TopRestaurant({data}){

    // console.log(data);
    const [value, setValue] = useState(0);

    function handleNext(){
        value >= 420 ? "": setValue((prev) => prev + 42);
    }

    function handlePrevious(){
        setValue((prev) => prev - 42);
    }

    if(data.length == 0)    return <div></div>

    return(
        <div className="border-b-2 pb-10 my-10 overflow-hidden">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl">Top restaurant chains in Mumbai</h2>
                <div className="flex gap-4 items-center">
                    <div className="bg-gray-300 rounded-full cursor-pointer" onClick={handlePrevious}>
                        <IoIosArrowRoundBack className="text-3xl"/>
                    </div>
                    <div className="bg-gray-300 rounded-full cursor-pointer" onClick={handleNext}>
                        <IoIosArrowRoundForward className="text-3xl"/>
                    </div>
                </div>
            </div>
            <div className={`flex mt-4 gap-5 duration-500`} style={{translate: `-${value}%`}}>
                {
                    data.map(({info, cta:{link}}) => 
                        <RestaurantCard info={info} link={link} key={info.id}/>
                    )
                }
            </div>
        </div>
    );
}

export default TopRestaurant;