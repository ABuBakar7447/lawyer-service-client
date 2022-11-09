import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Allservice from "../../Pages/AllService.js/Allservice";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";

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
            }
        ]
    }
]);

export default router