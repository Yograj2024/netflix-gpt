import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDeviceInfo } from "../utils/store/slices/appConfigSlice";

const getDeviceInfo  = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    let deviceType = '';
    let orientation = '';

    // device type detection
    if      ( width <= 767)  deviceType = 'mobile'
    else if ( width <= 1024) deviceType = 'tablet'
    else if ( width <= 1440) deviceType = 'destop'
    else                     deviceType = 'large monitor'

    // orientation detection
    orientation = width > height ? 'landscape' : 'portrait';

    return { deviceType, orientation};

}

const useDeviceType = () => {

    const dispatch = useDispatch()

    useEffect( () => {
        // first load 
        dispatch(setDeviceInfo( getDeviceInfo() ))

        // on resize and orientation change 
        const handleSizeChange = () => dispatch(setDeviceInfo( getDeviceInfo() ));

        window.addEventListener( "resize", handleSizeChange);
        window.addEventListener( "orientationchange", handleSizeChange);

        return () => {
            window.removeEventListener("resize", handleSizeChange);
            window.removeEventListener("orientationchange", handleSizeChange);
        };
    }, [])
}

export default useDeviceType;