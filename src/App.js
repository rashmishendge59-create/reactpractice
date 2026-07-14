import React ,{lazy, Suspense }from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestraurantMenu from "./components/RestraurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
    <div className="app-layout">
        <Header />
        <Outlet />

    </div>
    );

}

const AppRouter = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    children :[ {
        path: "/",
        element : <Body />
    },
    {
        path: "/about",
        element : <About />
    },
    {
        path: "/contact",
        element : <Contact />
    },
    {
        path: "/grocery",
        element : <Suspense fallback = {<h1>Loading...</h1>}><Grocery /></Suspense>
    },
    {
        path: "/restraurant/:resId",
        element : <RestraurantMenu />
    }],
    
    errorElement : <Error />
}

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);