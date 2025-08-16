import { configureStore } from "@reduxjs/toolkit";
import moviesListSlice from "./moviesListSlice";
import useReducer from "./usereSlice";
import gptSerachSlice from "./gptSearchSlice"

const appStore = configureStore(
    {
        reducer : {
            user    : useReducer,
            movies  : moviesListSlice,
            gptSearchPage :gptSerachSlice
        },
    }
)

export default appStore;