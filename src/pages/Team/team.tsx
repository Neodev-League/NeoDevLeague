import React from "react";
import "../../style.css";
import logo from "../../assets/logo2.png";
import gmail from "../../assets/Png/gmail.png";
import linkedin from "../../assets/Png/linkedin.png";
// import VantaBackground from "../../components/vantaBg.tsx";
import MacNavbar from "../../components/macNavbar.tsx";
import { leads, Row2, Row3 } from "./members.ts";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/Magic/hover-card.tsx";

const Team: React.FC = () => {
  const renderTeamMembers = (members: any) =>
    members.map((item: any, index: any) => (
      // bg-white/60 ?
      <div className="flex flex-col items-center p-4 bg-light2 bg-opacity-55 rounded-md" key={index}>
        <div className="rounded-full w-24 h-24 mb-4 overflow-hidden">
          <img
            src={item.imgUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <HoverCard>
            <HoverCardTrigger>
              <h4 className="text-primary text-xl font-medium mb-2">
                {item.name}
              </h4>
            </HoverCardTrigger>
            <HoverCardContent className="rounded-lg bg-black/10">
              <p className="text-md">{item.position}</p>
              <div className="flex justify-center gap-4 mt-2">
                <a href={`mailto:${item.email}`}>
                  <img src={gmail} alt="Email" className="w-8 h-8" />
                </a>
                <a href={item.linkedin}>
                  <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
                </a>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    ));

  return (
    <div className="text-black relative overflow-hidden min-h-screen bg-[url('../../assets/Neo-bg.jpg')] bg-cover bg-center">
      {/* <div className="absolute inset-0 w-full h-full -z-10">
        <VantaBackground />
      </div> */}
      <MacNavbar />
      <div className="relative z-10">
        <div className="fixed top-0 left-0 w-full z-50 p-4">
          <a
            href="https://neoleague.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-16 h-auto" src={logo} alt="NeoLeague Logo" />
          </a>
        </div>
      </div>
      <section id="leads" className="pt-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h6 className="text-3xl font-bold">Meet the NeoDev Team</h6>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 justify-center">
            {renderTeamMembers(leads)}
          </div>
        </div>
      </section>
      <section className="pt-12">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-3  gap-8 justify-center">
            {renderTeamMembers(Row2)}
          </div>
        </div>
      </section>
      <section className="pt-16 pb-8 mb-20">
        <div className="container mx-auto margin-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {renderTeamMembers(Row3)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
