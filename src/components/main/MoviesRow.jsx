import { useRef, useState } from "react";
import { leftBtn, rightBtn } from "../../utils/constants";
import MovieCard from "./MovieCard";

const MoviesRow = ({title, movieList}) => {

    const scrollRef = useRef(null);
    const [isOverflow, setIsOverflow] = useState(false);

    const moveOn_X = (scroll_distence) => {
        if(scrollRef.current){
            scrollRef.current.scrollBy({
                left : scroll_distence,
                behavior : 'smooth'
            });
        }
    }

    const takeRefFromCard = (ref) => { // Based on whether overflow occurs or not, the slider buttons will be shown or hidden.
        if (ref) {
            scrollRef.current = ref;
            setIsOverflow(ref.scrollWidth > ref.clientWidth);
        }
    };

    return  <div className ={`relative pt-[2rem] w-[90%] m-auto`}>
        {
            isOverflow && <>
                <button className={`bg-red-200 absolute top-[60%] bottom-[50%] translate-y-[-50%] h-[8rem] w-[1.5rem] rounded-[1rem]`}  
                onClick = { (e) => moveOn_X(-1040)}>
                    <img src={leftBtn} alt="" className={`h-full w-full object-contain`}/>
                </button>

                <button className={`bg-red-200 absolute top-[60%] bottom-[50%] translate-y-[-50%] h-[8rem] w-[1.5rem] rounded-[1rem] right-[-0.5rem]`} 
                onClick = { (e) => moveOn_X(1040)}>
                    <img src={rightBtn} alt="" className={`h-full w-full object-contain`}/>
                </button>
            </> 
        }

        <h2 className={`text-[2rem] capitalize font-semibold`} >{title}</h2>
        
        <MovieCard movieList={movieList} sendRef={takeRefFromCard} />
    </div>
};

export default MoviesRow;