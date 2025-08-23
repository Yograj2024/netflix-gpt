import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import MoviesRow from "./MoviesRow";
import { popularMovieFetchUrl, topRatedMovieFetchUrl, upComingMovieFetchUrl } from "../../utils/constants";

const HomeMovies = () => {

  const { 
    nowPlayingMovies, 
    topRatedMovie, 
    popularMovie,
    upComingMovie 
  } = useSelector((store) => store.movies);

  const isShowGPTSearchPage  =  useSelector( store => store.gptSearchPage.isShowGPTSearchPage );

  if (isShowGPTSearchPage) return <GptSearchPage />;
 
  return <section className ={`pb-[3rem] lg:px-[1.25rem]`}>

    <MoviesRow category={"trending now"} movieList={nowPlayingMovies} />

    <MoviesRow category={"top rated"} movieList={topRatedMovie} fetchUrl={topRatedMovieFetchUrl} />

    <MoviesRow category={"up coming"} movieList={upComingMovie} fetchUrl={upComingMovieFetchUrl} />

  </section> 
   
}; 

export default HomeMovies; 