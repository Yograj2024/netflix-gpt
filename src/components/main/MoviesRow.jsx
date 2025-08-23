import { useRef, useState } from "react";
import { leftBtn, rightBtn } from "../../utils/constants";
import MovieCard from "./MovieCard";
import useGetCategoryList from "../../customHooks/useGetCategoryList";

const MoviesRow = (props) => {
    
    const {category, movieList, fetchUrl} = props

    const scrollRef = useRef(null);
    const [isOverflow, setIsOverflow] = useState(false);
    
    useGetCategoryList(fetchUrl,category);

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


    return  <div className ={`relative pt-[2rem] w-[90%] lg:w-full m-auto`}>
        {
            isOverflow && <>
                <button className ={`hidden lg:block bg-red-200 absolute top-[60%] bottom-[50%] translate-y-[-50%] h-[4rem] w-[0.8rem] lg:h-[8rem] lg:w-[1.5rem] rounded-[1rem] left-[-1rem] lg:left-0`}  
                onClick = { (e) => moveOn_X(-scrollRef.current.clientWidth)}>
                    <img src={leftBtn} alt="" className={`h-full w-full object-contain`}/>
                </button>

                <button className ={`hidden lg:block bg-red-200 absolute top-[60%] bottom-[50%] translate-y-[-50%] h-[4rem] w-[0.8rem] lg:h-[8rem] lg:w-[1.5rem] rounded-[1rem] right-[-1rem] lg:right-[1rem]`} 
                onClick = { (e) => moveOn_X(scrollRef.current.clientWidth)}>
                    <img src={rightBtn} alt="" className={`h-full w-full object-contain`}/>
                </button>
            </> 
        }

        <h2 className={`text-[1.625rem] lg:text-[2rem] capitalize font-semibold`} >{category}</h2>
        
        <MovieCard movieList={movieList} sendRef={takeRefFromCard} />
    </div>
};

export default MoviesRow;