import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import MyProfile from "../components/MyProfile/MyProfile";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";
import PrivateRoute from "../provider/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                element: <h1>This is outlet</h1>
            },
            {
                path: 'apps',
                Component: Apps,
                loader: ()=>fetch('/appData.json')
            },
            {
                path: 'my-profile',
                Component: MyProfile
            },
            {
                path: 'app-details/:id',
                element: <PrivateRoute><AppDetails/></PrivateRoute>,
                loader: ()=>fetch('/appData.json')
            }
        ]
    }
])