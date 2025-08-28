import { useSelector } from "react-redux";

export const handleHeaderClasses = ({ user, gpt, deviceType }) => {

  const posterLink = useSelector( state => state.movieMedia.posterLink)
    // base css fragments
    const baseBeforeCss = `before:content-[''] before:w-full before:absolute before:inset-0 before:z-[-1] before:bg-cover before:bg-center`;
    const baseAfterCss = ` after:content-[''] after:w-full after:absolute after:top-0 after:z-[-1] after:bg-black/40 `;

    // ✅ background selection
    let beforeBg = "";
    if (!user) {
      beforeBg = "before:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')]";
    } else if (user && gpt && deviceType !== "mobile") {
      beforeBg = "before:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg')]";
    } else {
      beforeBg = `before:bg-[url(${posterLink})]`;
    }

    // ✅ heights (after + before)
    let heightClasses = "";
    if (!user) {
      heightClasses = "pb-[5rem] lg:after:h-[37.95rem] lg:before:h-[37.95rem]";
    } else if (user && gpt) {
      heightClasses = "lg:after:h-[37.95rem] lg:before:h-[37.95rem]";
    } else if (user && !gpt) {
      heightClasses = "lg:after:h-[42rem] lg:h-[42rem] h-[32rem]";
    }

    return ` relative ${deviceType !== "mobile" ? `${baseAfterCss} after:h-[92vh]` : `${baseAfterCss} after:h-[92vh]`} 
    ${baseBeforeCss} ${beforeBg} ${heightClasses} ${deviceType === "mobile" ? "before:h-[92vh]" : ""} `;
};