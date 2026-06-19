import React from "react";
import ReactDOM from "react-dom/client";

const Heading = React.createElement("h1",{"id":"heading3"},"Hi there");  
const JSXHeading =<h1 id="heading2">Hi There from JSX</h1>;

const Title = () =>{
    return (
        <h3>React tutorial</h3>
    );
}
const HeadingComponent = () => {
    return (<h1 id ="heading1" > 
    <Title />
    {Title()}
    Hi There from Functional Component 
    </h1>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);