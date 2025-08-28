import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useGetMoviesList from "../customHooks/useGetMoviesList";
import ShimmerUI from "./ShimmerUI";
const SideBar = lazy( () => import ("./SideBar"))
const Header = lazy( () => import ("./header/Header"))
import useDeviceType from "../customHooks/useDeviceType";
import { useState } from "react";
import { getHeaderClasses } from "../utils/constants";

const Body = () => {

  const user        =  useSelector( store => store.user)
  const moviesList  =  useSelector( store => store.movies?.nowPlayingMovies)
  const gpt         =  useSelector( store => store.gptSearchPage.isShowGPTSearchPage)
  const deviceType  =  useSelector( store => store.appConfig.deviceInfo.deviceType)

  const [isSideBarShow, setIsSideBarShow] = useState(false)
  
  useGetMoviesList();
  useDeviceType();

  // ✅ Utility function for header classes is getHeaderClasses 
  
  return moviesList === null ? <ShimmerUI/> : <>
    <SideBar isSideBar={isSideBarShow} setSideBar={setIsSideBarShow } />

    <header className ={getHeaderClasses({ user, gpt, deviceType })} >
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