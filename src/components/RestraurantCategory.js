import { useState } from "react";
import ItemList from "./ItemList";

const RestraurantCategory = ({data}) => {
   const [showItems ,setShowItems] = useState(false);

   const handleClick = () => {
    setShowItems(!showItems);
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
            {showItems && <ItemList items = {data?.itemCards}/>}
            </div>
        </div>
    );
}

export default RestraurantCategory;