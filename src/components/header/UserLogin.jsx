import { useSelector } from "react-redux";
import useMovieTrailer from "../../customHooks/useMovieTrailer";
import { moreInfo, playBtn } from "../../utils/constants";

const UserLogin = (props) => {

    const storeTrailer  =   useSelector( store => store.movies.trailerVideo)
    const moviesList    =   useSelector( store => store.movies?.nowPlayingMovies)

    const { title, overview, id }    =   moviesList[8]

    useMovieTrailer(id);

    return <>
        <div className={`h- w-full absolute z-[-1] top-[-170px]`}> {/* hero section bg-video */}
           <iframe className ={`object-cover`} width="1518" height="980"
            src={"https://www.youtube.com/embed/" + storeTrailer + "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=" + storeTrailer }
            title="YouTube video player"
            allow="autoplay; encrypted-media" 
            referrerPolicy="strict-origin-when-cross-origin" >
           </iframe>
        </div>
        <div className={`px-[5rem] absolute bottom-[3rem] `}>
            <h2 className={` text-white text-[2.25rem] font-bold mb-[1rem]`}> { title } </h2>
            <p className={` text-white text-[1rem] w-[40%] line-clamp-3 `}>  { overview } </p>
            <div className={`mt-[3rem] flex`}>
                <button className={`bg-[#E2E8F0] hover:opacity-60 rounded-[0.5rem] capitalize text-center text-[1.2rem] font-semibold w-[7rem] h-[2.5rem] mr-[2rem] grid grid-cols-[40%_auto] place-items-center px-[1rem]`}> 
                    <span className={`inline-block h-[1.8rem] w-auto`}> <img src={playBtn} alt=""  className={`h-full w-full object-cover`}/> </span> 
                    play
                </button>
                <button className={`bg-gray-300/80 rounded-[0.5rem] capitalize text-center text-[1.2rem] font-semibold w-[10rem] h-[2.5rem] grid grid-cols-[30%_auto] place-items-center px-[0.75rem]`}> 
                    <span className={`inline-block h-[2rem] w-auto`}> <img src={moreInfo} alt=""  className={`h-full w-full object-cover`}/> </span> 
                    more info
                </button>
            </div>
        </div>
    </>
};

export default UserLogin;