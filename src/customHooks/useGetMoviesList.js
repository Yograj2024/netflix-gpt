import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, nowPlayingFetchUrl } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/store/slices/moviesListSlice";

const useGetMoviesList = () => {

  const nowPlayingMovies = useSelector( store => store.movies.nowPlayingMovies)

  const dispatch  = useDispatch();

  const getMovies = async () => {
    const data    = await fetch(nowPlayingFetchUrl, API_OPTIONS);
    const json    = await data.json();
    const list    = json.results;

    dispatch(addNowPlayingMovies(list))
  }
  
  useEffect( () => { !nowPlayingMovies && getMovies()}, []);

}

export default useGetMoviesList;