import { useSelector } from "react-redux";
import MoviesRow from "./MoviesRow";
import { useState } from "react";
import GptSearchPage from "./GptSearchPage";

const Main = () => {

  const trending    =  useSelector( store => store.movies.nowPlayingMovies)
  const topRated    =  useSelector( store => store.movies.topRatedMovie)
  const gpt         =  useSelector( store => store.gptSearchPage.isShowGPTSearchPage);
 

  return !gpt ? 
    <div className ={`pb-[3rem] pl-[2rem]`}>
      <MoviesRow title={"trending now"} movieList={trending} />
      <MoviesRow title={"top rated"} movieList={topRated} />
    </div> : 
    <GptSearchPage/>
   
}; 

export default Main; 