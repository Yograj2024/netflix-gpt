import { createSlice } from "@reduxjs/toolkit"

const appConfigSlice = createSlice({
    name : "appConfig",
    initialState : {
        userLanguage : 'en'
    },

    reducers : {
        changeLanguage : ( state, action) => {
            state.userLanguage = action.payload;
        }
    }
})


export const {changeLanguage} = appConfigSlice.actions;
export default appConfigSlice.reducer;