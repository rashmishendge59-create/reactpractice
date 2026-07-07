import React from "react";

class UserClass extends React.Component {

    constructor( props ){
        
        super(props);
        console.log("constructor called",this.props.name)
        this.state = {
            count : 0
        }

    }

    componentDidMount(){
        console.log("componentDidMount called",this.props.name);
    }

    componentWillUnmount(){
        console.log("componentWillUnmount called",this.props.name);
    }
    render (){
        const {name, email, location } = this.props;
        console.log("render called",this.props.name)
        const { count} = this.state;
            return (
            <div className = "user-card">
                <h1>count : {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count + 1
                    })
                }
                }>Increase Count</button>
                <h2>Name : {name}</h2>
                <h3>Email : {email}</h3>
                <h4>Location : {location}</h4>
            </div>
            );
    }
}

export default UserClass;