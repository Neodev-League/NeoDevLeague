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
import LogoRender from "../../assets/Renders/logo_final.gif";

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
              src={LogoRender}
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
          <div className="p-3 space-y-16 overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-5xl font-bold text-green-400 mb-6">
                The NeoDev League Mission
              </h2>
              <p className="text-white text-xl max-w-2xl">
                We're creating an inclusive playground for programmers to learn,
                grow, and innovate. Through unique challenges, we're powering the
                next wave of tech visionaries.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-4xl font-bold text-green-300 mb-4">
                  Why Sponsor NeoDev?
                </h3>
                <p className="text-white text-lg">
                  Connect with tomorrow's tech leaders. Be part of redefining the
                  hackathon experience and ride the new tech wave with us.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={BuildingRender3}
                  alt="NeoDev Innovation"
                  className="rounded-lg shadow-2xl"
                  style={{ maxWidth: "80%" }}
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900 to-green-700 rounded-xl p-8 shadow-2xl">
              <h3 className="text-4xl font-bold text-white mb-6">
                Reach & Expansion
              </h3>
              <p className="text-green-100 text-lg">
                Starting strong in Waterloo, we're set to conquer Ontario.
                Toronto, London, and beyond – your brand visibility grows with our
                network.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-400 mb-6">
                Sponsorship Tiers
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  {
                    name: "Pathfinder",
                    price: "$250",
                    color: "from-green-400 to-green-600",
                  },
                  {
                    name: "Catalyst",
                    price: "$500",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    name: "Luminary",
                    price: "$750",
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    name: "Visionary",
                    price: "$1000+",
                    color: "from-yellow-400 to-yellow-600",
                  },
                ].map((tier) => (
                  <div
                    key={tier.name}
                    className={`w-64 p-6 rounded-lg shadow-xl bg-gradient-to-br ${tier.color}`}
                  >
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h4>
                    <p className="text-3xl font-bold text-white">{tier.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="relative py-20">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-green-900 opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl mb-8 max-w-2xl text-white">
                Join us in shaping the future of tech. Your sponsorship can make a
                difference in the lives of young programmers and innovators.
              </p>
              <Link
                to="https://drive.google.com/file/d/1wO0ZbBYQF-s3sTLeMoUUMrILnSJSUukb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-500"
              >
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <svg
                    className="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="text-md font-medium transition-all group-hover:me-4">
                  View Full Sponsorship Package
                </span>
              </Link>
            </div>
          </section>
        </div>
        <MacNavbar />
      </div>
    </div>
  );
};

export default SponsorPage;
