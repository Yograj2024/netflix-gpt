import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setIsShow, setSelectedMovieInfo } from "../../utils/store/slices/selectMovieDetailSlice";

const MovieCard = ({movieList, sendRef}) => {

    const dispatch  = useDispatch();
    const scrollRef = useRef();
    
    // useEffect( () => {
    //     const element = scrollRef.current;
    //     const onWheel = (e) => {
    //     if(e.deltaY !== 0 ){
    //         e.preventDefault();
    //         element.scrollLeft += e.deltaY;
    //     }
    //     };
    //     element.addEventListener("wheel", onWheel, { passive: false });
    //     return () => element.removeEventListener("wheel", onWheel);
    // }, []);  

    const handleClick = (info) => {
        dispatch(setSelectedMovieInfo(info)) 
        dispatch(setIsShow(true))
        document.body.style.overflow = "hidden"
    }

    useEffect( () => {
        if(sendRef){
            sendRef(scrollRef.current)
        }
    }, [sendRef]);
    
    return movieList && <div ref={scrollRef}  className ={` lg:pl-0 py-[1rem] w-[98%] lg:w-[93%] m-auto flex gap-x-[1rem] lg:gap-x-[1.4rem] overflow-x-scroll hide-scrollbar`}>
        { 
            movieList.map( (movie, index) => {
                const {title, poster_path, id} = movie
                return poster_path != null && <div  key={id} onClick = { (e) => handleClick(movie) }  className ={`h-[16rem] rounded-[1rem] lg:h-[16rem] w-[11.4rem] flex-shrink-0 hover:scale-[90%] hover:shadow-[0_0_8px_5px_rgba(255,0,0,0.7)] transition-all duration-150 ease-linear`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} 
                    alt={`moviePoster_${title}`} loading="lazy"
                    className ={`h-full w-full object-cover rounded-[1rem]`}
                    />
                </div>
            })
        }
    </div>
};

export default MovieCard;