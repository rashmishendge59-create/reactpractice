import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    
    const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla} = props?.resData;
    return (
        <div className="res-card">
            <img src={CDN_URL+cloudinaryImageId} className="res-logo"></img>
            <h3>{name}</h3>
            <h4> {cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;