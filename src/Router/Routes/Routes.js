import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Allservice from "../../Pages/AllService.js/Allservice";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import Update from "../../Pages/Update/Update";

import Private from "../Private/Private";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/service',
                element:<Allservice></Allservice>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/service/:id',
                element:<Private><ServiceDetails></ServiceDetails></Private>,
                loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path:'/myreview',
                element:<Private><MyReview></MyReview></Private>
            },
            {
                path:'/update/:id',
                element:<Private> <Update></Update> </Private>,
                loader:({params})=>fetch(`http://localhost:5000/reviews/${params.id}`)
            },
            
            

        ]
    }
]);

export default router