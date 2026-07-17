import ItemList from "./ItemList";

const RestraurantCategory = ({data}) => {
    console.log(data);
    return (
        <div className="mx-auto my-4 w-6/12 ">
            <div className="flex justify-between bg-gray-50 shadow-lg p-4  font-bold text-lg">
                <span>{data.title}({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            <div>
            <ItemList items = {data?.itemCards}/>
            </div>
        </div>
    );
}

export default RestraurantCategory;