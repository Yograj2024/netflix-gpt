import useGetMoviesList from "../customHooks/useGetMoviesList";

const Main = () => {

  useGetMoviesList();

  return (
    <>
      <h1 className={`text-[2rem]`}>main</h1>
    </>
  );
};

export default Main;