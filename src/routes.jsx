import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";
import Body from "./components/Body";

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Body />
    }
]);

export default appRoutes;