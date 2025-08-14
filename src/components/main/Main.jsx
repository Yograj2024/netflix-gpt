import { useSelector } from "react-redux";
import MoviesRow from "./MoviesRow";

const Main = () => {

  const trending   = useSelector( store => store.movies.nowPlayingMovies)
  const topRated   = useSelector( store => store.movies.topRatedMovie)

  return <div className ={`py-[3rem] pl-[2rem] bg-green-600/50`}>
    <MoviesRow title={"trending now"} movieList={trending} />
    <MoviesRow title={"top rated"} movieList={topRated} />
  </div>
}; 

export default Main;