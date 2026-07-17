import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestraurantMenu from "../utils/useRestraurantMenu";
import RestraurantCategory from "./RestraurantCategory";

const RestraurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestraurantMenu(resId);

    if (resInfo == null ) return <Shimmer />; 

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = (resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card) || null ;


const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
// console.log(categories);    
return (resInfo  ==  null) ? <Shimmer /> : (
        <div className="menu">
          <div className="text-center ">
              <h1 className="text-3xl font-bold my-4">{name} </h1>
              <p className="text-xl font-semibold ">
                {cuisines.join(",")} - {costForTwoMessage}
              </p> 
          </div>
          <div>
            {categories.map((category)=>
              <RestraurantCategory key ={category?.card?.card?.categoryId} data = {category?.card?.card}/>)
            }
          </div>
        </div>
    )
}

export default RestraurantMenu;