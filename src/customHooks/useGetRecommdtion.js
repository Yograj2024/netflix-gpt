import { API_OPTIONS, gptQueryPrefix, gptQuerySuffix, gptSearch_API_OPTIONS } from "../utils/constants";
import { gptRecommendedMovies } from "../utils/store/gptSearchSlice";

// search movie on TMDB 
const searchMovieONTMDB = async (movie) => {
    const response  = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&language=en-US&page=1`, API_OPTIONS)
    const data  = await response .json();
    return data 
}

/**
 * Fetch GPT recommendations based on user input.
 * 1. Calls GPT API to get recommended movie names.
 * 2. Searches each recommended movie on TMDB.
 * 3. Dispatches the combined movie data to Redux.
 */

const useGetRecommdtion = async (userInput, dispatch) => {

    try {
        // Step 1: Call GPT API and get a list of recommended movies
        const response = await fetch('https://api.chatanywhere.tech/v1/chat/completions',{
            ...gptSearch_API_OPTIONS,
            body: JSON.stringify({
                model:'gpt-3.5-turbo',
                messages: [ { role: 'system', content : `${gptQueryPrefix}${userInput}${gptQuerySuffix}` }, ]
            })
        })
        
        const gptResult = (await response.json()).choices[0].message.content.split(",");
    
        // Step 2: For each GPT result, search TMDB API to get detailed movie data
        const moviePromises =  gptResult.map( movie => {// moviePromises me hume 5 promises ka ek array milega
            // [promise1, promise2, promise3, promise4, promise5] and thiese promise take some time to resolve it
            return   searchMovieONTMDB(movie) 
        })
    
        const eachMovieInfo = await Promise.all(moviePromises) 
        //promise.all() ek built-in method hai ye ek arary of promises leta hai jaab sabhi jpromises resolve ho jaate hai tab ye ek result ka array return karata hai 
        // NOTE :- sirf ek promise reject hone se pura promise.all() reject ho jaata hai 
    
        // Step 3: Dispatch the movie names and their detailed info to Redux
        dispatch( gptRecommendedMovies({moviesName:gptResult, moviesInfo:eachMovieInfo}))
    } catch (error) {
        alert("Failed to fetch GPT recommendations :", error);
    }
}

export default useGetRecommdtion;    