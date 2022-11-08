import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Review from "../Pages/Review/Review";
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
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/services')
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=> fetch('http://localhost:5000/services')
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/services/:id',
                element:<Review></Review>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
])

export default router;