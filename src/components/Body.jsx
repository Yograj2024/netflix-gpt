import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useGetMoviesList from "../customHooks/useGetMoviesList";
import Header from "./header/Header";
import ShimmerUI from "./ShimmerUI";
import SideBar from "./SideBar";
import useDeviceType from "../customHooks/useDeviceType";

const Body = () => {

  const user        =  useSelector( store => store.user)
  const moviesList  =  useSelector( store => store.movies?.nowPlayingMovies)
  const gpt         =  useSelector( store => store.gptSearchPage.isShowGPTSearchPage)
  const deviceType  =  useSelector( store => store.appConfig.deviceInfo.deviceType)
  
  useGetMoviesList();
  useDeviceType();

  const headerBeforeCss = `before:content-[''] before:h-[100vh] lg:before:h-[37.95rem] before:w-full before:absolute before:inset-0 before:z-[-1] before:bg-cover before:bg-center ${deviceType != 'mobile' ? `before:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')]` : `before:bg-[url('https://image.tmdb.org/t/p/w500//aFRDH3P7TX61FVGpaLhKr6QiOC1.jpg')]`} `

  const headerAfterCss  = " after:content-[''] after:w-full after:absolute after:top-0 after:h-[100vh] lg:after:h-[37.9rem] after:bg-black/60 after:z-[-1]"

  return moviesList === null ? <ShimmerUI/> : <>
    <SideBar/>
    <header className ={`relative ${deviceType != 'mobile' && `${headerAfterCss}`}
      ${!user ? "lg:after:h-[37.95rem]" : gpt ? "lg:after:h-[37.95rem]" : "lg:after:h-[42rem]"}
      ${user ? (gpt ? "" : "lg:h-[42rem] h-[30rem]") : ""}
      ${ deviceType != 'mobile' ? (!user || (user && gpt)) && `${headerBeforeCss}` : `${headerBeforeCss}`} 
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