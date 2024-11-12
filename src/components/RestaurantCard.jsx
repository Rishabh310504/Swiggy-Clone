import React from "react";
import { MdStars } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";

function RestaurantCard({info, link}){
    // console.log(link.split("/").at(-1));
    return(
    <Link to={`/restaurantMenu/${link.split("/")[5]}`}>
        <div className="hover:scale-95 duration-100">
            <div className="min-w-[273px] h-[182px] relative">
                <img 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + info?.cloudinaryImageId}  
                    className="w-full h-full object-cover rounded-2xl relative"
                    key={info.id}
                    />
                <div className="absolute w-full h-full bottom-0 bg-gradient-to-t from-black to-transparent to-20% rounded-2xl "></div>   
                <p className="absolute bottom-0 text-white text-xl font-bold ml-2 mb-1">
                    {
                        info?.aggregatedDiscountInfoV3 == null ? "" : info?.aggregatedDiscountInfoV3?.header + " " 
                            + 
                        (info?.aggregatedDiscountInfoV3?.subHeader == null ? "": info?.aggregatedDiscountInfoV3?.subHeader)
                    }
                </p> 
            </div>
            <div className="mt-3 w-full">
                <h2 className="font-bold text-lg w-full line-clamp-1">{info.name}</h2>
                <p className="flex items-center"> 
                    <MdStars className="text-green-600 text-2xl mr-1"/>
                    {info.avgRating} 
                    <LuDot className="text-xl font-bold mx-0 self-center"/>
                    <span className="font-bold">{info.sla.slaString}</span>
                </p>
                <p className="w-full text-gray-500 line-clamp-1 font-medium">{info.cuisines.join(", ")}</p>
                <p className="text-gray-500 font-medium">{info.locality}</p>
            </div>
        </div>
    </Link>
    );
}

export default RestaurantCard;