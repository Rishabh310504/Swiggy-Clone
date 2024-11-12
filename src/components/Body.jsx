import React, { useState, useEffect } from "react";
import WhatsOnYourMind from "./WhatsOnYourMind";
import TopRestaurant from "./TopRestaurants";
import FoodCatalog from "./FoodCatalog";

function Body(){

    const[TopRestaurantData, setTopRestaurantData] = useState([]);
    const[WhatsOnYourMindData, setWhatsOnYourMindData] = useState([]);

    async function fetchData(){
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const result = await response.json();
        // console.log(result?.data);
        setTopRestaurantData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setWhatsOnYourMindData(result?.data.cards[0].card.card.imageGridCards.info);
    }

    useEffect(() => {
        fetchData();
    }, []);

   

    return(
        <div className="w-full "> 
            
            <div className="w-[75%] mx-auto ">
                <WhatsOnYourMind data={WhatsOnYourMindData}/>
                <TopRestaurant data={TopRestaurantData}/>
                <FoodCatalog data={TopRestaurantData}/>
            </div>
        </div>
    );
}  

export default Body;