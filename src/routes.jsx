import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/login/Login";

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Body />
    },
    {
        path: '/login',
        element: <Login />
    }
]);

export default appRoutes;