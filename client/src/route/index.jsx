import Address from "../pages/Address";
import AdminPermision from "../layouts/AdminPermision";
import App from "../App";
import CategoryPage from "../pages/CategoryPage";
import Dashboard from "../layouts/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyOrders from "../pages/MyOrders";
import OtpVerification from "../pages/OtpVerification";
import ProductAdmin from "../pages/ProductAdmin";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import SearchPage from "../pages/SearchPage";
import SubCategoryPage from "../pages/SubCategoryPage";
import UploadProduct from "../pages/UploadProduct";
import UserMenuMobile from "../pages/UserMenuMobile";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "search",
                element : <SearchPage/>
            },
            {
                path : 'login',
                element : <Login/>
            },
            {
                path : "register",
                element : <Register/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassword/>
            },
            {
                path : "verification-otp",
                element : <OtpVerification/>
            },
            {
                path : "reset-password",
                element : <ResetPassword/>
            },
            {
                path : "user",
                element : <UserMenuMobile/>
            },
            {
                path : "dashboard",
                element : <Dashboard/>,
                children : [
                    {
                        path : "profile",
                        element : <Profile/>
                    },
                    {
                        path : "myorders",
                        element : <MyOrders/>
                    },
                    {
                        path : "address",
                        element : <Address/>
                    },
                    {
                        path : 'category',
                        element : <AdminPermision><CategoryPage/></AdminPermision> 
                    },
                    {
                        path : "subcategory",
                        element :  <AdminPermision><SubCategoryPage/></AdminPermision>
                    },
                    {
                        path : 'upload-product',
                        element :   <AdminPermision><UploadProduct/></AdminPermision>
                    },
                    {
                        path : 'product',
                        element :  <AdminPermision><ProductAdmin/></AdminPermision>
                    }
                ]
            }
        ]
    }
])

export default router