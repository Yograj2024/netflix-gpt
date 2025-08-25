import { useSelector } from "react-redux";
import { topRatedMovieFetchUrl, upComingMovieFetchUrl } from "../../utils/constants";
import MoviesRow from "./MoviesRow";

const HomeMovies = () => {

  const { 
    nowPlayingMovies, 
    topRatedMovie, 
    upComingMovie 
  } = useSelector( store => store.movies);

  return <section className ={`pb-[3rem] lg:px-[1.25rem]`}>

    <MoviesRow category={"trending now"} movieList={nowPlayingMovies} />

    <MoviesRow category={"top rated"} movieList={topRatedMovie} fetchUrl={topRatedMovieFetchUrl} />

    <MoviesRow category={"up coming"} movieList={upComingMovie} fetchUrl={upComingMovieFetchUrl} />

  </section> 
   
}; 

export default HomeMovies; 