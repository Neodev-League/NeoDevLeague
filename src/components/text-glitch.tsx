
const Texttt = () => {
  return (
    <div className="relative">
      <h1
        className="text-8xl font-bold hero glitch layers"
        data-text="NeoDev"
        style={{
          fontFamily: "Poppins, sans-serif",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span>NeoDev</span>
      </h1>

      <br />

      <h1
        className="text-6xl font-extrabold text-white pb-3 relative"
        style={{
          fontFamily: "Poppins, sans-serif",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span className="relative  text-center ">
          League
          <br />
        </span>
      </h1>
    </div>
  );
};

export default Texttt;
