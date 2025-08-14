import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import useTopRated from "../customHooks/useTopRated";
import useGetMoviesList from "../customHooks/useGetMoviesList";

const Body = () => {
  const location = useLocation();
  const isLoginpage = location.pathname === "/"

  useGetMoviesList();
  useTopRated();

  return <>
    <header>
      <Header loginForm={<Outlet/>}/>
    </header>

    <main>
     {!isLoginpage  && <Outlet/>}
    </main>

    <footer>

    </footer>
  </>
};

export default Body;