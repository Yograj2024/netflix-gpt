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

  const user        =  useSelector( store => store.user)
  const moviesList  =  useSelector( store => store.movies?.nowPlayingMovies)
  const gpt         =  useSelector( store => store.gptSearchPage.isShowGPTSearchPage)
  const deviceType  =  useSelector( store => store.appConfig.deviceInfo.deviceType)

  const [isSideBarShow, setIsSideBarShow] = useState(false)
  
  useGetMoviesList();
  useDeviceType();

  // ✅ Utility function for header classes is getHeaderClasses 
  
  return  !user ? 
  <>
    <header className ={getHeaderClasses({ user, gpt, deviceType })} >
      <Header isSideBar={isSideBarShow} setSideBar={setIsSideBarShow} />
    </header>
  
    <main className ={`${(user && !gpt) && "bg-blue-100"}`}>
      <Login/>
    </main>
  </>
  : moviesList !== null && <>
  
    {  deviceType == "mobile" && <SideBar isSideBar={isSideBarShow} setSideBar={setIsSideBarShow } /> }

    <header className ={getHeaderClasses({ user, gpt, deviceType }) + "overflow-hidden"} >
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