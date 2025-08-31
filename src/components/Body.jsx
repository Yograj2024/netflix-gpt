import { lazy, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useDeviceType from "../customHooks/useDeviceType";
import useGetMoviesList from "../customHooks/useGetMoviesList";
import handleHeaderClasses from "../utils/handleHeaderClasses";
import Footer from "./footer/Footer";
import MovieDetails from "./main/MovieDetails";

const Login   =  lazy( () => import ("./login_logout/Login_OutForm"))
const SideBar =  lazy( () => import ("./SideBar"))
const Header  =  lazy( () => import ("./header/Header"))

const Body = () => {

  const user        =  useSelector( state => state.user)
  const poster      =  useSelector( state => state.movieMedia?.posterLink)
  const moviesList  =  useSelector( state => state.movies?.nowPlayingMovies)
  const gpt         =  useSelector( state => state.gptSearchPage.isShowGPTSearchPage)
  const deviceType  =  useSelector( state => state.appConfig.deviceInfo.deviceType)

  const [isSideBarShow, setIsSideBarShow] = useState(false)

  useGetMoviesList();
  useDeviceType();

  // ✅ Utility function for header classes is getHeaderClasses 
  
  return  !user ? 
  <>
    <header className ={handleHeaderClasses(user)}>
      <Header />
    </header>
  
    <main className ={`${!user && (deviceType == "mobile" ? `pt-[8rem]` : `pt-[5rem]`)}`}>
      <Login/>
    </main>
  </>
  : moviesList !== null && <>
  
    {  deviceType == "mobile" && <SideBar isSideBar={isSideBarShow} setSideBar={setIsSideBarShow } /> }

    <header className ={" mobileHeader " + handleHeaderClasses(user,gpt, deviceType, poster)} style={ deviceType === "mobile" && poster ? {"--poster-url" : `url(${poster})`} : {"--poster-url" : `url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')`} }>
      <Header isSideBar={isSideBarShow} setSideBar={setIsSideBarShow} />
    </header>

    
    <main className ={`${(user && !gpt) && "bg-blue-100 "}`}>
      <MovieDetails />
      <Outlet/>
    </main>

    <footer>
      <Footer/>
    </footer>
  </>
};

export default Body;