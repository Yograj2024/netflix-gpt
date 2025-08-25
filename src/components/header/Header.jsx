import HeroSection from './HeroSection';
import NavBar from './NavBar';

const Header = ({isSideBar, setSideBar}) => {
    return <>
      <NavBar isSideBar={isSideBar} setSideBar={setSideBar}/>
      <HeroSection/>
    </>
};

export default Header;