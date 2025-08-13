import { configureStore } from "@reduxjs/toolkit";
import moviesListSlice from "./moviesListSlice";
import useReducer from "./usereSlice";

const appStore = configureStore(
    {
        reducer : {
            user    : useReducer,
            movies  : moviesListSlice
        },
    }
)

export default appStore;