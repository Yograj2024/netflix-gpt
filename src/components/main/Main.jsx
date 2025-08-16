import { useSelector } from "react-redux";
import MoviesRow from "./MoviesRow";

const Main = () => {

  const trending   =  useSelector( store => store.movies.nowPlayingMovies)
  const topRated   =  useSelector( store => store.movies.topRatedMovie)
  const gpt        =  useSelector( store => store.gptSearchPage.isShowGPTSearchPage);
  const inputBoxCSS = `placeholder:capitalize placeholder:text-gray-200 outline-none h-[2.8rem] w-[50%] border-[1px] border-[#605F5E] rounded-[0.45rem] px-[1.5rem] bg-black/40`


  return !gpt ? 
  <div className ={`pb-[3rem] pl-[2rem]`}>
    <MoviesRow title={"trending now"} movieList={trending} />
    <MoviesRow title={"top rated"} movieList={topRated} />
  </div> : 
  
  <div className={`w-[50%] m-auto pt-[5rem]`}>
      <h2 className={`text-white text-[2.5rem] font-semibold capitalize leading-[3.5rem] text-center px-[2rem]`}>describe what you want to watch, we’ll suggest...</h2>
      <p className={`text-white text-[1.125rem] font-semibold px-[3rem] capitalize mt-[1rem]`}>skip the endless scrolling and start watching something you’ll love.</p>

      <div className={`mt-[3rem] pl-[5rem] flex flex-col text-white`}>
        <label htmlFor="userDescription" className={`ml-[0.5rem] mb-[0.8rem]`}>your description</label>
        <input type="text" name="fullName" id="" className ={`${inputBoxCSS}`}/>
      </div>
  </div>
}; 

export default Main; 