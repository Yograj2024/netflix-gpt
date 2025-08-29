import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { updatePoster, updateTrailer } from "../utils/store/slices/movieMediaSlice";


const useSetMovieMedia  = (id, posterLink) => {
    const dispatch     =  useDispatch();
    const getMovieTrailer = async () => {
        
        const data        = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS);
        const json        = await data.json();
        const filterVideo = json.results.filter( video => video.type === "Trailer")
        const trailer     = filterVideo.length ? filterVideo[0].key : json.results[0]

        dispatch(updateTrailer(trailer))
        dispatch(updatePoster("https://image.tmdb.org/t/p/w500" + posterLink))
    }
    useEffect( () => { getMovieTrailer() }, [id, posterLink])
}

export default useSetMovieMedia;