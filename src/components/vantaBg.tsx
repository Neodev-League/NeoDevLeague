import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import "../style.css";

const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vantaEffect = CLOUDS({
      el: vantaRef.current!,
      THREE: THREE,
      skyColor: 0x68b8d7, // Light sky blue
      cloudColor: 0xadc1de, // Light gray clouds
      cloudShadowColor: 0x183550, // Darker gray shadows
      sunColor: 0xff9919, // Sun color
      sunGlareColor: 0xff6633, // Sun glare color
      sunlightColor: 0xff9933, // Sunlight color
      speed: 1, // Speed of clouds movement
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="vanta-background"></div>;
};

export default VantaBackground;
