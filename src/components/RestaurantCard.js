import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {deliveryTime} = props.resName.sla?.deliveryTime;
    const { name, cuisines, costForTwo, avgRating } = props?.resName;
    return (
        <div className="res-card">
            <img src={CDN_URL+props.resName.cloudinaryImageId} className="res-logo"></img>
            <h3>{name}</h3>
            <h4> {cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;