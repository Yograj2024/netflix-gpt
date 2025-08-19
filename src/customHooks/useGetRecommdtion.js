import { API_OPTIONS, gptQueryPrefix, gptQuerySuffix, gptSearch_API_OPTIONS } from "../utils/constants";
import { gptRecommendedMovies } from "../utils/store/gptSearchSlice";

// search movie in TMDB 
const searchMovieONTMDB = async (movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US&page=1`, API_OPTIONS)
    const json = await data.json();
    return json
}

const useGetRecommdtion = async (userInput, dispatch) => {

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

export default useGetRecommdtion;    