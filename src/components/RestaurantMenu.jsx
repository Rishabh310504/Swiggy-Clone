import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import RestaurantMenuTopDetails from "./RestaurantMenuTopDetails";
import RestaurantDealCarousel from "./RestaurantDealCarousel";
import { CiSearch } from "react-icons/ci";
import MenuCard from "./MenuCard";


function RestaurantMenu(){
    const {id} = useParams();
    const mainId = parseInt(id.match(/\d+/)?.at(-1) || '0', 10);
    
    const [resInfo, setResInfo] = useState(null);
    const [menuData, setMenuData] = useState();
    const [discountData, setDiscountData] = useState([]);

    // console.log(menuData);

    
    async function fetchMenu(){
        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`);
        let response = await data.json();
        
        setResInfo(response?.data?.cards[2]?.card?.card?.info);
        setDiscountData(response?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
        let menu = response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((data) => {
            if(data?.card?.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || data?.card?.card['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")   return data;
        })
        // console.log(response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        setMenuData(menu);

    }

    useEffect(() =>{
        fetchMenu();
    }, []);

    



    if(resInfo == null){
        return(<div></div>);
    }

    return(
        <div className="w-full">
            <RestaurantMenuTopDetails resInfo={resInfo}/>
            <RestaurantDealCarousel discountData={discountData}/>
            <h2 className="text-center leading-5 font-semibold text-gray-600">MENU</h2>
            <div className="w-[800px] mx-auto my-5 ">
                <div className="text-lg bg-slate-200/70 p-3 rounded-lg font-semibold flex items-center">
                    <p className="mx-auto">Search for dishes</p>
                    <CiSearch />
                </div>
            </div>

            <div className="w-[800px] mx-auto">
                {
                    menuData.map(({card: {card}}, index) => 
                        <div className="my-6">
                            <MenuCard card={card} />
                            
                        </div>
                    )
                }
                
            </div>
        </div>
    );
}

export default RestaurantMenu;