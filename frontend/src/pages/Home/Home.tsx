// pages/index.tsx
import Ripple from "../../components/Ripple";
import "../../style.css"

const Home: React.FC = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      <Ripple />
      <div className="relative z-10 text-center">
        <h1 className="text-8xl font-bold text-green-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
          NeoDev League
        </h1>
        <p className="text-1xl font-semibold text-green-900 pt-6">
          The Future of Competative Programming
        </p>
      </div>
    </div>
  );
};

export default Home;
