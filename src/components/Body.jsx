import { lazy, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useDeviceType from "../customHooks/useDeviceType";
import useGetMoviesList from "../customHooks/useGetMoviesList";
import { getHeaderClasses } from "../utils/constants";
import Login from "./login_logout/Login_OutForm";
const SideBar = lazy( () => import ("./SideBar"))
const Header = lazy( () => import ("./header/Header"))

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
    <header className ={``} >
      <Header isSideBar={isSideBarShow} setSideBar={setIsSideBarShow} />
    </header>
  
    <main className ={`${(user && !gpt) && "bg-blue-100"}`}>
      <Login/>
    </main>
  </>
  : moviesList !== null && <>
  
    {  deviceType == "mobile" && <SideBar isSideBar={isSideBarShow} setSideBar={setIsSideBarShow } /> }

    <header className ={``} >
      <Header isSideBar={isSideBarShow} setSideBar={setIsSideBarShow} />
    </header>
  
    <main className ={`${(user && !gpt) && "bg-blue-100"}`}>
      <Outlet/>
    </main>

    <footer>

    </footer>
  </>
};

export default Body;