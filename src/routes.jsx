import { createBrowserRouter } from "react-router-dom";
import Login_OutForm from "./components/login_logout/Login_OutForm";
import Body from "./components/Body";
import HomeMovies from "./components/main/HomeMovies";

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Body />,
        children:[
            {
                path:"/",
                element:<Login_OutForm/>
            },
            {
                path: '/browse',
                element: <HomeMovies/>
            }
        ]
    }
]);

export default appRoutes;