import { useDispatch, useSelector } from "react-redux";
import { getLanuageName } from "../../utils/languae_Code";
import { useRef } from "react";
import { setIsShow } from "../../utils/store/slices/selectMovieDetailSlice";

const MovieDetails = () => {

  const movieInfo       =  useSelector( state => state.movieInfo?.movieInfo)
  const isShowMovieInfo =  useSelector( state => state.movieInfo?.isShow)
  const dispatch = useDispatch();
  const outOfBox = useRef(null);

  const handleBackdropClick  = (e) => {
    if(outOfBox.current == e.target){
      dispatch(setIsShow(false))
      document.body.style.overflow = "auto"
    }
  }

  const {
    backdrop_path, 
    title, overview, 
    original_language, 
    vote_average, 
    release_date
  } = movieInfo || ""

  return (movieInfo !== null && isShowMovieInfo) && 
  <section ref={outOfBox} onClick = { handleBackdropClick  } className ={`fixed flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] h-[100vh] w-full bg-black/50`}>
    <div className  ={`h-[35rem] w-[36rem] text-black rounded-[1rem] `}>

      <div className ={`relative h-[60%]`}>{/* image */} 
        <img src={"https://image.tmdb.org/t/p/w500" + backdrop_path} alt="" className ={`h-full w-full object-cover rounded-t-[1rem]`}/>
        <h2 className  ={`absolute bottom-[1rem] text-white pl-[1rem] text-[3rem] font-semibold`}>{title}</h2>
      </div>

      <div className ={`bg-slate-200 h-[calc(100%-60%)] rounded-b-[1rem] p-[1rem]`}>

        <ul className ={`flex items-center gap-x-[1rem] mb-[1rem] `}>
          <li className ={`bg-red-300 px-[18px] rounded-[5px]`}>{release_date.split("-")[0]}</li>
          <li className ={`bg-red-300 px-[18px] rounded-[5px]`}>{vote_average.toFixed(1)}</li>
          <li className ={`bg-red-300 px-[18px] rounded-[5px]`}>{getLanuageName(original_language)}</li>
        </ul>

        <p className ={`text-[0.9rem] line-clamp-5`}>{overview}</p>

        <button className ={`bg-red-600 px-[12px] rounded-[5px] mt-[1rem] text-white capitalize`}>get start</button>

      </div>

    </div>
  </section>
  
};

export default MovieDetails;