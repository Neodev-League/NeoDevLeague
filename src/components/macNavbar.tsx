import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./MacNav/Card";
import { Dock } from "./MacNav/Dock";
import { DockCard } from "./MacNav/DockCard";
import arrow from "../assets/Png/arrow-green.png";

const GRADIENTS: string[] = ["/home", "/team", "/sponsor"];

const MacNavbar: React.FC = () => {
  const [visible, setVisibility] = useState(false);

  const handleArrowClick = () => {
    setVisibility(!visible);
  };

  return (
    <div className="relative sm:top-0 mini:top-0">
      <div className="invisible md:visible">
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

      <div className="visible md:hidden z-100 h-auto relative">
        <Dock>
          {visible &&
            GRADIENTS.map((path) => (
              <DockCard key={path}>
                <Link to={path}>
                  <Card src={`src/assets/png/${path}.png`} />
                </Link>
              </DockCard>
            ))}
          <div
            onClick={handleArrowClick}
            className={`fixed top-1/2 right-0 transform -translate-y-1/2 z-20 cursor-pointer p-3 w-10 bg-white/70 ${
              visible
                ? "translate-x-1/2 transparent right-[-1.25rem] rounded-tr-md rounded-br-md"
                : "translate-x-0 rounded-full"
            }`}
          >
            <img
              className={`h-5 transition-transform duration-300 ${
                visible ? "rotate-180" : "rotate-0"
              }`}
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
