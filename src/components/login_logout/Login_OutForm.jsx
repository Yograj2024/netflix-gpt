import { useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import { isFormDataValid } from '../../utils/validateFormData';
import { loginLogic, signUpLogic } from './helperFunctions';

const Login = () => {

  const [isLoginForm , setIsLoginForm] =  useState(true)
  const [errorMess, setErrorMess]      =  useState(null);
  const dispatch = useDispatch();
  
  const email = useRef(null), password = useRef(null), fullName = useRef(null), confirmPassword = useRef(null)
  
  const toggleLoginForm = () => setIsLoginForm(!isLoginForm);
  
  const handleSign_in_up = () => {   
    
    if(!isLoginForm ){
      const mess = isFormDataValid(...[fullName, email, password, confirmPassword].map( field => field.current?.value),isLoginForm);
      setErrorMess(mess)
      if(mess){console.log(errorMess); return};
      signUpLogic(setErrorMess, fullName, email, password, confirmPassword, dispatch)
    }else{
      const mess = isFormDataValid(
        null,
        email.current?.value,
        password.current?.value,
        null,
        isLoginForm
      );
      setErrorMess(mess)
      if(mess){console.log(errorMess); return};
      loginLogic(setErrorMess, email, password)
    }
  }
  
  const handleAnimation = () => ['email', 'password', 'fullName', 'confirmPassword'].includes(errorMess) && setErrorMess(null) ;

  const inputBoxCSS = `placeholder:capitalize placeholder:text-gray-400/90 outline-none h-[2.8rem] w-full border-[1px] border-[#605F5E] rounded-[0.45rem] px-[1.5rem] bg-[#605F5E]/20 mt-[1.25rem]`

  return <div className ={`bg-black/75 w-[90%] mt-[1rem] lg:mt-0 lg:w-[28%] mx-auto rounded-[1rem] text-white px-[2rem] py-[1rem]`}>
    <h2 className ='text-[1.5rem] text-center font-semibold capitalize'>{isLoginForm ? "sign in" : "sign up"}</h2>
    <form action="" onSubmit = { (e) => e.preventDefault() }>
        <input ref={fullName} type="text" name="fullName" id="" placeholder='full name'
        onAnimationEnd={handleAnimation}
        className ={`${errorMess == 'fullName' && 'shake border-red-500'} ${inputBoxCSS}
         ${isLoginForm ? 'hidden' : 'block'} `}/>

        <input ref={email} type="text" name="user_emailORnumber" id="" placeholder='email'
        onAnimationEnd={handleAnimation}
        className ={`${errorMess == 'email' && 'shake border-red-500'} ${inputBoxCSS} `} />

        <input ref={password} type="password" name="" id="" placeholder='password' 
        className ={` ${errorMess == 'password' && 'shake border-red-500'} ${inputBoxCSS} `} 
        onAnimationEnd={handleAnimation}/>

        <p className ={`${isLoginForm && errorMess == "loginError" ? `block  ${setTimeout( () => setErrorMess(null), 1500) }` : 'hidden'} text-center pt-[18px] text-red-700 font-semibold text-[18px]`}>Email or password is incorrect...!</p>
        <input ref={confirmPassword} type="password" name="" id="" placeholder='confirm password' 
        className ={` ${errorMess == 'confirmPassword' && 'shake border-red-500'} ${inputBoxCSS} ${isLoginForm ? 'hidden' : 'block'} `}
        onAnimationEnd={handleAnimation}/>

        <button onClick = { handleSign_in_up  } className={`bg-red-600/80 mt-[1rem] w-full rounded-[0.45rem] py-[0.4rem] text-[1rem] capitalize font-semibold`}>{isLoginForm ? "sign in" : "sign up"}</button>
        <b className={`${isLoginForm ? 'inline-block' : 'hidden'}  w-full text-center my-[0.5rem] text-[1.25rem] font-mono`}>OR</b>
        <button className={` ${isLoginForm ? 'block' : 'hidden'} bg-[#3A3535]  w-full rounded-[0.45rem] py-[0.4rem] text-[1rem] capitalize font-semibold`}>use a sign-in code </button>
        <p className={`${isLoginForm ? 'block' : 'hidden'} text-center underline my-[1rem] text-[1.1rem]`}>forgot password?</p>

        <div>
            <span className={`${isLoginForm ? ' ' : 'mt-[1rem]'} flex items-center`}>
                <input type="checkbox" id='remember_me' className={`h-[1.125rem] aspect-square mr-[1rem]`}/>
                <label htmlFor="remember_me" className={`text-[1.1rem] normal-case`}>Remember me</label>
            </span>
            <h3 className='my-[0.5rem] lg:text-[1.2rem]'> {isLoginForm ? "new to netflix?" : "all redy have an account "} 
              <span onClick = { toggleLoginForm } className={`underline font-semibold hover:cursor-pointer`}> {isLoginForm ? "sign up now." : "sign in."} </span>
            </h3>
            <p className={`text-[0.8rem] lg:text-[0.9rem] text-gray-400 lg:text-gray-600 font-semibold`}>This page is protected by Google reCAPTCHA to ensure you're not a bot.  
              <span className={`mt-[0.6rem] ml-[0.5rem] underline text-blue-500 inline`}> learn more </span>
            </p>
        </div>
    </form>
  </div>
};

export default Login;