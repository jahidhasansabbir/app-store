import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Apps from "../components/Apps/Apps";
import MyProfile from "../components/MyProfile/MyProfile";

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
                Component: Apps
            },
            {
                path: 'my-profile',
                Component: MyProfile
            }
        ]
    }
])