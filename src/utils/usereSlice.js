import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        userLogedIn: (state, action) => {
            return action.payload
        },
        
        userLogOut: (state, action) => {
            return null
        }
    }
})

export const {userLogedIn, userLogOut} = userSlice.actions
export default userSlice.reducer;