import { configureStore } from "@reduxjs/toolkit"
import useReducer  from "./usereSlice";

const appStore = configureStore(
    {
        reducer  : {
            user : useReducer
        },
    }
)

export default appStore;