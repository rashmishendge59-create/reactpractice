import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestraurantMenu = () => {

    const [ resInfo, setResInfo ] = useState([]);
    const [ resMenu, setResMenu ] = useState([]);

    const { resId } = useParams();


    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json?.data?.cards[2]?.card?.card?.info);
        setResMenu(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    } 
    console.log(resInfo);
    console.log(resMenu);

    const {name, cuisines, costForTwoMessage } = resInfo;
    return (resInfo.length === 0) ? <Shimmer /> : (
        <div className="menu">
            <h1>{name} </h1>
            <p>
              {cuisines.join(",")} - {costForTwoMessage}
            </p> 
            <h2>Menu</h2>
            <ul>
              {resMenu.map((items) => 
              (
              <li key={items.card.info.id}>{items.card.info.name} - Rs.{items.card.info.defaultPrice/100 || items.card.info.price/100 || items.card.info.finalPrice/100 }</li>

              ))}
               
            </ul>

        </div>
    )
}

export default RestraurantMenu;