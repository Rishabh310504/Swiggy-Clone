import React, { useContext } from "react";
import { IoStar } from "react-icons/io5";
import { CartContext } from "../Context";

function DetailMenu({data}){
    const {card} = data;
    const {info} = card
    
    const {cartData, setCartData} = useContext(CartContext);
    console.log(info);

    function handleAddToCart(){
        const isAdded = cartData.find((data) => data.id === info.id);
        if(!isAdded)
        {
            setCartData((prev) => [...prev, info]);
            localStorage.setItem("cartData", JSON.stringify([...cartData, info]));
        }
        else{
            alert("already added")
        }
    }

    

    return(
        <div className="px-5 py-2 ">
            <div className="flex w-full justify-between  border-b-2 pt-4 min-h-[182px] pb-10">
                <div className="w-[70%]">
                    <h2 className="font-bold text-xl text-black/70">{info.name}</h2>
                    <p className="font-bold">₹ {+(info.defaultPrice) / 100 || +(info.price) / 100}</p>
                    <p className="flex items-center font-bold my-2">
                        <IoStar  className="text-green-700"/>
                        <p> &nbsp; {info.ratings.aggregatedRating.rating || info.ratings.aggregatedRating.ratingCountV2}</p>
                    </p>
                    <div className="my-2">
                        <p className="text-gray-600">{info.description}</p>
                        {/* <button className="text-sm">Show</button> */}
                    </div>
                    <button className=" bg-green-600 text-white font-bold text-xl border px-8 py-2 drop-shadow hover:bg-green-700" onClick={handleAddToCart}>Add</button>
                </div>
                <div className="relative w-[20%]">
                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info.imageId}`} className="rounded-xl aspect-square border"/>
                    {/* <button className=" bg-white text-green-700 font-bold text-xl border px-8 py-2 rounded-xl drop-shadow absolute bottom-[-20px] left-5">Add</button> */}
                </div>
            </div>
        </div>
    );
}

export default DetailMenu;