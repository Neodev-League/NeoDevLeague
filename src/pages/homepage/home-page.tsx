import { useState, useEffect } from "react";
import neoDevLogo from "../../assets/Renders/logo_final.gif";

export default function HomePage() {
  const [phase, setPhase] = useState("initial");

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setPhase("fading");

      setTimeout(() => {
        setPhase("content");
      }, 1000);
    }, 3000);

    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-white flex items-center justify-center">

        <h1 className="text-3xl font-bold mb-4 text-black">
          I cant do it.
        </h1>
      </div>

  );
}
