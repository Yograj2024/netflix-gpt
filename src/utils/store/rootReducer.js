import { combineReducers } from "@reduxjs/toolkit";
import appConfigeReducer from "./slices/appConfigSlice";
import gptSerachReducer from "./slices/gptSearchSlice";
import movieMediaReducer from "./slices/movieMediaSlice";
import moviesListReducer from "./slices/moviesListSlice";
import userReducer from "./slices/usereSlice";

const appReducers = combineReducers( {
    user    : userReducer,
    movies  : moviesListReducer,
    appConfig     : appConfigeReducer,
    movieMedia    : movieMediaReducer,
    gptSearchPage : gptSerachReducer,
});

const rootReducer = (state, action) => {
    if(action.type === "RESET_APP"){
        state = undefined
    }

    return appReducers(state, action);
}

export default rootReducer;