import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { userLogedIn, userLogOut } from "../utils/usereSlice";
import Header from "./Header";
import { auth } from "../utils/firebase";

const Body = () => {
  const location = useLocation();
  const isLoginpage = location.pathname === "/"

  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  useEffect( () => {   // we checking authentication every time the page load  and setting up our store if user is logedin update the srote and user is logout remove user info in to the store
    onAuthStateChanged(auth, (user) => {
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
  }, [])
  
  return <>
    <header>
      <Header loginForm={<Outlet/>}/>
    </header>

    <main>
     {!isLoginpage  && <Outlet/>}
    </main>

    <footer>

    </footer>
  </>
};

export default Body;