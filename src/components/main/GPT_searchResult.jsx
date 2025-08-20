import { useSelector } from "react-redux";
import MovieRow from "./MoviesRow";

const GPT_serachResult = () => {
  
  const { gptMoviesName, gptMoviesInfo } = useSelector( store => store.gptSearchPage)
 
  return gptMoviesName !== null && <div className ={`mt-[7rem]`}>
    {
      gptMoviesName.map( (movieName, index) => <div>
        <MovieRow title={movieName} movieList={gptMoviesInfo[index].results} />
      </div>)
    }
  </div>
};

export default GPT_serachResult;