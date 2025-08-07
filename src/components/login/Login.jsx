import { useRef, useState } from 'react';
import { netflixLogo } from '../../utils/links';
import { isFormDataValid } from '../../utils/validate';
import { loginLogic, signUpLogic } from './helperFunctions';

const Login = () => {

  const inputBoxCSS = `placeholder:capitalize placeholder:text-gray-200 outline-none h-[3.3rem] w-full border-[1px] border-[#605F5E] rounded-[0.45rem] px-[1.5rem] bg-[#605F5E]/20`
  const [isLoginForm , setIsLoginForm] = useState(true)

  const email = useRef(null), password = useRef(null), fullName = useRef(null), confirmPassword = useRef(null)
  const [errorMess, setErrorMess] = useState(null);

  const toggleLoginForm = () => setIsLoginForm(!isLoginForm);
 
  const handleSign_in_up = () => {    // validate the form data
   
    const mess = isFormDataValid(...[fullName, email, password, confirmPassword].map( field => field.current?.value),isLoginForm);
    setErrorMess(mess)
    if(mess) return;

    // sign up/in logic  
    !isLoginForm 
    ? signUpLogic(setErrorMess, fullName, email, password, confirmPassword)
    : loginLogic(setErrorMess, email, password)
  }

  const handleAnimation = () => ['email', 'password', 'fullName', 'confirmPassword'].includes(errorMess) && setErrorMess(null) ;

  return <>
    <section className ={`relative overflow-hidden h-[52rem] bg-black/40 before:content-[' '] before:h-full before:w-full before:absolute before:z-[-1]  before:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')] before:bg-cover before:scale-120 before:bg-[0%_4rem]`}>
        <div className={`capitalize  `}>
            <div className={`inline-block h-auto w-[12rem] ml-[6rem]`}> 
                <img src={netflixLogo} alt="" className={`h-full w-full  object-cover`}/> 
            </div>
            <div className={`bg-black/75 w-[38%] mx-auto text-white px-[4.5rem] py-[3rem]`}>
                <h2 className ='text-[2rem] font-bold '>{isLoginForm ? "sign in" : "sign up"}</h2>
                <form action="" onSubmit = { (e) => e.preventDefault() }>
                    <input ref={fullName} type="text" name="fullName" id="" placeholder='full name'
                    onAnimationEnd={handleAnimation}
                     className ={`${errorMess == 'fullName' && 'shake border-red-500'} ${inputBoxCSS} ${isLoginForm ? 'hidden' : 'block'} mt-[1.5rem]`}/>

                    <input ref={email} type="text" name="user_emailORnumber" id="" placeholder='email or mobile number'
                     onAnimationEnd={handleAnimation}
                     className ={`${errorMess == 'email' && 'shake border-red-500'} ${inputBoxCSS} mt-[1.5rem]`} 
                     />

                    <input ref={password} type="password" name="" id="" placeholder='password' 
                    className ={` ${errorMess == 'password' && 'shake border-red-500'} ${inputBoxCSS} mt-[1.25rem]`} 
                    onAnimationEnd={handleAnimation}/>
                    <p className={`${isLoginForm && errorMess == "loginError" ? 'block' : 'hidden'} text-center pt-[18px] text-red-700 font-semibold text-[18px]`}>Email or password is incorrect...!</p>
                    <input ref={confirmPassword} type="password" name="" id="" placeholder='confirm password' className ={`${inputBoxCSS} ${isLoginForm ? 'hidden' : 'block'} mt-[1.25rem]`}/>
                    <button onClick = { handleSign_in_up  } className={`bg-red-600/80 mt-[1rem] w-full rounded-[0.45rem] py-[0.5rem] text-[1rem] capitalize font-semibold`}>{isLoginForm ? "sign in" : "sign up"}</button>
                            <b className={`${isLoginForm ? 'inline-block' : 'hidden'}  w-full text-center my-[0.5rem] text-[1.5rem] font-mono`}>OR</b>
                    <button className={` ${isLoginForm ? 'block' : 'hidden'} bg-[#3A3535]  w-full rounded-[0.45rem] py-[0.65rem] text-[1rem] capitalize font-semibold`}>use a sign-in code </button>
                    <p className={`${isLoginForm ? 'block' : 'hidden'} text-center underline my-[1.5rem] text-[1.1rem]`}>forgot password?</p>

                    <div>
                        <span className={`${isLoginForm ? ' ' : 'mt-[1.25rem]'} flex items-center`}>
                            <input type="checkbox" id='remember_me' className={`h-[1.25rem] aspect-square mr-[1rem]`}/>
                            <label htmlFor="remember_me" className={`text-[1.1rem] normal-case`}>Remember me</label>
                        </span>
                        <h3 className='my-[1rem] text-[1.2rem]'> {isLoginForm ? "new to netflix?" : "all redy have an account "} <span onClick = { toggleLoginForm } className={`underline font-semibold hover:cursor-pointer`}>{isLoginForm ? "sign up now." : "sign in."}</span></h3>
                        <p className={`text-[0.9rem] text-gray-600 font-semibold`}>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                        <p className={`mt-[0.8rem] underline text-blue-500`}>learn more</p>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <div className={`h-[15rem] w-full bg-[#161616] `}>
        footer
    </div>
  </>
};

export default Login;