import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    
    const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla} = props?.resData;
    return (
        <div className="m-4 p-4 w-[200px] bg-gray-50 hover:bg-gray-100 hover:shadow-md">
            <img src={CDN_URL+cloudinaryImageId} className="rounded-lg"></img>
            <h3 className="font-bold py-2 text-base">{name}</h3>
            <h4> {cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    )
}

export const OfferedRestraurantcard = ( RestaurantCard ) => {
    return (props) => {
        
        const { header, subHeader } = props.resData?.aggregatedDiscountInfoV3 || {};
        console.log(header, subHeader);
        return (
            <div className="relative">
                <label className="absolute bg-green-600 text-white p-2 rounded">
                    {(header || "") +" "+(subHeader||"") } 
                </label>
                <RestaurantCard {...props} />
                
               
            </div>
        )
    }
}

export default RestaurantCard;