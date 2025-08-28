import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovie, addUpComingMovie } from "../utils/store/slices/moviesListSlice";


const useGetCategoryList = (fetchUrl, category) => {

    const dispatch = useDispatch();

    const fetchMovies  = async () => {
        try {
            const data       =  await fetch(fetchUrl, API_OPTIONS);
            const json       =  await data.json();
            const movieList  =  json.results;
            
            switch(category){
                case "top rated" : 
                    dispatch(addTopRatedMovie(movieList))
                    break;

                case "up coming" : 
                    dispatch(addUpComingMovie(movieList))
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