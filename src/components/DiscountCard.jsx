import React from "react";

function DiscountCard({data}){

    const {header, offerLogo, couponCode} = data;
    return(
        <div className="flex min-w-[300px] h-[76px] border border-gray-300 p-3 rounded-3xl gap-4">
            <div className="w-12 h-12">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${offerLogo}`} />
            </div>
            <div>
                <h2 className="font-bold">{header}</h2>
                <p className="font-bold text-gray-400">{couponCode}</p>
            </div>
        </div>
    );
}

export default DiscountCard;