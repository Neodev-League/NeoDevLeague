// pages/index.tsx
import Ripple from "../../components/Ripple";
import Navbarr from "../../components/Navbar";
import MNav from "../../components/mNavbar"; // Changed mNav to MNav to follow React conventions
import "../../style.css";
import "../../glitch.css";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden pb-96 scroll-pb-64">
      <div className="fixed top-0 left-0 w-full z-50">
        <MNav /> {}
        <Navbarr />
      </div>
      <div className="relative flex items-center justify-center min-h-screen">
        <Ripple />
        <div className="relative z-10 text-center p-4">
          <h1
            className="text-8xl font-bold hero glitch layers"
            data-text="NeoDev"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span>NeoDev</span>
          </h1>
          <br />
          <h1
            className="text-6xl font-extrabold text-white pb-3 relative"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="relative z-10">League</span>
            <span className="absolute top-0 left-0 w-full h-full text-white z-0 opacity-50 text-shadow-md blur-sm">
              League
            </span>
          </h1>

          <br />
          <p
            className="text-2xl font-semibold bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 inline-block text text-transparent bg-clip-text pb-8"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            The Future of Competitive Programming
          </p>
          <br />
          <p
            className="text-1xl font-bold bg-gradient-to-r from-slate-50 via-slate-200 to-slate-100 inline-block text text-transparent bg-clip-text pt-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Contact Us: &nbsp;
          </p>
          <p
            className="text-1xl font-thin bg-gradient-to-r from-slate-50 via-slate-200 to-slate-100 inline-block text text-transparent bg-clip-text pt-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            neodevleague@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
