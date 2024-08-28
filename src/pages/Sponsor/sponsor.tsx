// why does this file have to be lower case for build to work... lol
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import NumberTicker from "./components/number-tick";
import TextReveal from "./components/scroll-effect";
import BlurIn from "./components/blur-text";
import { WavyBackground } from "./components/wavy-bg";
import { VelocityScroll } from "./components/vs-text";
import { FadeText } from "./components/fade-text";
import ShinyButton from "./components/shiny-button";
import { Link } from "react-router-dom";
import MacNavbar from "../../components/macNavbar";
import BuildingRender from "../../assets/Renders/building_two_render.gif";
// import BuildingRender2 from "../../assets/Renders/building_three_render.gif";
import BuildingRender3 from "../../assets/Renders/building_one_render.gif";

import "./sponsor.css";

const ScrollFadeText: React.FC<{
  text: string;
  className: string;
  direction: "left" | "right";
  delay: number;
}> = ({ text, className, direction, delay }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {text}
    </motion.div>
  );
};

const SponsorPage: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="bg-black">
        <WavyBackground colors={["#117045", "#278250"]}>
          <div className="md:absolute md:top-0 relative top-20 md:w-full">
            <img
              src="src/assets/renders/logo_final.gif"
              alt="Background"
              className="md:w-auto h-screen object-cover"
            />
          </div>
          <div className="md:relative md:top-0 absolute -top-20 flex items-center justify-center h-full w-full">
            <div className="text-center">
              <FadeText
                className="md:text-9xl sm:text-8xl mini:text-7xl font-bold z-10 bg-clip-text text-transparent bg-gradient-to-r from-green-100 via-green-400 to-green-800"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.3 } },
                }}
                text="NeoDev"
              />
              <FadeText
                className="text-6xl mini:text-5xl text-white font-bold z-10"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.6 } },
                }}
                text="Sponsorship Package"
              />
            </div>
          </div>

        </WavyBackground>
        
        <div className="text-center relative p-0">
          <NumberTicker className="!text-9xl font-bold" value={160} />
          <span className="text-neutral-300 font-extrabold">
            <BlurIn word="Expected Participants" />
          </span>
          <br />
          <VelocityScroll
            text="16 Expected Schools |"
            default_velocity={5}
            className="text-neutral-300 md:text-4xl text-2xl font-bold  bg-clip-text bg-gradient-to-r from-gray-400 to-grey-800 pb-5"
          />
          <img src={BuildingRender} alt="neodev building" />
          <div>
            <TextReveal
              className="text-center"
              text="The Neo Developer League will change competitive programming forever"
            />
          </div>
          <div className="p-3 space-y-8 overflow-hidden">
            <div className="flex justify-start">
              <div className="w-3/5 text-left">
                <ScrollFadeText
                  className="md:text-4xl text-2xl font-bold text-dark2"
                  direction="left"
                  delay={0.3}
                  text="The NeoDev League Mission"
                />
                <ScrollFadeText
                  className="text-white mt-2 md:text-md text-mms"
                  direction="left"
                  delay={0.6}
                  text="At NeoDev League, our mission is to create an inclusive environment where programmers can learn and develop in a fun and engaging way. By offering unique challenges, we power the next generation of tech innovators to leave a long-lasting impact on the world."
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-3/5 text-right">
                <ScrollFadeText
                  className="md:text-4xl text-2xl font-bold text-dark2"
                  direction="right"
                  delay={0.3}
                  text="Why Sponsor NeoDev?"
                />
                <ScrollFadeText
                  className="text-white mt-2 md:text-md text-mms"
                  direction="right"
                  delay={0.6}
                  text="Sponsoring NeoDev offers a unique opportunity to engage with the next generation of tech talent. Our events redefine the traditional hackathon experience, making your brand a part of the new tech wave."
                />
              </div>
            </div>
            <div className="flex justify-start">
              <div className="w-3/5 text-left">
                <ScrollFadeText
                  className="md:text-4xl text-2xl font-bold text-dark2"
                  direction="left"
                  delay={0.4}
                  text="Reach and Expansion"
                />
                <ScrollFadeText
                  className="text-white mt-2 md:text-md text-mms"
                  direction="left"
                  delay={0.7}
                  text="For our initial event, NeoDev aims to establish a strong opening across the Waterloo District School Board, with plans to expand throughout Ontario, including major cities like Toronto and London. This expansion will increase your brand’s visibility through a growing network of programmers."
                />
              </div>
            </div>
            <div className="flex justify-end h-[50vh]">
              <div className="w-3/5 text-right">
                <ScrollFadeText
                  className="md:text-4xl text-2xl font-bold text-dark2"
                  direction="right"
                  delay={0.4}
                  text="Sponsorship Opportunities"
                />
                <ScrollFadeText
                  className="text-white mt-2 md:text-md text-mms"
                  direction="right"
                  delay={0.7}
                  text="NeoDev offers various sponsorship tiers, ranging from Pathfinder at $250 to Visionary at $1000+. Sponsors benefit from logo placements on websites, banners, and t-shirts, as well as social media promotion and opportunities to engage directly with participants through speaking opportunities and event involvement."
                />
              </div>
            </div>

            <div className="flex justify-center space-x-1">
              <img src={BuildingRender3} alt="neodev building"/>
              <div className="flex justify-center items-center cursor-pointer text-2xl">
                {/* <img className="relative" src={BuildingRender2} alt="neodev building"/> */}
                <Link
                  to="https://drive.google.com/file/d/1fk0d_UCA_kxGigZp1gjld_SQalErZyJ4/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShinyButton text="Full Package"/>
                </Link>
              </div>
              <img src={BuildingRender3} alt="neodev building" />
            </div>
          </div>
        </div>
        <MacNavbar />
      </div>
    </div>
  );
};

export default SponsorPage;
