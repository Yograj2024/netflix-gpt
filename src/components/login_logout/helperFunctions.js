import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { userLogedIn } from "../../utils/store/usereSlice";

export const resetFormValues = (setErrorMess, fieldArr) => {
    fieldArr.forEach(ref => ref.current.value = null); // Reset all form input fields to empty   
    setErrorMess(null)
}

export const loginLogic = (setErrorMess, email, password) => {
    signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
    .then((userCredential) => {
        resetFormValues(setErrorMess, [email,password])
    })
    .catch((error) => {
        setErrorMess('loginError')
        console.log(error)
        alert(error)
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

export const signUpLogic = (setErrorMess, fullName, email, password, imgURL,confirmPassword, dispatch) => {
    // signUp logic
    const enterdName = fullName.current?.value
    const imgUrl = imgURL.current?.value

    createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
    .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName : enterdName,  photoURL : imgUrl })
        .then( async () => {
            // Profile updated...!
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(
                userLogedIn(
                    {
                        uid : uid, 
                        email : email, 
                        displayName : displayName, 
                        photoURL : photoURL
                    }
                )
            )
            resetFormValues(setErrorMess, [email,password,fullName,confirmPassword, imgURL])
        }).catch((error) => {
            // An error occurred
            setErrorMess(error.message)
        });
    }) 
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}`)
    });
} 