import React from "react";
import Ripple from "../../components/Ripple";
import Texttt from "../../components/Texttt";
import Logo from "../../assets/logo";
import "../../style.css";
import "../../glitch.css";
import WordRotate from "../../components/textreveal";
import MailchimpFormContainer from "../../components/MailchimpFormContainer";
import MNav from "../../components/mNavbar"; 

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="background-image"></div>

      <div className="fixed top-0 left-0 w-full z-50">
        <a
          href="https://neoleague.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
      </div>

      <div className="relative flex items-center justify-center min-h-screen">
        <div className="text-center relative z-10 mt-24">
          <Texttt />
          <div className="mt-10">
            <span className="!text-2xl md:text-6xl font-bold">
              The Future of
            </span>
            <br />
            <span className="text-2xl md:text-4xl font-bold">
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
      <MNav/>
    </div>
  );
};

export default Home;