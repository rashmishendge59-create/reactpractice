import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//     return (
//         <div>
//             <h1>Our Team</h1>
//             {/* <User name = {"Deepika Padukone (function)"} email = {"deepika@gmail.com"} location = {"Mumbai"}/> */}

//             <UserClass name = {"Ranveer Singh (class)"} email = {"ranveer@gmail.com"} location = {"Mumbai"}/>

//         </div>
//     )
// }

class About extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent constructor called");

    }

    componentDidMount(){
        console.log("Parent componentDidMount called");
    }
    componentWillUnmount(){
        console.log("Parent componentWillUnmount called");
    }
    render(){
        console.log("Parent render called");
        return (
            <div className="m-6">
                <div className="flex justify-center mt-14 text-2xl font-extrabold underline">
                    <h1>Our Team</h1>
                </div>
                <div className="flex justify-center flex-wrap ">
                    <UserClass name = {"Employee 1"} email = {"child1@gmail.com"} location = {"Mumbai"}/>
                    <UserClass name = {"Employee 2"} email = {"child2@gmail.com"} location = {"pune"}/>
                    <UserClass name = {"Employee 3"} email = {"child1@gmail.com"} location = {"Mumbai"}/>
                    <UserClass name = {"Employee 4"} email = {"child2@gmail.com"} location = {"pune"}/>
                    <UserClass name = {"Employee 4"} email = {"child2@gmail.com"} location = {"pune"}/>
                    <UserClass name = {"Employee 4"} email = {"child2@gmail.com"} location = {"pune"}/>
                </div>
            </div>
        )
    }
}

export default About;