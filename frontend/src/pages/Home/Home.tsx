// pages/index.tsx
import Ripple from "../../components/Ripple";
import "../../style.css";
import "../../glitch.css";

const Home: React.FC = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      <Ripple />
      <div className="relative z-10 text-center">
        <h1
          className="text-8xl font-bold hero glitch layers"
          data-text="NeoDev"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span>NeoDev</span>
        </h1>
        <br />
        <h1
          className="text-6xl font-bold bg-gradient-to-r from-slate-50 via-slate-200 to-slate-100 inline-block text text-transparent bg-clip-text  pb-3"
          data-text="League"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <span>League</span>
        </h1>
        <br />
        <p
          className="text-1xl font-bold bg-gradient-to-r from-slate-50 via-slate-200 to-slate-100 inline-block text text-transparent bg-clip-text pt-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          The Future of Competitive Programming
        </p>
      </div>
    </div>
  );
};

export default Home;
