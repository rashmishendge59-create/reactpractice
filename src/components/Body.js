import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestraurant, setListOfRestraurant] = useState (resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestraurant.filter((res)=> (res.info.avgRating > 4.2));
                    setListOfRestraurant(filteredList);
                    console.log(listOfRestraurant);
                    
                }}>Top Rated Restraurant</button>
            </div>
            <div className="res-container">
                { listOfRestraurant.map((restraurant) => (
                    <RestaurantCard key = {restraurant.info.id} resName = {restraurant.info} />
                  ))}
            </div>

        </div>
    )
}

export default Body;