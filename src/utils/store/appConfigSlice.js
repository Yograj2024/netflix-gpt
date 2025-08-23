import { createSlice } from "@reduxjs/toolkit"

const appConfigSlice = createSlice({
    name : "appConfig",
    initialState : {
        userLanguage : 'en',
        deviceInfo  :  {
            deviceType : '',
            orientation : ''
        }
    },

    reducers : {
        changeLanguage : ( state, action) => {
            state.userLanguage = action.payload;
        },
        setDeviceInfo : (state, action) => {
            const {deviceType, orientation} = action.payload
            state.deviceInfo.deviceType  = deviceType;
            state.deviceInfo.orientation = orientation;
        }
    }
})


export const {changeLanguage, setDeviceInfo} = appConfigSlice.actions;
export default appConfigSlice.reducer;