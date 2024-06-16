"use client";

import { cn } from "../../lib/utils";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
  className?: string;
}

export default function WordRotate({
  words,
  duration = 1300, // Shortened duration
  framerProps = {
    initial: { opacity: 0, y: -10 }, // Smaller y offset for smoother transition
    animate: { opacity: 1, y: 1 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.5, ease: "easeOut" }, // Duration for each transition
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden">
      <div className="min-h-[1em]">
        {" "}
        {/* Maintain space for the rotating text */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={words[index]}
            className={cn("gradient-text", className)} // Apply gradient-text class
            {...framerProps}
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
}
