import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useGetMoviesList from "../customHooks/useGetMoviesList";
import Header from "./header/Header";
import ShimmerUI from "./ShimmerUI";

const Body = () => {

  const user        =  useSelector( store => store.user)
  const moviesList  =  useSelector( store => store.movies?.nowPlayingMovies)
  const gpt         = useSelector( store => store.gptSearchPage.isShowGPTSearchPage)
  
  useGetMoviesList();

  const headerBeforeCss = " before:content-[''] before:h-[100vh] before:w-full before:absolute before:inset-0 before:z-[-1] before:bg-cover before:bg-center before:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')]"
  const headerAfterCss  = " after:content-[''] after:w-full after:absolute after:top-0 after:h-[100vh] after:bg-black/60 after:z-[-1]"

  return moviesList === null ? <ShimmerUI/> : <>
    <header className ={`relative ${headerAfterCss}
      ${!user ? "after:h-[37.95rem]" : gpt ? "after:h-[37.95rem]" : "after:h-[42rem]"}
      ${user ? (gpt ? "" : "lg:h-[42rem] h-[30rem]") : ""}
      ${(!user || (user && gpt)) && `${headerBeforeCss}`} 
    `}> {/* explain in line no. 39 */}
      <Header />
    </header>

    <main className ={`${(user && !gpt) && "bg-blue-100"}`}>
      <Outlet/>
    </main>

    <footer>

    </footer>
  </>
};

export default Body;