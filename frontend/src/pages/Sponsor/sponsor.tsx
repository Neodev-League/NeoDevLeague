import Logo from "../../assets/logo";
import "../../style.css";
import "../../glitch.css";

const Sponsor: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a href="http://localhost:5173" target="_blank" rel="noopener noreferrer">
        <Logo />
      </a>
      
    </div>
  );
};

export default Sponsor;
