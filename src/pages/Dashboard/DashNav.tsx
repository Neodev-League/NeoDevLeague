import { motion } from "framer-motion";
const BottomBar: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-md py-4 flex justify-around items-center z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );

  export default BottomBar;