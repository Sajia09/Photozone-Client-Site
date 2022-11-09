import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
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
                loader:()=> fetch('https://assignment11-server-site-sajia09.vercel.app/services'),
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=> fetch('https://assignment11-server-site-sajia09.vercel.app/services')
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
                loader: ({params})=> fetch(`https://assignment11-server-site-sajia09.vercel.app/services/${params.id}`)
            },
            {
                path:'/reviews/:id',
                element:<PrivateRoute><PersonReview></PersonReview></PrivateRoute>,
            },
            {
                path:'/myreviews/:email',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>,
                loader:({params})=> fetch(`https://assignment11-server-site-sajia09.vercel.app/myreviews/${params.email}`)
            },
        ]
    }
])

export default router;