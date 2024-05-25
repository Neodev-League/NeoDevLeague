import React, { CSSProperties } from "react";

const MAIN_CIRCLE_SIZE = 110;
const MAIN_CIRCLE_OPACITY = 0.34;
const NUM_CIRCLES = 20;
const CIRCLE_INCREMENT = 100;

const Ripple = React.memo(() => {
  return (
    <div className="absolute left-1/2 top-1/2 h-full w-full overflow-visible">
      {Array.from({ length: NUM_CIRCLES }, (_, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full"
          style={
            {
              width: MAIN_CIRCLE_SIZE + i * CIRCLE_INCREMENT,
              height: MAIN_CIRCLE_SIZE + i * CIRCLE_INCREMENT,
              opacity: MAIN_CIRCLE_OPACITY - i * 0.03,
              animationDelay: `${i * 0.03}s`,
              backgroundColor: 'rgba(66, 229, 36, 0.8)', 
            } as CSSProperties
          }
        ></div>
      ))}
    </div>
  );
});

export default Ripple;
