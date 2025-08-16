import { createSlice } from "@reduxjs/toolkit";

const gptSerachSlice = createSlice( {
    name : "gptSearchPage",
    initialState : {
        isShowGPTSearchPage : false
    },
    reducers : {
        toggleGPTsearchView : (state) => {
            state.isShowGPTSearchPage = !state.isShowGPTSearchPage
        }
    }
} )

export const { toggleGPTsearchView } = gptSerachSlice.actions
export default gptSerachSlice.reducer;