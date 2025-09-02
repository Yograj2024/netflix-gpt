import { useSelector } from "react-redux";
import MovieRow from "./MoviesRow";

const GPT_serachResult = () => {
  
  const { gptMoviesName, gptMoviesInfo } = useSelector( store => store.gptSearchPage)
 
  return gptMoviesName !== null && <div className ={`relative pt-[8rem] lg:pt-[2.5rem] w-full m-auto`}>
    {
      gptMoviesName.map( (movieName, index) => <div>
        <MovieRow category={movieName} movieList={gptMoviesInfo[index].results} />
      </div>)
    }
  </div>
};

export default GPT_serachResult;