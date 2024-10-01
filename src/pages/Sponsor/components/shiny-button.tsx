"use client";
import { type AnimationProps, motion } from "framer-motion";

const animationProps = {
  initial: { "--x": "100%", scale: 3 },
  animate: { "--x": "-100%", scale: 2.3 },
  whileTap: { scale: 2.0 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

// Define the ShinyButton component
const ShinyButton = ({ text = "shiny-button" }) => {
  return (
    <motion.button
      {...animationProps}
      className="relative rounded-lg px-3 py-2 md:px-6 md:py-3 backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow"
      style={{
        border: "1px solid #044f3b",
      }}
    >
      <span className="relative text-ms md:text-lg font-semibold tracking-wide text-white">
        {text}
      </span>
    </motion.button>
  );
};

export default ShinyButton;
