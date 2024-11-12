import React,{useState} from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import DiscountCard from "./DiscountCard";
function RestaurantDealCarousel({discountData}){
    // console.log(discountData);
    const [value, setValue] = useState(0);

    function handleNext(){
        value >= 100? "": setValue((prev) => prev + 50);

    }
    function handlePrevious(){
        value <= 0 ? "" : setValue((prev) => prev - 50);
    }
    // console.log(value);
    return(
        <div className="my-8 w-full">
            <div className="w-[800px] mx-auto overflow-hidden">
                <div className="flex items-center justify-between mb-5">
                    <h2 className="font-bold text-2xl">Deals for you</h2>
                    <div className="flex gap-4 items-center">
                        <div className="bg-gray-300 rounded-full cursor-pointer" onClick={handlePrevious}>
                            <IoIosArrowRoundBack className="text-3xl"/>
                        </div>
                        <div className="bg-gray-300 rounded-full cursor-pointer" onClick={handleNext}>
                            <IoIosArrowRoundForward className="text-3xl"/>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 duration-300 ease-linear" style={{translate: `-${value}%`}}>
                    {
                        discountData.map(({info}) => {
                            return <DiscountCard data={info} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default RestaurantDealCarousel;