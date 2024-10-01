import { motion, Variants } from "framer-motion";

interface SlideFromBottomProps {
  children: React.ReactNode;
}

const slideVariants: Variants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const SlideFromBottom: React.FC<SlideFromBottomProps> = ({ children }) => (
  <motion.div
    variants={slideVariants}
    initial="initial"
    animate="animate"
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default SlideFromBottom;
