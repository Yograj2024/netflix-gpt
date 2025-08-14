import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import useTopRated from "../customHooks/useTopRated";
import useGetMoviesList from "../customHooks/useGetMoviesList";
import { useSelector } from "react-redux";

const Body = () => {
  const location = useLocation();
  const isLoginpage = location.pathname === "/"
  const user = useSelector(store => store.user)

  useGetMoviesList();
  useTopRated();

  return <>
    <header className ={`relative  ${ user && "h-[47.9rem]"} 
      ${
        !user && `
        before:content-['']  before:h-[50rem] before:w-full before:absolute before:inset-0 before:z-[-1]
        before:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')]
        before:bg-cover before:bg-center `
      }
      after:content-['']
      ${ !user ? `after:h-[50rem] `  : `after:h-[47.9rem]` }
      after:w-full after:bg-black/40 after:absolute after:top-0 after:z-[-1] `}>
      <Header />
    </header>

    <main>
      <Outlet/>
    </main>

    <footer>

    </footer>
  </>
};

export default Body;