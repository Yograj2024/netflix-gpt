import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getRecommdtion from '../../customHooks/getRecommendation';
import { gptSearchPageLan } from '../../utils/languageConstant';

const GPT_SerachSec = () => {

    const language = useSelector( store => store.appConfig.userLanguage)
    const dispatch  = useDispatch()
    const [userInput, setUserInput] = useState("");

    const handleSearch = (e) => { 
        e.preventDefault()
        getRecommdtion(userInput, dispatch) 
    }

    return <div className ={`pb-[3.75rem] pt-[19rem] max-w-[1440px] m-auto lg:pt-[10rem] text-white capitalize`}>
        <h2 className={`text-center text-[1.525rem] lg:text-[3.25rem] font-bold ${ language != 'en' ? "lg:leading-[5rem]" : 'lg:leading-[4rem]'} lg:px-[18rem]`}>{gptSearchPageLan[language].h2}</h2>
        <p className={`text-center text-[0.975rem] lg:text-[1.125rem] font-bold my-[1rem]`}>{gptSearchPageLan[language].p}</p>
        <h3 className={`text-center text-[1.12rem] lg:text-[1.75rem] lg:px-[21rem] font-semibold`}>{gptSearchPageLan[language].h3}</h3>

        <form onSubmit={ handleSearch } className ={`lg:w-[50%] lg:mx-auto lg:flex items-center justify-center gap-x-[1rem] mt-[2rem] lg:mt-[3rem]`}>
            <div className ={`relative  w-[90%] m-auto  lg:flex-[0_0_60%] group`}>
                <label htmlFor="userDiscription" 
                    className = {` ${ userInput 
                        ? "top-[12%] text-gray-500/80 text-[0.8rem]" 
                        : "group-focus-within:top-[12%] group-gray-within:text-gray-400 top-[35%] text-[0.8rem]" }
                        absolute z-[1] font-semibold tracking-[1px] left-[6%] transition-all duration-200 text-[0.9rem]`
                    }>
                    {gptSearchPageLan[language].gptSearchPlaceHolder}
                </label>
                <input type="text" id="userDiscription" name="fullName" 
                className = {` relative outline-none h-[3.5rem] lg:h-[4.25rem] w-full border-[1px] border-[#605F5E] focus:border-red-600 rounded-[0.3rem] px-[1.5rem] bg-black/40 pt-[1rem] focus:shadow-[0px_0px_5px__5px_rgba(255,0,0,0.3)]`}
                value={userInput}
                onChange={ (e) => setUserInput( e.target.value)}/>
            </div>
            <button className ={`hover:scale-[90%] hover:shadow-[0_0_8px_5px_rgba(255,0,0,0.7)] transition-all duration-150 ease-linear bg-red-700 flex items-center m-[2rem_auto_0] lg:m-0 px-[0.8rem] py-[0.2rem] lg:px-[2rem] lg:py-[0.9rem] rounded-[0.6rem] lg:text-[1.5rem] capitalize font-semibold`}
            onClick = { handleSearch }>
                {gptSearchPageLan[language].getStartBtn}
                <span className={`inline-block text-[1rem] ml-[0.8rem] pt-[0.2rem]`}>&#x276F;</span>
            </button>
        </form>
    </div>
};

export default GPT_SerachSec;