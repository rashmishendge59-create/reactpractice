import { useState } from "react";
import { CART_URL, LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [ btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
    <div className="flex justify-center shadow-lg">
        <div className="mt-3">
            <img className= "w-20" src={LOGO_URL}></img>
        </div>

        <div className="flex items-end">
            <ul className="flex p-4 m-4">
                <li className="px-5 py-2 hover:bg-gray-100 rounded-md font-medium"><Link>Online Status {(onlineStatus) ? "✅" : "🔴"}</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100 rounded-md font-medium"><Link to= "/">Home</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100 rounded-md font-medium"><Link to= "/about">About Us</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100 rounded-md font-medium"><Link to= "/contact">Contact Us</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100 rounded-md font-medium "><Link to= "/grocery">Grocery</Link></li>
                <li className="px-5 py-2 hover:bg-gray-100 rounded-md "><img className= "w-7 " src={CART_URL}></img></li>
                <button className="px-5 py-2 hover:bg-gray-100 font-bold rounded-md" onClick={()=>{ ( btnName == "Login" ) ? setBtnName("LogOut") : setBtnName("Login");
                }}>{ btnName }</button>
            </ul>

        </div>

    </div>
    );
}

export default Header;