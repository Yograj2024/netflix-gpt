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
    release_date,
    poster_path
  } = movieInfo || ""

  return (movieInfo !== null && isShowMovieInfo) && 
  <section ref={outOfBox} onClick = { handleBackdropClick  } className ={`fixed flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] h-full w-full bg-black/50`}>
    <div className  ={`bg-white h-[28rem] lg:h-[35rem] w-[86%] lg:w-[36rem] text-black rounded-[1.5rem] p-[5px]`}>

      <div className ={`relative h-[50%] lg:h-[60%]`}>{/* image */} 
        <img src={"https://image.tmdb.org/t/p/w500" + (backdrop_path == null ? poster_path : backdrop_path)} alt="" className ={`h-full w-full object-cover rounded-t-[1.25rem]`}/>
        <h2 className  ={`absolute bottom-[0.5rem] lg:bottom-[1rem] text-white pl-[1rem] line-clamp-1 text-[1.35rem] lg:text-[3rem] font-semibold`}>{title}</h2>
      </div>

      <div className ={` h-[50%] lg:h-[40%] rounded-b-[1.25rem] pt-[1rem] px-[0.8rem]`}>

        <ul className ={`flex items-center gap-x-[1rem] mb-[1rem] `}>
          <li className ={`bg-red-300 px-[18px] rounded-[5px]`}>{release_date == "" ? "..." : release_date.split("-")[0]}</li>
          <li className ={`bg-red-300 px-[18px] rounded-[5px]`}>{vote_average.toFixed(1)}</li>
          <li className ={`bg-red-300 px-[18px] rounded-[5px]`}>{getLanuageName(original_language)}</li>
        </ul>

        <p className ={`text-[0.9rem] line-clamp-5`}>{overview}</p>

         <button className ={`text-white mt-[1rem] bg-red-500 flex items-center px-[0.8rem] py-[3px] lg:px-[12px] lg:py-[3px] rounded-[0.6rem] lg:text-[1rem] capitalize `}>
              get start <span className={`text-[1rem] ml-[0.6rem]`}>&#x276F;</span>
          </button>

      </div>

    </div>
  </section>
  
};

export default MovieDetails;