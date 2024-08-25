import * as React from "react";
import { Link } from "react-router-dom";
import { Card } from "./MacNav/Card";
import { Dock } from "./MacNav/Dock";
import { DockCard } from "./MacNav/DockCard";

const GRADIENTS: string[] = [
  "/home",
  "/team",
  "/sponsor",
];

const macNavbar: React.FC = () => {
  return (
    <div>
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
  );
};

export default macNavbar;
