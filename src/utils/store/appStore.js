import { configureStore } from "@reduxjs/toolkit";
import appConfigeReducer from "./slices/appConfigSlice";
import gptSerachReducer from "./slices/gptSearchSlice";
import moviesListReducer from "./slices/moviesListSlice";
import userReducer from "./slices/usereSlice";

const appStore = configureStore(
    {
        reducer : {
            user    : userReducer,
            movies  : moviesListReducer,
            appConfig     : appConfigeReducer,
            gptSearchPage : gptSerachReducer,
        },
    }
)

export default appStore;