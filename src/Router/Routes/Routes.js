import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Allservice from "../../Pages/AllService.js/Allservice";
import Home from "../../Pages/Home/Home";

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
            }
        ]
    }
]);

export default router