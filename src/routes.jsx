import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login_logout/Login";
import Body from "./components/Body";
import Main from "./components/Main";

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Body />,
        children:[
            {
                path:"/",
                element:<Login/>
            },
            {
                path: '/browse',
                element: <Main/>
            }
        ]
    }
]);

export default appRoutes;