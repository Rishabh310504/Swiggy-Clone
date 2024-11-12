import React from "react";
import { MdStars } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";
function RestaurantMenuTopDetails({resInfo}){
    return(
        <div className="w-[800px] mx-auto pt-8">
            <p className="text-[9px]">
                <Link to="/">Home/ </Link>   
                {resInfo?.city} / {resInfo?.name}
            </p>

            <h1 className="font-bold text-2xl py-6 ">{resInfo?.name}</h1>

            <div className="w-full h-[206px]  rounded-[25px] bg-gradient-to-t from-slate-200/70 p-5">
                <div className="w-full border border-slate-200/70 rounded-[25px] h-full bg-white p-4">
                    <div className="flex items-center font-bold">
                        <MdStars className="text-green-600 text-2xl mr-1"/>
                        <span>{resInfo?.avgRating}</span>
                        <span>({resInfo?.totalRatingsString})</span>
                        <LuDot className="text-xl font-bold mx-0 self-center"/>
                        <span>{resInfo?.costForTwoMessage}</span>
                    </div>
                    <p className="text-orange-600 font-bold text-sm underline my-1">{resInfo?.cuisines.join(", ")}</p>
                    <div className="flex gap-2 my-2">
                        <div className="w-[9px] flex flex-col items-center justify-center">
                            <div className="w-[7px] h-[7px] bg-gray-400 rounded-full"></div>
                            <div className="w-[1px] h-[25px] bg-gray-400"></div>
                            <div className="w-[7px] h-[7px] bg-gray-400 rounded-full"></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-bold">Outlet <span className="font-normal text-gray-500 ml-2">{resInfo?.areaName}</span></p>
                            <p className="font-bold">{resInfo.sla.slaString}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenuTopDetails;