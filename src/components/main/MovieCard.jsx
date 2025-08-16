import { useEffect, useRef } from "react";
import { leftBtn, rightBtn } from "../../utils/constants";

const MovieCard = ({movieList, sendRef}) => {

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

    useEffect( () => {
        if(sendRef){
            sendRef(scrollRef.current)
        }
    }, [sendRef]);
    
    return movieList && <div ref={scrollRef} className ={`pl-[0.5rem] py-[1rem] w-[95%] m-auto flex gap-x-[2rem] overflow-x-scroll hide-scrollbar`}>

        { 
            movieList.map( ({title,poster_path, vote_average, id} ) => {
                return <div key={id} className ={`h-[16rem] w-[11rem] flex-shrink-0`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} 
                    alt={`moviePoster_${title}`} 
                    className ={`h-full w-full object-cover rounded-[1rem]`}
                    />
                </div>
            })
        }
    </div>
};

export default MovieCard;