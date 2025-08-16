
const ShimmerUI = () => {
    return  <div className="relative pt-[1rem] h-[100vh] w-full bg-slate-300 overflow-hidden ">
      {/* Background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-l from-slate-300 via-slate-400 to-slate-500 "></div>

       <div className=" w-full flex justify-between items-center pl-[4.5rem] pr-[8rem] z-20 animate-pulse">
            <div className="h-[3rem] w-[10.5rem]  bg-slate-400/60 rounded-[8px] "></div>
            <div className="flex gap-[1rem] items-center">
                <div className="h-[1.85rem] w-[6rem] bg-slate-400/50 rounded-[8px] "></div>
                <div className="h-[1.85rem] w-[6rem] bg-slate-400/50 rounded-[8px]"></div>
                <div className="h-[2.85rem] aspect-square bg-slate-400/50 rounded-[8px] "></div>
            </div>
        </div>

      {/* Content container */}
      <div className={`px-[5rem] absolute top-0 h-full flex flex-col justify-end pb-[2.5rem] animate-pulse`}>
            <div className={`h-[2rem] w-[31rem] bg-slate-400 rounded-[5px] `}></div>
            <div className={`h-[2rem] w-[16rem] bg-slate-400 rounded-[5px] mt-[1rem]`}></div>
            <div className={`mt-[1.8rem]`}>
                <span className={`inline-block h-[1.6rem] w-[92%] bg-slate-400 mb-[0.5rem] rounded-[5px]`}></span>
                <span className={`inline-block h-[1.6rem] w-[82%] bg-slate-400 mb-[0.5rem] rounded-[5px]`}></span>
            </div>
            <div className={`mt-[3rem] flex`}>
                <button className={`bg-slate-400 rounded-[0.5rem] w-[7rem] h-[2.5rem] mr-[2rem]`}> 
                </button>
                <button className={`bg-slate-400 rounded-[0.5rem] w-[10rem] h-[2.5rem]`}>  
                </button>
            </div>
        </div>
    </div>
};

export default ShimmerUI;