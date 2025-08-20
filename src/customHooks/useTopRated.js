import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovie } from "../utils/store/moviesListSlice";


const useTopRated = () => {

    const topRatedMovie =  useSelector( store => store.movies.topRatedMovie)
    const dispatch      =  useDispatch();

    const getTopRatedMovie = async () => {
        const data         = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, API_OPTIONS);
        const json         = await data.json();
        const topRatedMovieList = json.results;
        
        dispatch(addTopRatedMovie(topRatedMovieList))
    }

    useEffect( () => { !topRatedMovie &&  getTopRatedMovie() }, [])
}

export default useTopRated;