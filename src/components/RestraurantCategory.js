import { useState } from "react";
import ItemList from "./ItemList";

const RestraurantCategory = ({data, showItem, setShowIndex}) => {
   const handleClick = () => {
  setShowIndex();
   }
    return (
        <div className="mx-auto my-4 w-6/12 ">
            <div 
            className="flex justify-between bg-gray-50 shadow-lg p-4  font-bold cursor-pointer"
            onClick={handleClick}>
                <span >{data.title}({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            <div>
            {showItem && <ItemList items = {data?.itemCards}/>}
            </div>
        </div>
    );
}

export default RestraurantCategory;