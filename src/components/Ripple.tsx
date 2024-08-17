import React, { CSSProperties } from "react";

const MAIN_CIRCLE_SIZE = 5;
const MAIN_CIRCLE_OPACITY = 0.30  ;
const NUM_CIRCLES = 8;
const CIRCLE_INCREMENT = 80;

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
              backgroundColor: 'rgba(0, 20, 0, 0.5)', 
            } as CSSProperties
          }
        ></div>
      ))}
    </div>
  );
});

export default Ripple;
