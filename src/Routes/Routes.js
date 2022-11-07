import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Signup from "../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

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
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
        ]
    }
])

export default router;