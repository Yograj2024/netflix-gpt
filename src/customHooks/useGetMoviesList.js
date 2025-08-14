import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/store/moviesListSlice";

const useGetMoviesList = () => {

  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    const list = json.results;
    dispatch(addNowPlayingMovies(list))
  }
  
  useEffect( () => { 
    getMovies()
  }, []);

}

export default useGetMoviesList;