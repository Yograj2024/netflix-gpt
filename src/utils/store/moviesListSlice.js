import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice( {
  name : "movies",
  initialState : {
      nowPlayingMovies : null,
      trailerVideo     : null,
      topRatedMovie    : null
  },
  reducers : {
    addNowPlayingMovies : ( state, action) => {
        state.nowPlayingMovies = action.payload
    },
    addTrailerVideo : (state, action) => {
      state.trailerVideo = action.payload
    },
    addTopRatedMovie : ( state, action) => {
      state.topRatedMovie = action.payload
    }
  }
});

export const { addNowPlayingMovies, addTrailerVideo, addTopRatedMovie } = moviesListSlice.actions;
export default moviesListSlice.reducer;
