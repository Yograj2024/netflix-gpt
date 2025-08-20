import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/store/moviesListSlice";


const useMovieTrailer  = (id) => {

    const storeTrailer =  useSelector( store => store.movies.trailerVideo)
    const dispatch     =  useDispatch();

    const getMovieTrailer = async () => {

        const data        = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS);
        const json        = await data.json();
        const filterVideo = json.results.filter( video => video.type === "Trailer")
        const trailer     = filterVideo.length ? filterVideo[0].key : json.results[0]

        dispatch(addTrailerVideo(trailer))
    }

    useEffect( () => { !storeTrailer && getMovieTrailer() }, [])
}

export default useMovieTrailer;