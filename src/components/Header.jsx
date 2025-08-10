import { signOut } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { netflixLogo } from '../utils/links';
import { useSelector } from 'react-redux';

const Header = ({loginForm}) => {
 
    const navigate = useNavigate();
    const user = useSelector( store => store.user );
    const userName = user?.displayName == null ? "user name not provided" : user.displayName

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error")
        });
    }

    return <>
        <section className ={`relative overflow-hidden h-[52rem] bg-black/40 before:content-[' '] before:h-full before:w-full before:absolute before:z-[-1]  before:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')] before:bg-cover before:scale-120 before:bg-[0%_4rem]`}>
            <div className ={`capitalize ${ user ? "flex items-center justify-between pr-[5rem]  " : ""} `}>
                <div className={`inline-block h-auto w-[12rem] ml-[6rem]`}> 
                    <img src={netflixLogo} alt="" className={`h-full w-full  object-cover`}/> 
                </div>
                { 
                    !user ?
                    loginForm   :
                    <div className={`flex items-center gap-x-[1rem]`}> 
                        <dir>
                            <div className={`h-[4rem] aspect-square`}> <img src={user?.photoURL} alt="user-img" className={`h-full w-full object-cover rounded-[1rem]`} /> </div>
                            <p className={`text-white font-semibold`}>{userName}</p>
                        </dir>
                        <button onClick = { handleSignOut }
                        className = { ` ${!user ? "hidden" : 
                        "bg-red-500 text-[1rem] capitalize font-semibold rounded-[8px] text-white px-[12px] py-[3px] "}`}>
                            sign out
                        </button>
                    </div>
                }
            </div>
        </section>
    </>
};

export default Header;