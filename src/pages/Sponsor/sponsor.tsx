import React from "react";
import "./sponsor.css"; // Import custom styles for specific background settings
import NumberTicker from "./components/tick";
import TextReveal from "./components/scrolltxt";
import BlurIn from "./components/blurtext";
import { WavyBackground } from "./components/wavyb";
import { VelocityScroll } from "./components/vstext";
import { FadeText } from "./components/fitext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ShinyButton from "./components/coolbutton";
import { Link } from "react-router-dom";
import MacNavbar from "../../components/macNavbar";


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
      <WavyBackground className=" pb-40" colors={["#117045", "#278250"]}>
        <div className="absolute inset-0 overflow-hidden flex justify-center items-center">
          <img
            src="src/assets/Spinning-Logo.gif"
            alt="Background"
            className="w-full h-auto object-cover" // Change this class to increase the size
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center">
            <FadeText
              className="text-9xl font-bold z-10 bg-clip-text text-transparent bg-gradient-to-r from-green-100 via-green-400 to-green-800"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.3 } },
              }}
              text="NeoDev"
            />
            <FadeText
              className="text-6xl text-white font-bold z-10"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.6 } },
              }}
              text="Sponsorship Package"
            />
          </div>
        </div>
      </WavyBackground>
      <div className="text-center p-8 relative z-10 bg-black">
        <NumberTicker className="!text-9xl font-bold" value={160} />
        <span className="text-neutral-300 font-extrabold">
          <BlurIn word="Expected Participants" />
        </span>
        <br />
        <VelocityScroll
          text="16 Expected Schools |"
          default_velocity={7}
          className="text-neutral-300 text-4xl font-bold  bg-clip-text bg-gradient-to-r from-gray-400 to-grey-800"
        />

        <div>
          <TextReveal
            className="text-center"
            text="The Neo Developer League will change competitive programming forever"
          />
        </div>
        <div className="flex justify-center cursor-pointer text-2xl pb-24">
          <Link to="https://drive.google.com/file/d/1fk0d_UCA_kxGigZp1gjld_SQalErZyJ4/view?usp=sharing">
            <ShinyButton text="FULL PACKAGE" />
          </Link>
        </div>
        <div className="p-8 space-y-8 overflow-hidden">
          <div className="flex justify-start">
            <div className="w-3/5 text-left">
              <ScrollFadeText
                className="text-4xl font-bold text-white"
                direction="left"
                delay={0.3}
                text="NeoDev’s Mission"
              />
              <ScrollFadeText
                className="text-white mt-2"
                direction="left"
                delay={0.6}
                text="At NeoDev League, our mission is to create an inclusive environment where programmers can learn and develop in a fun and engaging way. By offering unique challenges, we power the next generation of tech innovators to leave a long-lasting impact on the world."
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-3/5 text-right">
              <ScrollFadeText
                className="text-4xl font-bold text-white"
                direction="right"
                delay={0.3}
                text="Why Sponsor NeoDev?"
              />
              <ScrollFadeText
                className="text-white mt-2"
                direction="right"
                delay={0.6}
                text="Sponsoring NeoDev offers a unique opportunity to engage with the next generation of tech talent. Our events redefine the traditional hackathon experience, making your brand a part of the new tech wave."
              />
            </div>
          </div>
          <div className="flex justify-start">
            <div className="w-3/5 text-left">
              <ScrollFadeText
                className="text-4xl font-bold text-white"
                direction="left"
                delay={0.3}
                text="Reach and Expansion"
              />
              <ScrollFadeText
                className="text-white mt-2"
                direction="left"
                delay={0.6}
                text="For our initial event, NeoDev aims to establish a strong opening across the Waterloo District School Board, with plans to expand throughout Ontario, including major cities like Toronto and Niagara. This expansion will increase your brand’s visibility through a growing network of programmers."
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-3/5 text-right">
              <ScrollFadeText
                className="text-4xl font-bold text-white"
                direction="right"
                delay={0.3}
                text="Sponsorship Opportunities"
              />
              <ScrollFadeText
                className="text-white mt-2"
                direction="right"
                delay={0.6}
                text="NeoDev offers various sponsorship tiers, ranging from Pathfinder at $250 to Visionary at $1000+. Sponsors benefit from logo placements on websites, banners, and t-shirts, as well as social media promotion and opportunities to engage directly with participants through speaking opportunities and event involvement."
              />
            </div>
          </div>
        </div>
      </div>
      <MacNavbar/>
    </div>
  );
};

export default SponsorPage;