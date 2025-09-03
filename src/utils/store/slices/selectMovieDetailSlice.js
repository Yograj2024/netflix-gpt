import { createSlice } from "@reduxjs/toolkit";

const selectedMovieInfoSlice = createSlice({
    name : "selectedMovie",
    initialState : {
        movieInfo : null,
        isShow : false,
    },

    reducers : {
        setSelectedMovieInfo : (state, action) => {
            state.movieInfo = action.payload
        },
        
        setIsShow : (state, action) => {
            const {isShow, isOverFlow} = action.payload
            state.isShow = action.payload
        }
    }
})

export const {setSelectedMovieInfo, setIsShow} = selectedMovieInfoSlice.actions
export default selectedMovieInfoSlice.reducer;