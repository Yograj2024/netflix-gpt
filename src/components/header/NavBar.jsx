import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { menuIcon, netflixLogo } from '../../utils/constants';
import { auth } from '../../utils/firebase';
import handleSignOut from "../../utils/handleSignOut";
import { selectLanguageBtnText, SUPPORTED_LANGUAGES } from '../../utils/languageConstant';
import { changeLanguage } from '../../utils/store/slices/appConfigSlice';
import { toggleGPTsearchView } from '../../utils/store/slices/gptSearchSlice';
import { userLogedIn, userLogOut } from "../../utils/store/slices/usereSlice";

const NavBar = ({isSideBar, setSideBar}) => {
    
    const dispatch      =   useDispatch();
    const navigate      =   useNavigate();
    const location      =   useLocation();
    const user          =   useSelector( state => state.user );
    const gpt           =   useSelector( state => state.gptSearchPage.isShowGPTSearchPage );
    const lan           =   useSelector( state => state.appConfig.userLanguage)
    const userName      =   user?.displayName == null ? "user name not provided" : user.displayName
    
    useEffect( () => {   // we checking authentication every time the page load and setting up our store if user is logedin update the srote and user is logout remove user info in to the store

        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    userLogedIn(
                        {
                            uid         :  uid, 
                            email       :  email, 
                            displayName :  displayName, 
                            photoURL    :  photoURL
                        }
                ) )
                navigate("/browse")
            } else {
                // User is signed out
                dispatch(userLogOut())
                navigate("/")
            }
        }); 

        // unSubscribe when component unmounts
        return () => unSubscribe(); 
    }, [])

    useEffect( () => {
        location.pathname == "/browse/search-with-GPT" 
        ? dispatch(toggleGPTsearchView(true))
        : dispatch(toggleGPTsearchView(false))
    }, [location.pathname])

    const togleSideBar = () => {
        document.body.style.overflow = "hidden";
        setSideBar(true)
    }

    const handleLanguageChage = (e)  =>  dispatch(changeLanguage(e.target.value)) 
    const handleGPTsearch     = ()   =>  dispatch(toggleGPTsearchView(!gpt)) 

    return <nav className ={`max-w-[1440px] fixed w-full pt-[1rem] lg:pt-0 z-[2] overflow-hidden bg-gradient-to-b from-black`}>
        <div className ={`capitalize flex justify-between items-center ${ user && "flex items-center justify-between lg:pr-[3rem]"}`}>
            <div className ={`inline-block h-auto w-[8rem] lg:w-[12rem] lg:ml-[2rem]`}> <img src={netflixLogo} alt="netflixLogo img" loading='lazy' className={`h-full w-full  object-cover`}/> </div>

            <div className ={`${isSideBar ? "opacity-0" : "opacity-100"} ${user ? "block" : "hidden"} transition-all duration-300 ease-linear sm:hidden h-[2rem] aspect-square mr-[1rem]`} onClick = { togleSideBar }>
                <img src={menuIcon} alt="menuIcon" loading='lazy' className ={`h-full w-full object-cover`}/>
            </div>
            { /* user icon, name & signout btn*/
                user  && <div className={`hidden lg:flex items-center gap-x-[1rem] relative z-[2]`}> 
                    <Link to={gpt ? "/browse" : "/browse/search-with-GPT"}>
                        <button  onClick={handleGPTsearch} className ={ ` ${!user ? "hidden" : "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500  text-[1rem] capitalize font-semibold rounded-[8px] text-white px-[12px] py-[3px] "}`}>
                            { !gpt ? "GPT Search" : "Home"}
                        </button>
                    </Link>
                    { gpt && 
                        <select name="" id="" onChange={handleLanguageChage} className={`capitalize bg-blue-50 text-slate-800 rounded-[0.4rem] w-[6rem] py-[0.2rem] pl-[1rem] appearance-none outline-none`}>
                            <option value="" disabled selected hidden>{selectLanguageBtnText[lan].lanBtnText}</option>
                            { SUPPORTED_LANGUAGES.map( ({lanCode, name,}) => <option key={lanCode} value={lanCode}>{name}</option> ) }
                        </select>
                    }
                    <button onClick = { handleSignOut } className = { ` ${!user ? "hidden" : "bg-red-500 text-[1rem] capitalize font-semibold rounded-[8px] text-white px-[12px] py-[3px] "}`}>
                        sign out
                    </button>
                    <div className={`flex flex-col items-center`}>
                        <div className={`h-[3rem] aspect-square`}> <img src={user?.photoURL} alt="user-img" loading='lazy' className={`h-full w-full object-cover rounded-[1rem]`} /> </div>
                        <p className={`text-white font-semibold`}>{userName}</p>
                    </div>
                </div>
            }
        </div>
    </nav>
};

export default NavBar;