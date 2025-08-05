import { netflixLogo } from '../utils/links';

const Login = () => {

  const inputBoxCSS = `placeholder:capitalize placeholder:text-gray-200 outline-none h-[3.3rem] w-full border-[1px] border-[#605F5E] rounded-[0.45rem] px-[1.5rem] bg-[#605F5E]/20`

  return <>
    <section className={`relative overflow-hidden h-[52rem] bg-black/40 before:content-[' '] before:h-full before:w-full before:absolute before:z-[-1]  before:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')] before:bg-cover before:scale-120 before:bg-[0%_4rem]`}>
        <div className = {`capitalize  `}>
            <div className={`inline-block h-auto w-[12rem] ml-[6rem]`}> 
                <img src={netflixLogo} alt="" className={`h-full w-full  object-cover`}/> 
            </div>
            <div className={`bg-black/75 w-[38%] mx-auto text-white px-[4.5rem] py-[3rem]`}>
                <h2 className='text-[2rem] font-bold '>sign in</h2>
                <form action="">
                    <input type="text" name="" id="" placeholder='email or mobile number' className={`${inputBoxCSS} mt-[1.5rem]`}/>

                    <input type="password" name="" id="" placeholder='password' className ={`${inputBoxCSS} mt-[1.25rem]`}/>
                    <button className={`bg-red-600 mt-[1rem] w-full rounded-[0.45rem] py-[0.5rem] text-[1rem] capitalize font-semibold`}>sign in</button>
                            <b className={`inline-block w-full text-center my-[0.5rem] text-[1.5rem] font-mono`}>OR</b>
                    <button className={`bg-[#3A3535]  w-full rounded-[0.45rem] py-[0.65rem] text-[1rem] capitalize font-semibold`}>use a sign-in code </button>
                    <p className={`text-center underline my-[1.5rem] text-[1.1rem]`}>forgot password?</p>

                    <div>
                        <span className={`flex items-center`}>
                            <input type="checkbox" id='remember_me' className={`h-[1.25rem] aspect-square mr-[1rem]`}/>
                            <label htmlFor="remember_me" className={`text-[1.1rem] normal-case`}>Remember me</label>
                        </span>
                        <h3 className='my-[1rem] text-[1.2rem]'>new to netflix? <span className={`underline font-semibold`}>sign up now.</span></h3>
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