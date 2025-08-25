import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice( {
  name : "movies",

  initialState : {
    nowPlayingMovies : null,
    trailerVideo     : null,
    topRatedMovie    : null,
    popularMovie     : null,
    upComingMovie    : null
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
    },
    addPopularMovie : ( state, action) => {
      state.popularMovie = action.payload
    },
    addUpComingMovie : ( state, action) => {
      state.upComingMovie = action.payload
    }
  }
});

export const { 
  addNowPlayingMovies, 
  addTopRatedMovie, 
  addUpComingMovie, 
  addTrailerVideo, 
  addPopularMovie
} = moviesListSlice.actions;

export default moviesListSlice.reducer;
