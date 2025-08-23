import { useSelector } from 'react-redux';
import { cancleIcon, GPTSerachIcon, homeIcon, languageIcon, playListIcon, signOutIcon } from '../utils/constants';

const SideBar = () => {

  const deviceType = useSelector( store => store.appConfig.deviceInfo.deviceType)
  const userImg = useSelector( store => store.user?.photoURL)
  const userName = useSelector( store => store.user?.displayName)
  const userEmail = useSelector( store => store.user?.email)

  return deviceType == 'mobile' && <div className ={`fixed h-[100%] w-[90%] bg-gradient-to-r from-orange-100 to-orange-50 z-[3] p-[1rem]`}>
    <span className ={`inline-block h-[2rem] aspect-square absolute right-[0.8rem] top-[0.8rem] active:bg-red-400 rounded-full active:p-[0.3rem]`}>
      <img src={cancleIcon} alt="" className={`h-full w-full object-cover`}/>
    </span>
    <div className ={`h-[6rem] mt-[1rem] w-full rounded-[1.2rem] flex items-center pl-[0.4rem] gap-x-[1rem]`}>
      <div className ={`h-[4rem] aspect-square border rounded-[1rem] `}>
        <img src={userImg} alt=""  className ={`h-full w-full object-cover rounded-[1rem]`}/>
      </div>
      <div className ={` h-full pt-[1.25rem]`}>
        <strong className={`text-[1rem]`}>{userName}</strong>
        <p className={`text-[1rem]`}>{userEmail}</p>
      </div>
    </div>

    {/* optiosn */}
    <div className ={` pt-[1rem]`}>
      <ul className ={`flex flex-col gap-y-[1rem] text-[1.25rem] capitalize`}>
        <li className ={`text-[1.125rem] grid grid-cols-[12%_auto] items-center pl-[1rem] py-[0.5rem] rounded-[0.4rem] active:bg-orange-200 `}>
          <span className ={`inline-block mr-[0.785rem] h-[1.325rem] aspect-square`}> <img src={homeIcon} alt=""  className={`h-full w-full object-cover`}/> </span>
          <span>home</span>
        </li>
        <li className ={`text-[1.125rem] grid grid-cols-[12%_auto] items-center pl-[1rem] py-[0.5rem] rounded-[0.4rem] active:bg-orange-200 `}>
          <span className ={`inline-block mr-[0.785rem] h-[1.7rem] aspect-square`}> <img src={GPTSerachIcon} alt=""  className={`h-full w-full object-cover`}/> </span>
          <span>GPT Search</span>
        </li>
        <li className ={`text-[1.125rem] grid grid-cols-[12%_auto] items-center pl-[1rem] py-[0.5rem] rounded-[0.4rem] active:bg-orange-200 `}>
          <span className ={`inline-block mr-[0.785rem] h-[1.25rem] aspect-square`}> <img src={languageIcon} alt=""  className={`h-full w-full object-cover`}/> </span>
          <span>language</span>
        </li>
        <li className ={`text-[1.125rem] grid grid-cols-[12%_auto] items-center pl-[1rem] py-[0.5rem] rounded-[0.4rem] active:bg-orange-200 `}>
          <span className ={`inline-block mr-[0.785rem] h-[1.25rem] aspect-square`}> <img src={playListIcon} alt=""  className={`h-full w-full object-cover`}/> </span>
          <span>playlist</span>
        </li>
        <li className ={`text-[1.125rem] grid grid-cols-[12%_auto] items-center pl-[1rem] py-[0.5rem] rounded-[0.4rem] active:bg-orange-200`}>
          <span className ={`inline-block mr-[0.785rem] h-[1.56rem] aspect-square`}> <img src={signOutIcon} alt=""  className={`h-full w-full object-cover`}/> </span>
          <span>sigh out</span>
        </li>
      </ul>
    </div>
  </div>
};

export default SideBar;