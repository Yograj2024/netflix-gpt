import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovie } from "../utils/store/moviesListSlice";


const useTopRated = () => {

    const dispatch    =  useDispatch();

    const getTopRatedMovie = async () => {
        const data        = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, API_OPTIONS);
        const json        = await data.json();
        const topRatedMovieList = json.results;
        dispatch(addTopRatedMovie(topRatedMovieList))
    }

    useEffect( () => {
        getTopRatedMovie()
    }, [])
}

export default useTopRated;