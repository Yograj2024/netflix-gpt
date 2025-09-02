import { useSelector } from "react-redux";

const handleHeaderClasses = ( user, gpt, deviceType, poster ) => {

    const baseBeforeCss = " before:content-[''] before:w-full before:absolute before:z-[-2] before:bg-cover before:bg-center "
    const baseAfterCss  = " after:content-[''] after:absolute after:w-full after:z-[-1] after:bg-black/50 "
    
    let headerCss = "" 
    let beforeImg = `before:bg-[url('${poster}')]`
    if(!user){
        headerCss += " before:h-[100vh] after:h-[100vh]" +  baseBeforeCss +  baseAfterCss + 
        "before:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')] "
        return headerCss;
    }
    
    if(!gpt){
        headerCss += " h-[39rem]";

        if(deviceType == "mobile"){
            headerCss += baseBeforeCss + `before:h-full ` + beforeImg
        }

        return headerCss;

    }else{
        headerCss += baseBeforeCss +  "before:h-[100vh] "+ baseAfterCss + "after:h-[100vh]"
    }

    return headerCss;
};

export default handleHeaderClasses;