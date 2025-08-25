import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovie, addTopRatedMovie, addUpComingMovie } from "../utils/store/slices/moviesListSlice";


const useGetCategoryList = (fetchUrl, category) => {

    const dispatch = useDispatch();

    const fetchMovies  = async () => {
        try {
            const data         = await fetch(fetchUrl, API_OPTIONS);
            const json         = await data.json();
            const topRatedMovieList = json.results;
            
            switch(category){
                case "top rated" : 
                    dispatch(addTopRatedMovie(topRatedMovieList))
                    break;

                case "popular" : 
                    dispatch(addPopularMovie(topRatedMovieList))
                    break;

                case "up coming" : 
                    dispatch(addUpComingMovie(topRatedMovieList))
                    break;

                default:
                    console.warn(`Unknown movie category: ${category}`);
                    break;
            }
        } catch (error) {
            console.error("Failed to fetch movies:", error);
        }
    }

    useEffect( () => { fetchMovies () }, [])
}

export default useGetCategoryList;