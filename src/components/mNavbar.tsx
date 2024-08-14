import * as React from "react";
import { Link } from "react-router-dom";
import { Card } from "./dc/Card";
import { Dock } from "./dc/Dock";
import { DockCard } from "./dc/DockCard";
import styles from "./dc/styles.module.scss";

const GRADIENTS: string[] = [
  "/home",
  "/team",
  "/sponsor",
];

const mNav: React.FC = () => {
  return (
    <div className={styles.body}>
      <Dock>
        {GRADIENTS.map((path) => (
          <DockCard key={path}>
            <Link to={path}>
              <Card src={`src/assets${path}.png`} />
            </Link>
          </DockCard>
        ))}
      </Dock>
    </div>
  );
};

export default mNav;
