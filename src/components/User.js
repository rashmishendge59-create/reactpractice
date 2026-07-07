import { useState } from "react";

const User = (props) => {
    const [count1] = useState(1);
     const [count2] = useState(2);
    const {name, email, location} = props;

    return (
    <div className = "user-card">
        <h1>count1 : {count1}</h1>
        <h1>count2 : {count2}</h1>
        <h2>Name : {name}</h2>
        <h3>Email : {email}</h3>
        <h4>Location : {location}</h4>
    </div>
    )
}

export default User;