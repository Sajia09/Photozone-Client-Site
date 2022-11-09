import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PersonReview from "../Pages/Review/PersonReview/PersonReview";
import Review from "../Pages/Review/Review";
import Services from "../Pages/Services/Services";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

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
                loader:()=> fetch('http://localhost:5000/services'),
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
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/services/:id',
                element:<Review></Review>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/reviews/:id',
                element:<PrivateRoute><PersonReview></PersonReview></PrivateRoute>,
            },
        ]
    }
])

export default router;