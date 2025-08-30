import { Link } from 'react-router-dom';
import { footerLinkSec, gitHub, linkedin, netflixLogo } from '../../utils/constants';

const ShowListItems = ({data}) => {
    return <ul className ={`mt-[0.5rem] lg:mt-[1rem] capitalize leading-[2rem]`}>
        {
            data.map( ({text, link = ""}, index) => !link 
              ? <li key={`li-${index}`} className ={`list-square list-inside`}>{text}</li>
              : <li key={`li-${index}`} className ={``}> <Link to={link} className={`hover:text-blue-400 pb-[1.5px] hover:underline hover:underline-offset-4`}>{text}</Link> </li>
            )
        }
    </ul>
}

const Footer = () => {

    const iconCss = `hover:scale-[120%] hover:shadow-[0_0_10px_2px_rgba(6,182,212,0.5)]  inline-block h-[2rem] aspect-square rounded-full transition-all duration-150 ese-in`

    return <section className ={`bg-black/90 text-white`}>
        <div className = {` lg:max-w-[1440px] p-[1rem] lg:p-[2rem] m-auto`}>
            <div>
                <div className ={`inline-block h-auto w-[8rem] lg:w-[12rem]`}> 
                    <img src={netflixLogo} alt="netflixLogo" loading='lazy' className={`h-full w-full  object-cover`}/> 
                </div>
                <p className={`capitalize text-[0.875rem] lg:text-[1rem] pl-[1rem]`}> 
                    this project was built for learning purposes. <br/> 
                    UI design inspiration was taken from netflix.  <br/>
                    it recommends movies using GPT API
                </p>
            </div>

            <div className ={`flex flex-wrap gap-y-[2rem] lg:grid lg:grid-cols-4 gap-x-[4.5rem] lg:gap-x-[1rem] px-[1rem] mt-[2rem] `}>
                {
                    footerLinkSec.map( ({title, li_items}, index) => <div key={`title-${index}`} className ={`${(title == 'support' || title == 'resources') && 'lg:pl-[5rem]'}`}>
                        <h3 className={`capitalize text-[1.25rem] lg:text-[1.5rem] font-semibold`} >{title}</h3>
                        <ShowListItems data={li_items} />
                    </div>)
                }
            </div>

            <div className ={`border-t-[0.1px] border-gray-500 mt-[2rem] pt-[1rem] flex items-center gap-x-[1rem] justify-between pr-[0.8rem] lg:pr-[2rem]`}>
                <h3 className={`text-[0.875rem] lg:text-[1rem]`}>© 2025 netflix-GPT. learning project. not affiliated with netflix.</h3>
                <div className ={`flex items-center gap-x-[1rem] lg:pr-[2rem]`}>
                    <Link to={`https://github.com/Yograj2024`} className ={`${iconCss} hover:mr-[0.5rem]`}>
                        <img src={gitHub} alt="" className ={`h-full w-full object-cover`}/>
                    </Link>
                    <Link to={``} className ={`${iconCss} hover:ml-[1rem]`}>
                        <img src={linkedin} alt="" className ={`h-full w-full object-cover`}/>
                    </Link>
                </div>
            </div>
        </div>
    </section>
};

export default Footer;