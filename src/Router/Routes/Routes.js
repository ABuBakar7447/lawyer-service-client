import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Allservice from "../../Pages/AllService.js/Allservice";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Comment from "../../Pages/Reviews/Comment/Comment";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import Update from "../../Pages/Update/Update";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



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
                path:'/addservice',
                element:<AddService></AddService>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/service/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path:'/myreview',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path:'/update/:id',
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/reviews/${params.id}`)
            },
            {
                path:'/comment/:id',
                element:<PrivateRoute><Comment></Comment></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
                
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
                
                
            },
            
            

        ]
    }
]);

export default router