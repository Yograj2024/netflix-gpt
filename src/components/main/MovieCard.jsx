import { useEffect, useRef } from "react";

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
    
    return movieList && <div ref={scrollRef} 
    className ={`lg:pl-0 py-[1rem] w-[98%] lg:w-[93%] m-auto flex gap-x-[1rem] lg:gap-x-[1.4rem] overflow-x-scroll hide-scrollbar`}>

        { 
            movieList.map( ({title, poster_path, id} ) => {
                return poster_path != null && <div key={id} className ={` h-[16rem] lg:h-[16rem] w-[11.4rem] flex-shrink-0`}>
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