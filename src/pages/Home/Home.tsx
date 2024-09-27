import React, { useEffect } from "react";
import Ripple from "../../components/Home/Ripple";
import TextGlitch from "../../components/Home/text-glitch";
import MinimalSocialsFooter from "../../components/Home/footer";
import Logo from "../../assets/logo";
import WordRotate from "../../components/Home/text-reveal";
import MailchimpFormContainer from "../../components/Home/MailchimpFormContainer";
import MacNavbar from "../../components/macNavbar";
import AccordionUsage from "../../components/Home/accordion";
import google from "../../assets/Sponsors/google.png";
import googlelcn from "../../assets/Misc/GoogleLcn.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../../style.css";
import "./glitch.css";

const Home: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="relative h-[500vh] min-h-screen overflow-x-hidden border">
      <div className="absolute w-full h-full bg-[url('../../assets/neo-citys.jpg')] bg-cover animate-fadeIn z-[-1]" />
      <MacNavbar />
      <div className="fixed top-0 left-0 w-full z-50">
        <a
          href="https://neoleague.dev/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
      </div>

      <div className="relative flex items-center justify-center min-h-screen">
        <div className="text-center relative z-10 mt-24 mb-6">
          <TextGlitch />
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

      <div className="absolute top-0 mt-[80vh] w-full text-center">
        <div className="m-0 mailchimp-wrapper">
          <MailchimpFormContainer />
        </div>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.8 }}
        className="absolute h-[60vh] w-full mt-[45vh] flex items-center justify-center flex-col overflow-visible"
      >
        <motion.div
          className="text-shadow absolute top-0 flex flex-col items-center justify-center w-full h-full z-20"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] to-[#76C675]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            OCT 26th
          </motion.span>
          <motion.span
            className="text-4xl md:text-6xl font-bold text-white mt-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            AT
          </motion.span>
        </motion.div>
        <motion.div
          className="absolute w-full h-full flex items-center justify-center z-10 mt-80 p-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={google}
            alt="Google"
            className="w-[90%] max-w-3xl"
            initial={{ rotate: -5 }}
            animate={{ rotate: 5 }}
            transition={{
              repeat: Infinity,
              duration: 5,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <motion.div
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
              }}
              animate={{
                y: [null, Math.random() * -500],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute h-[50vh] w-screen mt-[130vh] flex flex-col">
        <img
          src={googlelcn}
          alt="Google"
          className="absolute w-[50%] left-[5%]"
        />
        <div className="flex w-[30%] absolute right-[5%]">
          <AccordionUsage />
        </div>
      </div>

      <div>
        <div className="absolute h-[50vh] w-screen mt-[200vh] flex items-center justify-center flex-col">
          <h1 className="text-7xl font-bold text-white text-shadow">
            SPONSORS
          </h1>
        </div>
      </div>

      <div className="absolute w-full bottom-0 flex items-center justify-center">
        <MinimalSocialsFooter />
      </div>
    </div>
  );
};

export default Home;
