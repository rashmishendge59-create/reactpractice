import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [ listOfRestraurant, setListOfRestraurant ] = useState ([]);
    const [ filteredList, setListOfFilteredRes ] = useState([]);
    const [ searchText, setSearchText ] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.57382&lng=73.7561594&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestraurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfFilteredRes (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (listOfRestraurant.length === 0) ? <Shimmer /> :
        (
        <div className="body">
            <div className="filter">

                <div className="search">
                    <input type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}></input>
                    <button className="search-btn" onClick={()=>{
                        const filteredList1 = listOfRestraurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) )

                        setListOfFilteredRes(filteredList1);
                    }}> Search </button>

                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList2 = listOfRestraurant.filter((res)=> (res.info.avgRating > 4.2));
                    setListOfFilteredRes(filteredList2);    
                }}>Top Rated Restraurant</button>
            </div>
            <div className="res-container">
                { filteredList.map((restraurant) => (
                    <Link to={"/restraurant/"+restraurant.info.id} key={restraurant.info.id}>
                        <RestaurantCard key = {restraurant.info.id} resData = {restraurant.info} />
                    </Link>
                  ))}
            </div>

        </div>
        )
}

export default Body;