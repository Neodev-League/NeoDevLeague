// pages/index.tsx
import Ripple from "../../components/Ripple";
import Navbarr from "../../components/Navbar";
import Texttt from "../../components/Texttt";
import MNav from "../../components/mNavbar"; // THESE TWO NAVS ARE OUT OF USE WHILE THE UNDER ONE IS IN USE
import Logo from "../../assets/logo";
import { Dock, DockIcon } from "../../components/nDock";
import "../../style.css";
import "../../glitch.css";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden scroll-pb-64">
      <div className="fixed top-0 left-0 w-full z-50">
        {/* 
        <Dock className="bg-gradient-to-b from-transparent via-transparent to-transparent backdrop-blur-md">
          <DockIcon>ICN1</DockIcon>
          <DockIcon className="cl">ICN2</DockIcon>
          <DockIcon>ICN3</DockIcon>
          <DockIcon>ICN4</DockIcon>
          <DockIcon>ICN5</DockIcon>
          {/* Add more stuff if needed 
        </Dock> 
        */}
        <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer">
          <Logo />
        </a>
        <MNav />
      </div>

      <div className="relative flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Texttt />
        </div>
        <Ripple />
      </div>
    </div>
  );
};

export default Home;
