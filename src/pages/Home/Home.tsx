import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Ripple from "../../components/Home/Ripple";
import TextGlitch from "../../components/Home/text-glitch";
import MinimalSocialsFooter from "../../components/Home/footer";
import Logo from "../../assets/logo";
import WordRotate from "../../components/Home/text-reveal";
import MailchimpFormContainer from "../../components/Home/MailchimpFormContainer";
import MacNavbar from "../../components/macNavbar";
import FAQ from "../../components/Home/FAQ";
import google from "../../assets/Sponsors/google.png";
import convictional from "../../assets/Sponsors/convictional.png";
import bestbuy from "../../assets/Sponsors/bestbuy.svg";
import googlelcn from "../../assets/Misc/GoogleLcn.png";
import {
  FaQuestionCircle,
  FaMapMarkerAlt,
  FaUsers,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

import "../../style.css";
import "./glitch.css";

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
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
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SponsorBox: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.8 },
      }}
      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl p-10 shadow-2xl transform transition-transform duration-300 hover:shadow-neon"
    >
      <img src={src} alt={alt} className="h-32 object-contain" />
    </motion.div>
  );
};

const NeoDev3DBox: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-green-400 to-[#598576] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-3"
      whileHover={{ rotateY: 15, rotateX: -15 }}
    >
      <div className="text-4xl text-white mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </motion.div>
  );
};

const Home: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

      <AnimatedSection className="relative flex items-center justify-center min-h-screen">
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
      </AnimatedSection>

      <AnimatedSection className="absolute top-0 mt-[80vh] w-full text-center">
        <div className="m-0 mailchimp-wrapper">
          <MailchimpFormContainer />
        </div>
      </AnimatedSection>

      <AnimatedSection className="pt-[10rem] pb-[13rem] flex flex-col items-center justify-center mt-24 md:mt-32 px-4 md:px-0">
        <motion.div
          className="text-shadow flex flex-col items-center justify-center w-full z-20"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { scale: 1, opacity: 1 },
            hidden: { scale: 1.2, opacity: 0 },
          }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] to-[#76C675]"
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 50, opacity: 0 },
            }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            OCT 26th
          </motion.span>
          <motion.span
            className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mt-4"
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: 50, opacity: 0 },
            }}
            transition={{ delay: 1.55, duration: 0.5 }}
          >
            AT
          </motion.span>
        </motion.div>
        <motion.div
          className="w-full flex items-center justify-center z-10 mt-8 md:mt-16"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { scale: 1, opacity: 1 },
            hidden: { scale: 1.3, opacity: 0 },
          }}
          transition={{ delay: 1.67, duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={google}
            alt="Google"
            className="w-[80%] md:w-[90%] max-w-3xl"
            animate={{ rotate: 5 }}
            initial={{ rotate: -5 }}
            transition={{
              repeat: Infinity,
              duration: 5,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="flex flex-col md:flex-row items-center justify-center mt-24 md:mt-32 px-4 md:px-8">
        <img
          src={googlelcn}
          alt="Google"
          className="w-full md:w-[50%] mb-8 md:mb-0"
        />
        <div className="w-full md:w-[40%] mt-8 md:mt-0">
          <FAQ />
        </div>
      </AnimatedSection>

      <AnimatedSection className="w-full py-8 md:py-8 px-4 md:px-8 mt-8 md:mt-8 flex flex-col items-center justify-center">
        <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white text-shadow mb-12 text-center">
          The NeoDev Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          <NeoDev3DBox
            icon={<FaCode />}
            title="Prompt Challanges"
            description="Push your limits with our prompt based programming challenges designed to test your skills."
          />
          <NeoDev3DBox
            icon={<FaLaptopCode />}
            title="Collaborative Coding"
            description="Experience the power of teamwork as you solve prompt based problems together in teams of 8-10."
          />
          <NeoDev3DBox
            icon={<FaRocket />}
            title="Innovation Hub"
            description="Launch your ideas into reality with our 10+ hour programming period @ the Google building."
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="w-full py-4 pt-8 md:py-4 px-4 md:px-8 mt-8 md:mt-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl  lg:text-8xl font-bold text-white text-shadow mb-8 md:mb-16 text-center">
          OUR SPONSORS
        </h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2,
                delay: 1,
              },
            },
            hidden: { opacity: 0, y: 50 },
          }}
          className="w-full max-w-4xl"
        >
          <motion.h2
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 1.5 },
              },
              hidden: { opacity: 0, y: 20 },
            }}
            className="text-3xl md:text-4xl lg:text-6xl font-extrabold my-8 text-center text-shadow text-transparent bg-clip-text bg-gradient-to-r from-[rgb(21,237,158)] to-[#007b37]"
          >
            Visionary
          </motion.h2>
          <motion.div
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 1 },
              },
              hidden: { opacity: 0, scale: 0.8 },
            }}
            className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6"
          >
            <SponsorBox src={google} alt="Google" />
            <SponsorBox src={convictional} alt="Convictional" />
          </motion.div>
        </motion.div>

        <motion.h2
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 1.5 },
            },
            hidden: { opacity: 0, y: 20 },
          }}
          className="text-3xl md:text-4xl lg:text-6xl font-extrabold my-8 text-center text-shadow text-transparent bg-clip-text bg-gradient-to-r from-[rgb(21,237,158)] to-[#007b37]"
        >
          Pathfinder
        </motion.h2>
        <motion.div
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: 1.7 },
            },
            hidden: { opacity: 0, scale: 0.8 },
          }}
          className="flex justify-center"
        >
          <SponsorBox src={bestbuy} alt="Best Buy" />
        </motion.div>
      </AnimatedSection>

      <footer className="absolute w-full bottom-0 backdrop-blur-md">
        <div className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-md">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-between items-start">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h4 className="text-2xl font-bold mb-4 text-white">
                  NeoDev League
                </h4>
                <p className="text-gray-300">
                  Empowering the next generation of developers
                </p>
              </div>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h5 className="text-xl font-semibold mb-4 text-white">
                  Quick Links
                </h5>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => scrollTo("event")}
                      className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <FaMapMarkerAlt className="mr-2" /> Event Details
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollTo("faq")}
                      className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <FaQuestionCircle className="mr-2" /> FAQ
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollTo("sponsors")}
                      className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <FaUsers className="mr-2" /> Sponsors
                    </button>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3">
                <h5 className="text-xl font-semibold mb-4 text-white">
                  Connect With Us
                </h5>
                <MinimalSocialsFooter />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
