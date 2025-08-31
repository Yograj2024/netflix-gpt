import { useSelector } from "react-redux";

const MovieDetails = () => {

  const movieInfo       =  useSelector( state => state.movieInfo?.movieInfo)
  const isShowMovieInfo =  useSelector( state => state.movieInfo?.isShow)

  const {
    backdrop_path, 
    title, overview, 
    original_language, 
    vote_average, 
    release_date
  } = movieInfo || ""

  return (movieInfo !== null && isShowMovieInfo) && <div className ={`fixed z-[3] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[35rem] w-[37rem] bg-white text-black rounded-[1rem] `}>

    <div className={`relative h-[60%]`}>
      <img src={"https://image.tmdb.org/t/p/w500" + backdrop_path} alt="" className ={`h-full w-full object-cover rounded-t-[1rem]`}/>
      <h2 className ={`absolute bottom-[2rem] text-white pl-[1rem] text-[2rem] font-semibold`}>{title}</h2>
    </div>

    <div>
{/* 
https://api.themoviedb.org/3/movie/{movie_id} */}
    </div>
  </div>
};

export default MovieDetails;