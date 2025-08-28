import { createSlice } from "@reduxjs/toolkit";

const movieMediaSlice = createSlice({
    name : "movieMedia",

    initialState : {
        trailerLink : null,
        posterLink  : null
    },

    reducers:{
        updateTrailer : (state, action) =>{
            state.trailerLink = action.payload
        },

        updatePoster : (state, action) => {
            state.posterLink = action.payload
        }
    }

})

export const {updatePoster, updateTrailer} = movieMediaSlice.actions

export default movieMediaSlice.reducer;