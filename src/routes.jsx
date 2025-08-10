import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login_logout/Login";
import Body from "./components/Body";

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Body />,
        children:[
            {
                path:"/",
                element:<Login/>
            }
        ]
    },
    {
        path: '/browse',
        element: <Body />
    }
]);

export default appRoutes;