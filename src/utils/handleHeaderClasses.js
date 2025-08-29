
export const handleHeaderClasses = ({ user, gpt, deviceType }) => {

    // base css fragments
    const baseBeforeCss = `before:content-[''] before:w-full before:absolute before:inset-0 before:z-[-1] before:bg-cover before:bg-center`;
    const baseAfterCss = `after:content-[''] after:w-full after:absolute after:top-0 after:z-[-1] after:bg-black/40 `;

    // ✅ heights (after + before)
    let heightClasses = "";
    if (!user) {
      heightClasses = "pb-[5rem] lg:after:h-[37.95rem] lg:before:h-[37.95rem]";
    } else if (user && gpt) {
      heightClasses = "lg:after:h-[37.95rem] lg:before:h-[37.95rem]";
    } else if (user && !gpt) {
      heightClasses = "lg:after:h-[42rem] lg:h-[42rem] h-[32rem]";
    }

    return ` relative`;
};