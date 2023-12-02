import Main from "../../Layout/Main";
import About from "../../Pages/About/About/About";
import Blog from "../../Pages/Blog/Blog/Blog";
import BlogSingle from "../../Pages/Blog/BlogSingle/BlogSingle";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/blog/posts',
                element: <BlogSingle></BlogSingle>
            }
        ]
    }
])
export default router;