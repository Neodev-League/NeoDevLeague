import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./MacNav/Card";
import { Dock } from "./MacNav/Dock";
import { DockCard } from "./MacNav/DockCard";
import arrow from "../assets/Png/arrow.png";

const GRADIENTS: string[] = ["/home", "/team", "/sponsor"];

const MacNavbar: React.FC = () => {
  const [small, setSmall] = useState(false);

  const handleArrowClick = () => {
    setSmall(!small);
  };

  return (
    <div className="relative sm:top-0 mini:top-0">
      <div className="sm:invisible mini:invisible md:visible lg:visible">
        <Dock>
          {GRADIENTS.map((path) => (
            <DockCard key={path}>
              <Link to={path}>
                <Card src={`src/assets/png/${path}.png`} />
              </Link>
            </DockCard>
          ))}
        </Dock>
      </div>

      <div className="sm:visible mini:visible md:hidden lg:hidden z-100 h-auto relative">
        <Dock>
          {small && 
            GRADIENTS.map((path) => (
              <DockCard key={path}>
                <Link to={path}>
                  <Card src={`src/assets/png/${path}.png`} />
                </Link>
              </DockCard>
            ))
          }
          <div 
            onClick={handleArrowClick}
            className={`fixed top-1/2 right-0 transform ${small ? 'translate-x-1/2' : 'translate-x-0'} -translate-y-1/2 z-20 cursor-pointer w-12 ${small ? '' : 'bg-transparent rounded-full'}`}
            style={{
              backgroundColor: small ? 'transparent' : 'rgba(0, 0, 0, 0.1)',
              padding: small ? '0' : '0.5rem',
              right: small ? '-1rem' : '0', 
            }}
          >
            <img
              className={`h-5 transition-transform duration-300 ${small ? 'rotate-180' : 'rotate-0'}`}
              src={arrow}
              alt="arrow"
            />
          </div>
        </Dock>
      </div>
    </div>
  );
};

export default MacNavbar;