import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import appRoutes from './routes';
import { auth } from './utils/firebase';
import { userLogedIn, userLogOut } from './utils/usereSlice';

const App = () => { 
    const dispatch = useDispatch();
 
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email, displayName} = user;
                dispatch(userLogedIn({uid:uid, email:email, displayName:displayName}))
            } else {
                // User is signed out
                dispatch(userLogOut())
            }
        });
    }, [])

    return <RouterProvider router={appRoutes}/> 
};

export default App;