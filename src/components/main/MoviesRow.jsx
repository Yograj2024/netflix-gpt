import { useRef } from "react";
import { leftBtn, rightBtn, sliderBtnCss } from "../../utils/constants";
import MovieCard from "./MovieCard";

const MoviesRow = ({title, movieList}) => {

    const scrollRef = useRef(null);

    const moveOn_X = (scroll_distence) => {
        console.log(scroll_distence)
        if(scrollRef.current){
            scrollRef.current.scrollBy({
                left : scroll_distence,
                behavior : 'smooth'
            });
        }
    }

    const takeRefFromCard = (ref) => scrollRef.current = ref; 

    return  <div className ={`relative mt-[2rem] w-[90%] m-auto`}>

        <button className ={`${sliderBtnCss}`} onClick = { (e) => moveOn_X(-1040)}>
            <img src={leftBtn} alt="" className={`h-full w-full object-contain`}/>
        </button>

        <button className ={`${sliderBtnCss} right-[-0.5rem]`} onClick = { (e) => moveOn_X(1040)}>
            <img src={rightBtn} alt="" className={`h-full w-full object-contain`}/>
        </button>

        <h2 className={`text-[2rem] capitalize font-semibold`} >{title}</h2>
        
        <MovieCard movieList={movieList} sendRef={takeRefFromCard} />
    </div>
};

export default MoviesRow;