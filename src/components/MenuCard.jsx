import React, { useState } from "react";
import DetailMenu from "./DetailMenu";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function MenuCard({card}){
    // console.log(card);
    // console.log(card["@type"]);
    const [isOpen, setIsOpen] = useState(true);

    function toggleButton(){
        setIsOpen((prev) => !prev);
    }

    if(card.itemCards){
        const{title, itemCards} = card;
        return(
            <>
                <div className="my-8">
                    <div className="flex items-center justify-between mb-4">
                            {
                                card["@type"] ? 
                                    <h1 className="font-bold text-xl">{title} ({itemCards.length})</h1> :
                                    <h1 className="font-bold text-base">{title} ({itemCards.length})</h1>
                            }
                            {
                                isOpen ? <IoIosArrowUp className="text-xl cursor-pointer" onClick={toggleButton}/>: <IoIosArrowDown className="text-xl cursor-pointer" onClick={toggleButton}/>
                            }
                    </div>
                            {
                                itemCards.map((data) => 
                                    isOpen ? <DetailMenu data={data}/> : ""
                                )
                            }
                    </div>
                    {
                        card["@type"] ? <hr className="my-5 border-[10px]" /> : <hr className="my-5 border-[1px]"/>
                    }

            </>
        );
    }
    else{ 
        const {title, categories} = card;
        return(
            <div>
                <h1 className="font-bold text-xl">{title}</h1>
                {
                    categories.map((card) =>
                        <MenuCard card={card}/>
                    )
                }
                
            </div>

        );
    }
}

export default MenuCard;