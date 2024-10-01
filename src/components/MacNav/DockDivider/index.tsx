import { useGesture } from "@use-gesture/react";

import { useDock } from "../Dock/DockContext";

import styles from "./styles.module.scss";

export const DockDivider = () => {
  const { zoomLevel, setIsZooming } = useDock();

  const bind = useGesture(
    {
      onDrag: ({ down, offset: [_ox, oy] }) => {
        /**
         * Stop the drag gesture if the user goes out of bounds otherwise
         * the animation feels stuck but it's the gesture state catching
         * up to a point where the scaling can actualy animate again.
         */
        if (zoomLevel) {
          zoomLevel.start(oy, {
            immediate: down,
          });
        }
      },
      onDragStart: () => {
        setIsZooming(true);
      },
      onDragEnd: () => {
        setIsZooming(false);
      },
    },
    {
      drag: {
        axis: "y",
      },
    },
  );

  if (!zoomLevel) {
    return null;
  }

  return (
    <div className={styles.divider__container} {...bind()}>
      <span className={styles.divider}></span>
    </div>
  );
};
