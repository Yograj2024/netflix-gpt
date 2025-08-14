import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutPageStyles, netflixLogo } from '../../utils/constants';
import { auth } from '../../utils/firebase';
import { userLogedIn, userLogOut } from "../../utils/store/usereSlice";
import HeroSection from './HeroSection';

const Header = ({loginForm}) => {
    
    const dispatch      =   useDispatch();
    const navigate      =   useNavigate();
    const user          =   useSelector( store => store.user );
    const userName      =   user?.displayName == null ? "user name not provided" : user.displayName
    
    useEffect( () => {   // we checking authentication every time the page load  and setting up our store if user is logedin update the srote and user is logout remove user info in to the store
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email, displayName, photoURL} = user;
                dispatch(
                    userLogedIn(
                        {
                            uid:uid, 
                            email:email, 
                            displayName:displayName, 
                            photoURL:photoURL
                        }
                    ) 
                )
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
        console.log("click on signOut")
        signOut(auth).then(() => {
             /* Sign-out successful. */
        }).catch((error) => {
             /* An error happened. */
        });
    }

    return <>
        <nav className ={`relative overflow-hidden ${ !user ? `  ` : "" }`}>
            <div className ={`capitalize ${ user && "flex items-center justify-between pr-[5rem]"}`}>
                <div className={`inline-block h-auto w-[12rem] ml-[4rem]`}> <img src={netflixLogo} alt="" className={`h-full w-full  object-cover`}/> </div>
                { 
                    user  &&
                    <div className={`flex items-center gap-x-[1rem] relative z-[2]`}> 
                        <div>
                            <div className={`h-[4rem] aspect-square`}> <img src={user?.photoURL} alt="user-img" className={`h-full w-full object-cover rounded-[1rem]`} /> </div>
                            <p className={`text-white font-semibold`}>{userName}</p>
                        </div>
                        <button onClick = { handleSignOut }
                        className = { ` ${!user ? "hidden" : 
                        "bg-red-500 text-[1rem] capitalize font-semibold rounded-[8px] text-white px-[12px] py-[3px] "}`}>
                            sign out
                        </button>
                    </div>
                }
            </div>
        </nav>
        { user &&  <HeroSection /> }
    </>
};

export default Header;