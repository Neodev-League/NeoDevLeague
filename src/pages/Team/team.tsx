import React from "react";
import "../../style.css";
import logo from "../../assets/logo2.png";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
// import neoBG from "/assets/neo.jpg"
import VantaBackground from "../../components/vantaBg.tsx";
import Matthew from "../../assets/Headshots/Matthew.jpg"
import James from "../../assets/Headshots/Jamatt.jpg"
import Andy from "../../assets/Headshots/Andy.jpg"
import Brian from "../../assets/Headshots/Brian.jpg"
import George from "../../assets/Headshots/George.jpg"
import Hamza from "../../assets/Headshots/Hamza.jpg"
import Thomas from "../../assets/Headshots/Thomas.jpg"
import Alex from "../../assets/Headshots/Alex.jpeg"
import Jerry from "../../assets/Headshots/Jerry.png"
import MNav from "../../components/mNavbar.tsx";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../@/components/ui/hover-card.tsx";

const leads = [
  {
    imgUrl: Matthew,
    name: "Matthew Singer",
    position: "#Head",
    email: "matthewsxnger@gmail.com",
    linkedin: "https://www.linkedin.com/in/matthewsingerr/",
  },
  {
    imgUrl: James,
    name: "James Li",
    position: "#Head",
    email: "lijames9532@gmail.com",
    linkedin: "https://www.linkedin.com/in/james-li-a81004275/",
  },
];

const techLogs = [
  {
    imgUrl: Hamza,
    name: "Hamza Ammar",
    position: "#Tech",
    email: "hamza.k.ammar@gmail.com",
    linkedin: "https://www.linkedin.com/in/hamza-ammar-341531240/",
  },
  {
    imgUrl: Alex,
    name: "Alex Rusu",
    position: "#Tech",
    email: "alex.rusu0720@gmail.com",
    linkedin: "https://www.linkedin.com/in/alexandru-rusu-b8518527b/",
  },
  {
    imgUrl: Jerry,
    name: "Jerry Liu",
    position: "#Logistics",
    email: "jerryliu2678@gmail.com",
    linkedin: "https://www.linkedin.com/in/jerry-liu-28464b268/",
  },
  {
    imgUrl: Brian,
    name: "Brian Tram",
    position: "#Logistics",
    email: "brian.q.tram@gmail.com",
    linkedin: "https://www.linkedin.com/in/brian-tram-bb8312276/",
  },
];

const FinMark = [
  {
    imgUrl: Andy,
    name: "Andy Duong",
    position: "#Finance",
    email: "theandelope16@gmail.com",
    linkedin: "https://www.linkedin.com/in/andy-duong-380521300/",
  },
  {
    imgUrl: Thomas,
    name: "Thomas Lenh",
    position: "#Finance",
    email: "thomaslenh@gmail.com",
    linkedin: "https://www.linkedin.com/in/thomas-lenh-38216a248/",
  },
  {
    imgUrl: George,
    name: "George Woo",
    position: "#Design",
    email: "g.woo1187@gmail.com",
    linkedin: "https://www.linkedin.com/in/george-woo-a72bb62b2/",
  }
];

const Team: React.FC = () => {
  const renderTeamMembers = (members) => (
    members.map((item, index) => (
      <div className="flex flex-col items-center p-4" key={index}>
        <div className="rounded-full w-24 h-24 mb-4 overflow-hidden">
          <img src={item.imgUrl} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <HoverCard>
            <HoverCardTrigger>
              <h4 className="text-primary text-xl font-medium mb-2">{item.name}</h4>
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
    ))
  );

  return (
    <div className="text-black relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 w-full h-full -z-10">
        <VantaBackground />
      </div>
      <MNav/>
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
      <section id="finMark" className="pt-12">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-3  gap-8 justify-center">
            {renderTeamMembers(FinMark)}
          </div>
        </div>
      </section>
      <section id="techLogs" className="pt-16 pb-8 mb-20">
        <div className="container mx-auto margin-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {renderTeamMembers(techLogs)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;