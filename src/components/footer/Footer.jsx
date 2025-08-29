import React from 'react';
import { gitHub, linkedin, netflixLogo } from '../../utils/constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <section className ={`bg-black/90 text-white`}>
    <div className = {` lg:max-w-[1440px] p-[2rem] m-auto`}>
        <div>
            <div className ={`inline-block h-auto w-[8rem] lg:w-[12rem]`}> 
                <img src={netflixLogo} alt="netflixLogo" loading='lazy' className={`h-full w-full  object-cover`}/> 
            </div>
            <p className={`capitalize pl-[1rem]`}> 
                this project was built for learning purposes. <br/> 
                UI design inspiration was taken from netflix.  <br/>
                it recommends movies using GPT API
            </p>
        </div>

        <div className ={`grid grid-cols-4 gap-x-[1rem] px-[1rem] mt-[2rem]`}>
            <div className ={``}>
                <h3 className={`capitalize text-[1.5rem] font-semibold`}>quick links</h3>
                <ul className={`capitalize leading-[2rem] pt-[1rem]`}>
                    <li>home</li>
                    <li>gpt search</li>
                    <li>trending</li>
                    <li>profile</li>
                    <li>favorites</li>
                </ul>
            </div>

            <div className ={``}>
                <h3 className={`capitalize text-[1.5rem] font-semibold`}>source code/ tech stack</h3>
                <ul className ={`capitalize leading-[2rem] pt-[1rem]`}>
                    <li>react.js + redux</li>
                    <li>tailwind</li>
                    <li>firebase authentication</li>
                    <li className ={`hover:underline hover:text-blue-300`}>
                        <Link to={`https://github.com/Yograj2024/netflix-gpt/tree/main/src`}> view Source code</Link>
                    </li>
                </ul>
            </div>

            <div className ={`pl-[5rem]`}>
                <h3 className={`capitalize text-[1.5rem] font-semibold`}>resources</h3>
                <ul className={`capitalize leading-[2rem] pt-[1rem]`}>
                    <li>google firebase</li>
                    <li className={`hover:underline hover:text-blue-300`}>
                        <Link to={`https://www.flaticon.com/`}>flateicon for icons</Link>
                    </li>
                </ul>
            </div>

            <div className ={`pl-[6rem]`}>
                <h3 className={`capitalize text-[1.5rem] font-semibold`}>support</h3>
                <ul className={`capitalize leading-[2rem] pt-[1rem]`}>
                    <li>contact us</li>
                    <li>feedback</li>
                    <li></li>
                </ul>
            </div>
        </div>

        <div className ={`border-t-[0.1px] border-gray-500 mt-[2rem] pt-[1rem] flex items-center justify-between pr-[2rem]`}>
            <h3>© 2025 netflix-GPT. learning project. not affiliated with netflix.</h3>
            <div className ={`flex items-center gap-x-[1rem]`}>
                <Link to={`https://github.com/Yograj2024`} className ={`inline-block h-[2rem] aspect-square rounded-full`}>
                    <img src={gitHub} alt="" className={`h-full w-full object-cover`}/>
                </Link>
                <Link to={``} className ={`inline-block h-[2rem] aspect-square rounded-full`}>
                    <img src={linkedin} alt="" className={`h-full w-full object-cover`}/>
                </Link>
            </div>
        </div>
    </div>
  </section>
};

export default Footer;