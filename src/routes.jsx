import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";

const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    }
]);

export default appRoutes;