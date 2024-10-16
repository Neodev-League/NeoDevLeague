import React from "react";
import Ripple from "../../components/Home/Ripple";
import TextGlitch from "../../components/Home/text-glitch";
import Logo from "../../assets/logo";
import WordRotate from "../../components/Home/text-reveal";
import MailchimpFormContainer from "../../components/Home/MailchimpFormContainer";
import MacNavbar from "../../components/macNavbar";
import { RainbowButton } from "../../components/Home/rainbowbtn";

import "../../style.css";
import "./glitch.css";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="background-image"></div>

      <div className="fixed top-0 left-0 w-full z-50">
        <a
          href="https://neoleague.dev/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="text-center relative z-10 mt-16 mb-4">
          <TextGlitch />

          <div className="mt-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSccJuqk0_9JndOaOGPfvFndQUSqnN6Nh4ycb7IZh6CC14iGdg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 mb-8" // Added vertical padding here
            >
              <RainbowButton>APPLY NOW</RainbowButton>
            </a>
          </div>

          {/* Slightly reduced text size */}
          <div className="mt-4">
            <span className="!text-xl md:text-5xl font-bold">
              The Future of
            </span>
            <br />
            <span className="text-xl md:text-3xl font-bold">
              <WordRotate
                className="font-bold"
                words={[
                  "Competitive Programming",
                  "Collaboration",
                  "Problem Solving",
                  "Teamwork",
                  "Software Development",
                  "Innovative Thinking",
                ]}
              />
            </span>
          </div>
        </div>

        <Ripple />
      </div>

      <div className="absolute bottom-0 w-full text-center">
        <div className="m-0 mailchimp-wrapper">
          <MailchimpFormContainer />
        </div>
      </div>
      <MacNavbar />
    </div>
  );
};

export default Home;
