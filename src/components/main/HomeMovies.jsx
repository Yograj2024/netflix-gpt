import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import MoviesRow from "./MoviesRow";

const HomeMovies = () => {

  const trending    =  useSelector( store => store.movies.nowPlayingMovies)
  const topRated    =  useSelector( store => store.movies.topRatedMovie)
  const gpt         =  useSelector( store => store.gptSearchPage.isShowGPTSearchPage);
 

  return !gpt ? 
    <section className ={`pb-[3rem] pl-[2rem]`}>
      <MoviesRow title={"trending now"} movieList={trending} />
      <MoviesRow title={"top rated"} movieList={topRated} />
    </section> : 
    <GptSearchPage/>
   
}; 

export default HomeMovies; 