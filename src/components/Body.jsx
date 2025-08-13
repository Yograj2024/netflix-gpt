import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";

const Body = () => {
  const location = useLocation();
  const isLoginpage = location.pathname === "/"

  return <>
    <header>
      <Header loginForm={<Outlet/>}/>
    </header>

    <main>
     {!isLoginpage  && <Outlet/>}
    </main>

    <footer>

    </footer>
  </>
};

export default Body;