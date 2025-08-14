import MovieCard from "./MovieCard";

const MoviesRow = ({title, movieList}) => {

    return  <div className={`mt-[2rem]`}>
        <h2 className={`text-[2rem] capitalize font-semibold`} >{title}</h2>
        <MovieCard movieList={movieList} />
    </div>
    
};

export default MoviesRow;