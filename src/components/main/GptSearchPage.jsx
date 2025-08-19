import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gptSearchPageLan } from '../../utils/languageConstant';
import { API_OPTIONS, gptQuery, gptQueryPrefix, gptQuerySuffix, gptSearch_API_OPTIONS } from '../../utils/constants';
import { gptRecommendedMovies } from '../../utils/store/gptSearchSlice';

const GptSearchPage = () => {

    const [userInput, setUserInput] = useState("");
    const appConfig      = useSelector( store => store.appConfig.userLanguage)
    const dispatch       = useDispatch()

    // search movie in TMDB 
    const searchMovieONTMDB = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US&page=1`, API_OPTIONS)
        const json = await data.json();
        return json
    }

    const handle_GPT_Search = async () => {
        // make a API call to gpt aip and get movie results
        const data = await fetch('https://api.chatanywhere.tech/v1/chat/completions',{
            ...gptSearch_API_OPTIONS,
            body: JSON.stringify({
                model:'gpt-3.5-turbo',
                messages: [ { role: 'system', content : `${gptQueryPrefix}${userInput}${gptQuerySuffix}` }, ]
            })
        })
     
        const gptResult = (await data.json()).choices[0].message.content.split(",");

        // for each movie in side gptResult i will search TMDB API and get thoese movies data 
        const promiseArary =  gptResult.map( movie => {// data2 me hume 5 promises ka ek array milega
            // [promise1, promise2, promise3, promise4, promise5] and thiese promise take some time to resolve it
          return   searchMovieONTMDB(movie) 
        })

        const eachMovieInfo = await Promise.all(promiseArary) 
        //promise.all() ek built-in method hai ye ek arary of promises leta hai jaab sabhi jpromises resolve ho jaate hai tab ye ek result ka array return karata hai 
        // NOTE :- sirf ek promise reject hone se pura promise.all() reject ho jaata hai 
        dispatch( gptRecommendedMovies({moviesName:gptResult, moviesInfo:eachMovieInfo}))
        
    }

    return  <div className={`pt-[5rem] text-white capitalize`}>
        <h2 className={`text-center text-[3.25rem] font-bold leading-[4rem] px-[21rem]`}>{gptSearchPageLan[appConfig].h2}</h2>
        <p className={`text-center text-[1.25rem] font-bold mt-[1rem]`}>{gptSearchPageLan[appConfig].p}</p>
        <h3 className={`text-center text-[1.125rem] font-semibold mt-[2rem]`}>{gptSearchPageLan[appConfig].h3}</h3>

        <div className={`flex items-center justify-center gap-x-[1rem] mt-[2rem]`}>
        <div className={`relative flex-[0_0_32%] group`}>
            <label htmlFor="userDiscription" 
            className={`${ userInput ? "top-[8%] text-gray-400" : "group-focus-within:top-[8%] group-focus-within:text-[0.9rem] group-focus-within:text-gray-400 top-[26%] text-[1.25rem]"} absolute z-[1] font-semibold tracking-[1px] left-[6%] transition-all duration-200 `}>
            {gptSearchPageLan[appConfig].gptSearchPlaceHolder}
            </label>
            <input type="text" id="userDiscription" name="fullName" 
            className = {` relative placeholder:capitalize placeholder:text-gray-200 outline-none h-[4rem] w-full border-[1px] border-[#605F5E] focus:border-red-600 rounded-[0.3rem] px-[1.5rem] bg-black/40 pt-[1rem] focus:shadow-[0px_0px_5px__5px_rgba(255,0,0,0.3)]`}
            value={userInput}
            onChange={ (e) => setUserInput( e.target.value)}/>
        </div>
        <button className={`bg-red-600 flex items-center px-[2rem] py-[0.9rem] rounded-[0.6rem] text-[1.5rem] capitalize font-semibold`}
        onClick = { handle_GPT_Search }>
            {gptSearchPageLan[appConfig].getStartBtn}
            <span className={`inline-block text-[1rem] ml-[0.8rem] pt-[0.2rem]`}>&#x276F;</span>
        </button>
        </div>
    </div>
}; 

export default GptSearchPage;