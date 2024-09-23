import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./MacNav/Card";
import { Dock } from "./MacNav/Dock";
import { DockCard } from "./MacNav/DockCard";
import { LoadingAnimation } from "./MacNav/Loading/loading";
import Arrow from "../assets/Png/arrow-green.png";
import Home from "../assets/Png/home.png";
import Team from "../assets/Png/team.png";
import Sponsor from "../assets/Png/sponsor.png";

interface Paths {
  ImgUrl: string;
  Path: string;
}

const Pages: Paths[] = [
  {
    ImgUrl: Home,
    Path: "/home",
  },
  {
    ImgUrl: Team,
    Path: "/team",
  },
  {
    ImgUrl: Sponsor,
    Path: "/sponsor",
  },
];

const MacNavbar: React.FC = () => {
  const [visible, setVisibility] = useState(false);
  const [loading, setLoading] = useState("");

  const handleArrowClick = () => {
    setVisibility(!visible);
  };
  const handleCardClick = (imgUrl: any) => {
    setLoading(imgUrl);

    setTimeout(() => {
      setLoading("");
    }, 1000);
  };

  return (
    <div className="relative top-0">
      <div className="invisible md:visible">
        <Dock>
          {Pages.map((path) => (
            <DockCard key={path.ImgUrl}>
              <Link to={path.Path} onClick={() => handleCardClick(path.ImgUrl)}>
                {loading === path.ImgUrl ? (
                  <LoadingAnimation />
                ) : (
                  <Card src={path.ImgUrl} />
                )}
              </Link>
            </DockCard>
          ))}
        </Dock>
      </div>

      <div className="visible md:hidden z-100 h-auto relative">
        <Dock>
          {visible &&
            Pages.map((path) => (
              <DockCard key={path.ImgUrl}>
                <Link
                  to={path.Path}
                  onClick={() => handleCardClick(path.ImgUrl)}
                >
                  {loading === path.ImgUrl ? (
                    <LoadingAnimation />
                  ) : (
                    <Card src={path.ImgUrl} />
                  )}
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
              src={Arrow}
              alt="Resize-Arrow"
            />
          </div>
        </Dock>
      </div>
    </div>
  );
};

export default MacNavbar;
