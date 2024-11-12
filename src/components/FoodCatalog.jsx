import React from "react";
import RestaurantCard from "./RestaurantCard";
function FoodCatalog({data}){
    return(
        <div>
            <h2 className="text-xl font-bold mb-10">Restaurants with online food delivery in Bangalore</h2>
            <div className="grid grid-cols-4 gap-16">
                {
                    data.map(({info, cta: {link}}) => 
                        <RestaurantCard info={info} key={info.id} link={link}/>
                    )
                }
            </div>
        </div>
    );
}

export default FoodCatalog;