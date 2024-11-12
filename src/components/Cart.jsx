import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context";
import CartSummary from "./CartSummary";

function Cart(){

    const {cartData, setCartData} = useContext(CartContext);

    console.log(cartData);

    const[total, setTotal] = useState(0);

    
    useEffect(() => {
        let cost = cartData.reduce((acc, item) => acc + item.price / 100, 0);
        setTotal(cost);
    }, [cartData]);


    function handleRemoveFromCart(i){
        let newArr =  [...cartData];
        newArr.splice(i, 1);
        setCartData(newArr);
        localStorage.setItem("cartData", JSON.stringify(newArr));
    }

    if(cartData.length === 0){
        return <h1 className="text-xl text-center my-48">Order now......</h1>
    }
    return(
        <div className="my-10 flex justify-center">
            <div className="flex items-start w-[75%] justify-between">
                <div className="w-[50%]">
                    {
                        cartData.map((data, i) => 
                            <div className="flex justify-between my-2 p-2 shadow-xl">
                                <div className="w-[70%] flex flex-col items-start justify-between">
                                    <h2 className="text-xl font-bold mb-4">{data.name}</h2>
                                    <p>₹ {data.price / 100}</p>
                                    <p className="flex-grow text-sm my-2">{data.description}</p>
                                    <button className=" bg-red-600 text-white font-bold text-xl border px-8 py-2 drop-shadow hover:bg-red-700" onClick={() => handleRemoveFromCart(i)}>Remove</button>
                                </div>
                                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + data.imageId} className="w-[30%] h-[180px]"/>
                            </div>
                        
                        )
                    }
                </div>
                <CartSummary bill={total} totalItems={cartData.length}></CartSummary>
            </div>
        </div>
    )
}

export default Cart;