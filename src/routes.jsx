import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
const GptSearchPage = lazy( () => import ("./components/main/GptSearchPage"));
const HomeMovies = lazy( () => import ("./components/main/HomeMovies"));
const Login_OutForm = lazy( () => import ("./components/login_logout/Login_OutForm"));


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
            },
            {
                path: '/browse/search-with-GPT',
                element: <GptSearchPage/>
            }
        ]
    }
]);

export default appRoutes;