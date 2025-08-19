import { createSlice } from "@reduxjs/toolkit";

const gptSerachSlice = createSlice( {
    name : "gptSearchPage",
    initialState : {
        isShowGPTSearchPage :  false,
        gptMoviesName       :  null,
        gptMoviesInfo       :  null
    },
    reducers : {
        toggleGPTsearchView : (state) => {
            state.isShowGPTSearchPage = !state.isShowGPTSearchPage
        },
        gptRecommendedMovies : ( state, action ) => {
            const { moviesName, moviesInfo} = action.payload
            state.gptMoviesName =   moviesName;
            state.gptMoviesInfo =   moviesInfo;
        }
    }
} )

export const { toggleGPTsearchView, gptRecommendedMovies } = gptSerachSlice.actions
export default gptSerachSlice.reducer;