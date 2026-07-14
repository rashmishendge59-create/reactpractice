import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestraurantMenu from "../utils/useRestraurantMenu";

const RestraurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestraurantMenu(resId);

    console.log(resInfo);
    if (resInfo == null ) return <Shimmer />; 

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = (resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card) || null ;

    return (resInfo  ==  null) ? <Shimmer /> : (
        <div className="menu">
            <h1>{name} </h1>
            <p>
              {cuisines.join(",")} - {costForTwoMessage}
            </p> 
            <h2>Menu</h2>
            {(itemCards  == null ) ? (<div>Menu not Available</div>) :
            (<ul>
              {itemCards.map((items) => 
              (
              <li key={items.card.info.id}>{items.card.info.name} - Rs.{items.card.info.defaultPrice/100 || items.card.info.price/100 || items.card.info.finalPrice/100 }</li>

              ))}
               
            </ul>) }

        </div>
    )
}

export default RestraurantMenu;