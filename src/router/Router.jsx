import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error404 from "../pages/Error404";
import MyProfile from "../pages/MyProfile";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <Error404></Error404>,
        children: [
            {

                index:true,
                Component: Apps,
                loader: ()=>fetch('/appData.json')
            },
            {
                path: 'my-profile',
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: 'app-details/:id',
                element: <PrivateRoute><AppDetails/></PrivateRoute>,
                loader: ()=>fetch('/appData.json')
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    }
])