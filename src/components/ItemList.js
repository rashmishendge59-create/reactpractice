import { CDN_URL } from "../utils/constants"

const ItemList = ({items}) => {
    console.log(items)
    return (
        <div>
            { items.map((item) => (
                
            <div 
            key={item.card.info.id} 
            className="p-2 m-2 border-gray-200 border-b-2 text-left">
                <div><img src = {CDN_URL+item.card?.info?.imageId}></img></div>

                <div>
                    <span>{item.card?.info?.isVeg === 1 ? "🍀 " : "🔺 "}</span>
                    <span className="text-lg font-bold">{item.card?.info?.name}</span>

                    <div className="flex items-center gap-2 font-bold">
                        {item.card?.info?.finalPrice ? (
                        <>
                            <span className="line-through text-gray-500">
                            ₹{item.card?.info?.price / 100}
                            </span>

                            <span className="font-semibold text-green-600">
                            ₹{item.card?.info?.finalPrice / 100}
                            </span>
                        </>
                        ) : (
                        <span>
                            ₹{item.card?.info?.price / 100}
                        </span>
                        )}
                    </div>
                    <span>❇️ {item.card?.info?.ratings?.aggregatedRating?.rating }</span>
                    <span> ({item.card?.info?.ratings?.aggregatedRating?.ratingCountV2 })</span>
                </div>  
                <p>{item.card?.info?.description}</p>
            </div>
            ))}
        </div>
    )
}

export default ItemList;