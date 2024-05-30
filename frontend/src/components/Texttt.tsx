import React from "react";

const Texttt = () => {
  return (
    <div className="relative">
      <h1
        className="text-8xl font-bold hero glitch layers"
        data-text="NeoDev"
        style={{ fontFamily: "Poppins, sans-serif", position: "relative", zIndex: 10 }}
      >
        <span>NeoDev</span>
      </h1>

      <br />

      <h1
        className="text-6xl font-extrabold text-white pb-3 relative"
        style={{ fontFamily: "Poppins, sans-serif", position: "relative", zIndex: 10 }}
      >
        <span className="relative z-10">League</span>
        <span className="absolute top-0 left-0 w-full h-full text-white z-0 opacity-50 text-shadow-md blur-sm">
          League
        </span>
      </h1>

      <br />

      <p
        className="text-2xl font-semibold text-white inline-block bg-clip-text pb-8"
        style={{ fontFamily: "Poppins, sans-serif", position: "relative", zIndex: 10 }}
      >
        The Future of Competitive Programming
      </p>
    </div>
  );
};

export default Texttt;
