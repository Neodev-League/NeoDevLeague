import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LockKeyhole, ArrowUp, ArrowDown } from "lucide-react";

const BottomBar: React.FC = () => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(true);
  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <div>
      <div
        className={`fixed bottom-5 w-screen z-50 cursor-pointer text-white md:hidden flex items-center justify-center pt-2`}
        onClick={toggleNav}
      >
        {navOpen ? "" : <ArrowUp/>}
      </div>

      <motion.div
        className={`fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-md py-4 md:ml-0 md:gap-0 gap-5 md:justify-around items-center md:flex md:flex-row grid grid-cols-2 z-50 ${
          navOpen ? "block" : "hidden md:block"
        }`}
        initial={{ y: 100 }}
        animate={{ y: navOpen ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* cooked ahh implementation but allow it */}
        <div
          className={`fixed 
          bottom-5 w-screen z-50 cursor-pointer text-white md:hidden flex items-center justify-center pt-2`}
          onClick={toggleNav}
        >
          {navOpen ? <ArrowDown/> : ""}
        </div>
        <Link
          to="/dashboard"
          className={`text-white hover:text-white transition-colors text-center md:text-left ${
            location.pathname === "/dashboard" ? "font-bold" : ""
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/leaderboard"
          className={`text-white hover:text-white transition-colors pointer-events-none ${
            location.pathname === "/leaderboard" ? "font-bold" : ""
          }`}
        >
          <div className="flex flex-row gap-1 justify-center md:justify-start">
            <LockKeyhole />
            Leaderboard
          </div>
        </Link>
        <Link
          to="/account"
          className={`text-white hover:text-white transition-colors text-center md:text-left ${
            location.pathname === "/account" ? "font-bold" : ""
          }`}
        >
          Account
        </Link>
        <Link
          to="/timeline"
          className={`text-white hover:text-white transition-colors pointer-events-none ${
            location.pathname === "/timeline" ? "font-bold" : ""
          }`}
        >
          <div className="flex flex-row gap-1 justify-center md:justify-start">
            <LockKeyhole />
            Timeline
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default BottomBar;
