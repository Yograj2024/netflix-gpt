import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { menuIcon, netflixLogo } from '../../utils/constants';
import { auth } from '../../utils/firebase';
import { selectLanguageBtnText, SUPPORTED_LANGUAGES } from '../../utils/languageConstant';
import { changeLanguage } from '../../utils/store/appConfigSlice';
import { toggleGPTsearchView } from '../../utils/store/gptSearchSlice';
import { userLogedIn, userLogOut } from "../../utils/store/usereSlice";

const NavBar = () => {
    
    const dispatch      =   useDispatch();
    const navigate      =   useNavigate();
    const user          =   useSelector( store => store.user );
    const gpt           =   useSelector( store => store.gptSearchPage.isShowGPTSearchPage );
    const lan           =   useSelector( store => store.appConfig.userLanguage)
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

    const handleSignOut = () => {
        signOut(auth).then(() => {
             /* Sign-out successful. */
        }).catch((error) => {
             /* An error happened. */
        });
    }

    const handleLanguageChage = (e)  =>  dispatch(changeLanguage(e.target.value)) 
    const handleGPTsearch     = ()   =>  dispatch(toggleGPTsearchView()) 

    return <nav className ={`relative z-[2] overflow-hidden bg-gradient-to-b from-black`}>
        <div className ={`capitalize ${ user && "flex items-center justify-between lg:pr-[3rem]"}`}>
            <div className ={`inline-block h-auto w-[8rem] lg:w-[12rem] lg:ml-[2rem]`}> <img src={netflixLogo} alt="" className={`h-full w-full  object-cover`}/> </div>
            <div className ={`sm:hidden h-[2rem] aspect-square mr-[1rem]`}>
                <img src={menuIcon} alt="" className ={`h-full w-full object-cover`}/>
            </div>
            { /* user icon, name & signout btn*/
                user  && <div className={`hidden lg:flex items-center gap-x-[1rem] relative z-[2]`}> 
                    <button onClick = { handleGPTsearch} className={ ` ${!user ? "hidden" : "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500  text-[1rem] capitalize font-semibold rounded-[8px] text-white px-[12px] py-[3px] "}`}>
                        { !gpt ? "GPT Search" : "Home"}
                    </button>
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
                        <div className={`h-[3rem] aspect-square`}> <img src={user?.photoURL} alt="user-img" className={`h-full w-full object-cover rounded-[1rem]`} /> </div>
                        <p className={`text-white font-semibold`}>{userName}</p>
                    </div>
                </div>
            }
        </div>
    </nav>
};

export default NavBar;