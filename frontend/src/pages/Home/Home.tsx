import Ripple from "../../components/Ripple";
import Navbarr from "../../components/Navbar";
import Texttt from "../../components/Texttt";
import MNav from "../../components/mNavbar"; // THESE TWO NAVS ARE OUT OF USE WHILE THE UNDER ONE IS IN USE
import Logo from "../../assets/logo";
import { Dock, DockIcon } from "../../components/nDock";
import "../../style.css";
import "../../glitch.css";
import WordRotate from "../../components/textreveal";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <a
          href="http://localhost:5173"
          target="_blank"
          rel="noopener noreferrer"
        >
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

      <div className="text-center mt-40">
        <span className="text-4xl md:text-6xl font-bold">The Future of</span>
        <br />
        <span className="text-2xl md:text-4xl font-bold">
          <WordRotate
            className="font-bold"
            words={[
              "Competitive Programming",
              "Collaboration.",
              "Innovation.",
              "Technology",
              "ETC.",
            ]}
          />
        </span>
      </div>
    </div>
  );
};

export default Home;
