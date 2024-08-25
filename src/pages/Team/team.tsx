import React from "react";
import logo from "../../assets/logo2.png";
import Neo1 from "../../assets/neobuilding1.png";
import Neo2 from "../../assets/neobuilding2.png";
import Neo3 from "../../assets/neobuilding3.png";
import Vine1 from "../../assets/vines.png";
import Vine2 from "../../assets/vines2.png";
// import gmail from "../../assets/Png/gmail.png";
import linkedin from "../../assets/Png/linkedin.png";
import MacNavbar from "../../components/macNavbar.tsx";
import { leads, Row2, Row3 } from "./members.ts";

import "../../style.css";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/Magic/hover-card.tsx";

const Team: React.FC = () => {
  const renderTeamMembers = (members: any) =>
    members.map((member: any, index: any) => (
      // bg-light2 bg-opacity-55
      <div
        className="relative z-10 flex flex-col p-4 bg-white/90 rounded-md border-[2px] border-lighterGreen"
        key={index}
      >
        <div
          className={`items-end mb-4 z-10 flex ${
            member.alignment == "left"
              ? ""
              : member.alignment == "center"
              ? "sm:flex-col sm:items-center"
              : "sm:flex-col sm:items-end"
          }`}
        >
          <img
            src={member.imgUrl}
            alt={member.name}
            className="w-24 h-24 object-cover rounded-md shadow-lg border border-lighterGreen"
          />
        </div>

        {/* row 1 images */}
        {member.row == 1 && (
          <>
            <img
              src={Neo1}
              className={`flex h-[100%] absolute bottom-0 ${
                member.alignment === "right" ? "left-0" : "right-0"
              }`}
            />
            <img
              src={Neo2}
              className={`flex h-[100%] absolute bottom-0 ${
                member.alignment === "right" ? "left-80" : "right-80"
              }`}
            />
            <img
              src={Neo3}
              className={`flex h-[90%] absolute bottom-0 ${
                member.alignment === "right" ? "left-40" : "right-50"
              }`}
            />
            <img
              src={Neo2}
              className={`flex h-[90%] absolute bottom-0 ${
                member.alignment === "right" ? "left-60" : "right-60"
              }`}
            />
            <img
              src={Neo1}
              className={`flex h-[90%] absolute bottom-0 ${
                member.alignment === "right" ? "left-20" : "right-20"
              }`}
            />
            {/* <img
              src={member.alignment === "right" ? Vine2 : Vine1}
              className={`flex h-[100%] w-[80%] absolute top-0 ${
                member.alignment === "right" ? "left-0" : "right-0"
              }`}
            /> */}
          </>
        )}
        {/* row 2 images */}
        {member.row == 2 && (
          <>
            <img
              src={Neo1}
              className={`flex h-[100%] absolute bottom-0 ${
                member.alignment === "right" ? "left-20" : "right-20"
              }`}
            />
            <img
              src={Neo2}
              className={`flex h-[100%] absolute ${
                member.alignment === "right" ? "left-40" : "right-40"
              } bottom-0`}
            />
            <img
              src={Neo3}
              className={`flex h-[100%] absolute ${
                member.alignment === "right" ? "left-60" : "right-60"
              } bottom-0`}
            />
            {member.alignment === "center" && (
              <img
                src={Vine1}
                className={`flex h-[70%] absolute top-0 right-0`}
              />
            )}
            {/* <img
              src={member.alignment === "left" ? Vine1 : Vine2}
              className={`flex h-[100%] w-[80%] absolute top-0 ${
                member.alignment === "right" || member.alignment == "center"
                  ? "left-0"
                  : "right-0"
              }`}
            /> */}
          </>
        )}
        {/* row 3 images */}
        {member.row == 3 && (
          <>
            <img
              src={Neo1}
              className={`flex h-[100%] absolute bottom-0 ${
                member.alignment === "right" ? "left-20" : "right-10"
              }`}
            />
            {member.alignment === "center" && (
              <img
                src={Vine2}
                className={`flex h-[70%] absolute top-0 left-0`}
              />
            )}
            {/* <img
              src={member.alignment === "left" ? Vine1 : Vine2}
              className={`flex h-[100%] w-[80%] absolute top-0 ${
                member.alignment === "right" || member.alignment == "center"
                  ? "left-0"
                  : "right-0"
              }`}
            /> */}
          </>
        )}
        <HoverCard>
          <HoverCardTrigger>
            <div className="text-center items-center border border-lighterGreen backdrop-blur-sm rounded-md shadow-lg cursor-crosshair">
              <h4 className="text-primary text-xl font-medium mb-1 mt-1">
                {member.name}
              </h4>
            </div>
            <HoverCardContent className="rounded-lg bg-white/80 w-[full] backdrop-blur-sm flex flex-col items-center text-center">
              <p className="text-lg signature">
                {member.position}
              </p>
              <div className="flex justify-center gap-4 mt-2">
                {/* <a href={`mailto:${member.email}`}>
                  <img src={gmail} alt="Email" className="w-8 h-8" />
                </a> */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                </a>
              </div>
            </HoverCardContent>
          </HoverCardTrigger>
        </HoverCard>
      </div>
    ));

  return (
    <div
      id="team-page"
      className="text-black relative min-h-screen bg-[url('../../assets/Neo-bg.jpg')] bg-cover bg-center overflow-hidden sm:overflow-auto"
      style={{ backgroundSize: "150%" }}
    >
      <MacNavbar />
      <div className="fixed top-0 z-10">
        <a
          href="https://neoleague.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-16" src={logo} alt="NeoLeague Logo" />
        </a>
      </div>
      <section id="leads" className="pt-12">
        <div className="container mx-auto margin-10">
          <div className="text-center mb-12 bg-white/90 rounded-md border border-lighterGreen pb-5 pt-5">
            <h6 className="text-2xl font-bold"> - Meet the NeoDev Team - </h6>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center overflow-hidden">
            {renderTeamMembers(leads)}
          </div>
        </div>
      </section>
      <section className="pt-12">
        <div className="container mx-auto margin-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center overflow-hidden">
            {renderTeamMembers(Row2)}
          </div>
        </div>
      </section>
      <section className="pt-12">
        <div className="container mx-auto margin-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center overflow-hidden">
            {renderTeamMembers(Row3)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
