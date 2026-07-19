import RestaurantCard, { OfferedRestraurantcard, OfferedRestraurantcard } from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const OfferRestraurantcard = OfferedRestraurantcard ( RestaurantCard );

const Body = () => {
    const { loggedInUser, setUserName } = useContext(UserContext);

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

    const onlineStatus = useOnlineStatus();

    if( onlineStatus == false ) return <h1>Oops! Looks like your are offline, check your internet</h1>
    return (listOfRestraurant.length === 0) ? <Shimmer /> :
        (
        <div className="">
            <div className="flex justify-center">

                <div className="mt-2 p-4 justify-between">
                    <input 
                    className="w-[350px] h-10 border border-solid border-gray-400 rounded-md" 
                    placeholder=" Type restraurant name here ..."
                    type="text" 
                    value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}></input>
                    <button className="px-8 py-2 bg-green-100 mx-4 rounded-lg hover:bg-gray-100" onClick={()=>{
                        const filteredList1 = listOfRestraurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) )

                        setListOfFilteredRes(filteredList1);
                    }}> Search </button>

                <button className="px-8 py-2 bg-green-100 rounded-lg hover:bg-gray-100" onClick={()=>{
                    const filteredList2 = listOfRestraurant.filter((res)=> (res.info.avgRating > 4.2));
                    setListOfFilteredRes(filteredList2);    
                }}>Top Rated Restraurant</button>

                <input 
                    className="w-[350px] h-10 border border-solid border-gray-400 rounded-md" 
                    placeholder=" Type user name..."
                    type="text" 
                    value={loggedInUser} 
                    onChange={(e)=>{
                        setUserName(e.target.value)
                    }}></input>

                </div>
            </div>
            <div className="flex justify-center flex-wrap">
                { filteredList.map((restraurant) => (
                    <Link to={"/restraurant/"+restraurant.info.id} key={restraurant.info.id}>
                        { restraurant.info.aggregatedDiscountInfoV3 ? 
                        (<OfferRestraurantcard resData = {restraurant.info} />) :
                        (<RestaurantCard resData = {restraurant.info} />) }
                        <h4>user : {loggedInUser}</h4>
                    </Link>
                    
                  ))}
            </div>

        </div>
        )
}

export default Body;