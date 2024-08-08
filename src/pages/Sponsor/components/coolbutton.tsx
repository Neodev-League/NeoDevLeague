"use client";
import { type AnimationProps, motion } from "framer-motion";

// Define animation properties
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
      // Add className for styling
      className="relative rounded-lg px-6 py-3 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow"
      // Set button gradient background and border color
      style={{
        background: "linear-gradient(90deg, #34D399, #065f46)", // Using the green gradient
        border: "2px solid #044f3b", // Darker outline color
      }}
    >
      <span
        // Style text color to white
        className="relative block h-full w-full text-md uppercase font-semibold tracking-wide text-white"
      >
        {text}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        // Style outline color to black
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};

export default ShinyButton;
