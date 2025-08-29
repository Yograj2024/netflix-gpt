import { lazy, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import useDeviceType from "../customHooks/useDeviceType";
import useGetMoviesList from "../customHooks/useGetMoviesList";
import Footer from "./footer/Footer";

const Login    =  lazy( () => import ("./login_logout/Login_OutForm"))
const SideBar  =  lazy( () => import ("./SideBar"))
const Header   =  lazy( () => import ("./header/Header"))

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
    <header className ={`relative before:content-[""] 
      before:absolute  before:w-full
      before:h-[100vh] before:z-[-2]
      before:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')]
      before:bg-cover before:bg-center
      after:content-[""] after:absolute 
      after:h-[100vh] after:w-full
      after:z-[-1] after:bg-black/40 `
    }>
      <Header isSideBar={isSideBarShow} setSideBar={setIsSideBarShow} />
    </header>
  
    <main className ={`${!user && (deviceType == "mobile" ? `pt-[8rem]` : `pt-[5rem]`)}`}>
      <Login/>
    </main>
  </>
  : moviesList !== null && <>
  
    {  deviceType == "mobile" && <SideBar isSideBar={isSideBarShow} setSideBar={setIsSideBarShow } /> }

    <header className ={`
      ${!gpt 
      ?` h-[39rem]
        ${ deviceType == "mobile" && `relative
            before:content-[""] before:h-full
            before:w-full before:absolute before:z-[-2]
            before:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')]
        `}
      ` 
      : `relative before:content-[""] before:h-[100vh]
      before:w-full before:absolute before:z-[-2]
      before:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')]
      after:content-[""] after:absolute 
      after:h-[100vh] after:w-full
      after:z-[-1] after:bg-black/50  `
      }`} >
      <Header isSideBar={isSideBarShow} setSideBar={setIsSideBarShow} />
    </header>
  
    <main className ={`${(user && !gpt) && "bg-blue-100 "}`}>
      <Outlet/>
    </main>

    <footer>
      <Footer/>
    </footer>
  </>
};

export default Body;