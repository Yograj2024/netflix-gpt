import { configureStore } from "@reduxjs/toolkit";
import moviesListSlice from "./moviesListSlice";
import useReducer from "./usereSlice";
import gptSerachSlice from "./gptSearchSlice"
import appConfigeSlice from "./appConfigSlice"

const appStore = configureStore(
    {
        reducer : {
            user    : useReducer,
            movies  : moviesListSlice,
            gptSearchPage : gptSerachSlice,
            appConfig     : appConfigeSlice,
        },
    }
)

export default appStore;