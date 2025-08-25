import { useSelector } from "react-redux";
import useMovieTrailer from "../../customHooks/useMovieTrailer";
import { moreInfo, playBtn } from "../../utils/constants";

const HeroSection = () => {

    const storeTrailer  =   useSelector( state => state.movies?.trailerVideo)
    const moviesList    =   useSelector( state => state.movies?.nowPlayingMovies)
    const gpt           =   useSelector( state => state.gptSearchPage.isShowGPTSearchPage)
    const deviceType    =   useSelector( state => state.appConfig.deviceInfo.deviceType)
    const user          =   useSelector( state => state.user)

    const { title, overview, id }    =   moviesList[2]

    useMovieTrailer(id);
 
    return (user && !gpt ) && <>

        {/* Background Video on md:screen*/}
        {
            deviceType !== 'mobile' && 
            <div className ={`w-full lg:h-[44rem] absolute z-[-1] top-[-30px] overflow-hidden`}>
                <iframe className ={`aspect-video object-cover`} 
                    src={"https://www.youtube.com/embed/" + storeTrailer + "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=" + storeTrailer }
                    title="YouTube video player"
                    allow="autoplay; encrypted-media" 
                    referrerPolicy="strict-origin-when-cross-origin" >
                </iframe>
            </div>
        }

        {/* Background video content */}
        <div className ={`px-[1rem] lg:px-[3rem] bg-gradient-to-r from-black/40 absolute top-0 h-full flex flex-col justify-end pb-[2rem] lg:pb-[6rem]`}>
            <h2 className ={` text-white text-[1.5rem] text-center font-bold mb-[1rem] lg:text-left lg:text-[2rem] lg:leading-[2.85rem] lg:w-[32rem]`}> { title } </h2>
            <p className ={` text-white text-[1rem] text-center lg:text-left lg:w-[40%] line-clamp-3 lg:line-clamp-4 `}>  { overview } </p>
            <div className ={`mt-[3rem] flex justify-center lg:justify-normal`}>
                <button className ={`bg-[#E2E8F0] hover:opacity-60 rounded-[0.5rem] capitalize text-center lg:text-[1.2rem] font-semibold lg:w-[7rem] lg:h-[2.5rem] mr-[2rem] grid grid-cols-[40%_auto] place-items-center box-content px-[0.6rem] py-[0.2rem] lg:box-border lg:px-[1rem]`}> 
                    <span className ={`inline-block h-[1rem] lg:h-[1.8rem] w-auto`}> <img src={playBtn} alt=""  className={`h-full w-full object-cover`}/> </span> 
                    play
                </button>
                <button className ={`box-content px-[0.5rem] py-[0.25rem] lg:box-border bg-gray-300/80 rounded-[0.5rem] capitalize text-center text-[0.9rem] lg:text-[1.2rem] font-semibold w-[6.5rem] lg:w-[10rem] lg:h-[2.5rem] grid grid-cols-[25%_auto] lg:grid-cols-[30%_auto] place-items-center lg:px-[0.75rem]`}>  
                    <span className ={`inline-block h-[1rem] lg:h-[2rem] w-auto`}> <img src={moreInfo} alt=""  className={`h-full w-full object-cover`}/> </span> 
                    more info
                </button>
            </div>
        </div>
    </>
};

export default HeroSection;