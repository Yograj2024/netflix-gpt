import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';


export const resetFormValues = (setErrorMess, fieldArr) => {
    fieldArr.forEach(ref => ref.current.value = null); // Reset all form input fields to empty   
    setErrorMess(null)
}

export const loginLogic = (navigate, setErrorMess, email, password) => {
    signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        resetFormValues(setErrorMess, [email,password])
        navigate("/browse")
    })
    .catch((error) => {
        setErrorMess('loginError')
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

export const signUpLogic = (navigate, setErrorMess, fullName, email, password, confirmPassword) => {
    // signUp logic
    createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        resetFormValues(setErrorMess, [email,password,fullName,confirmPassword])
        navigate("/browse")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}