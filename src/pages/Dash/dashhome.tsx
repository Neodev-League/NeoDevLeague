import React from "react";
import { Button } from "../../components/ui/button";
import {
  Clock,
  MessageCircle,
  Users,
  School,
  Award,
  Rocket,
  Code,
  Trophy,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import SparklesText from "../../components/sparkles-text";
import { motion } from "framer-motion";

// BottomBar component definition
const BottomBar: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 flex justify-around items-center"
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 100 }}
  >
    {children}
  </motion.div>
);

const DashboardHome: React.FC = () => {
  const eventDate = new Date("2024-10-26T07:00:00");
  const [timeLeft, setTimeLeft] = React.useState(getTimeLeft());
  const location = useLocation();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const difference = +eventDate - +new Date();
    const timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
      timeLeft.seconds = Math.floor((difference / 1000) % 60);
    }

    return timeLeft;
  }

  const teamMembers = [
    { name: "Alice", role: "Frontend Dev", avatar: "🦄" },
    { name: "Bob", role: "Backend Dev", avatar: "🐉" },
    { name: "Charlie", role: "UI/UX Designer", avatar: "🦋" },
    { name: "Diana", role: "Backend Dev", avatar: "🦉" },
    { name: "Ethan", role: "Frontend Dev", avatar: "🐙" },
    { name: "Fiona", role: "Backend Dev", avatar: "🦊" },
    { name: "George", role: "Team Leader", avatar: "🐼" },
    { name: "Hannah", role: "Frontend Dev", avatar: "🦅" },
  ];

  return (
    <div className="relative min-h-screen pb-16">
      <div className="absolute inset-0 bg-[url('../../assets/neo-citys.jpg')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
      <main className="relative z-20 p-8">
        <motion.div
          className="text-center pb-12 pt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="pt-8 text-4xl font-extrabold text-white">
            Welcome to the NeoDev League
          </h1>
          <SparklesText text="Dashboard" />
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold pt-24 text-[#34D399] mb-4">
            WE ARE
          </h2>
          <div className="flex justify-center space-x-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-6xl font-bold text-[#34D399]">
                  {value}
                </span>
                <p className="text-2xl text-white">{unit}</p>
              </motion.div>
            ))}
          </div>
          <h2 className="text-4xl font-bold text-white mt-4">
            AWAY FROM THE EVENT
          </h2>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#34D399] mb-6 text-center">
            Team Hurricanes
          </h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <School className="text-[#34D399] mr-2" />
                <span className="text-xl text-white">Laurel Heights</span>
              </div>
              <div className="flex items-center">
                <Users className="text-[#34D399] mr-2" />
                <span className="text-xl text-white">8 Members</span>
              </div>
              <div className="flex items-center">
                <Award className="text-[#34D399] mr-2" />
                <span className="text-xl text-white">Rank: #???</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-gray-800 bg-opacity-50 rounded-lg p-4 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-2">{member.avatar}</div>
                  <h3 className="text-lg font-semibold text-[#34D399]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-white">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-[#34D399] mb-4">
              Quick Links
            </h3>
            <Button className="w-full mb-4 bg-gradient-to-r from-[#34D399] to-green-500 hover:from-[#34D399] hover:to-green-600 text-white text-lg py-6 transition-all duration-300 transform hover:scale-105">
              <MessageCircle className="mr-2 h-6 w-6" /> Join Discord
            </Button>
            <Button className="w-full mb-4 bg-gradient-to-r from-[#34D399] to-green-500 hover:from-[#34D399] hover:to-green-600 text-white text-lg py-6 transition-all duration-300 transform hover:scale-105">
              <Rocket className="mr-2 h-6 w-6" /> Launch Challenges
            </Button>
            <Button className="w-full bg-gradient-to-r from-[#34D399] to-green-500 hover:from-[#34D399] hover:to-green-600 text-white text-lg py-6 transition-all duration-300 transform hover:scale-105">
              <Code className="mr-2 h-6 w-6" /> Submissions
            </Button>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#34D399] mb-4">
              Coming Soon
            </h3>
            <ul className="space-y-4 text-white">
              <motion.li
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Trophy className="text-[#34D399] mr-2 h-6 w-6" />
                <span className="text-lg">
                  Prize Pool:{" "}
                  <span className="text-[#34D399] font-semibold">
                    $1,000,000
                  </span>
                </span>
              </motion.li>
              <motion.li
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="text-[#34D399] mr-2 h-6 w-6" />
                <span className="text-lg">
                  Duration:{" "}
                  <span className="text-[#34D399] font-semibold">
                    15 hours of intense coding
                  </span>
                </span>
              </motion.li>
              <motion.li
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="text-[#34D399] mr-2 h-6 w-6" />
                <span className="text-lg">
                  Participants:{" "}
                  <span className="text-[#34D399] font-semibold">
                    100+ developers region-wide
                  </span>
                </span>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </main>

      <BottomBar>
        <Link
          to="/dashboard"
          className={`text-[#34D399] hover:text-white transition-colors ${
            location.pathname === "/dashboard" ? "font-bold" : ""
          }`}
        >
          Dashboard
        </Link>
        <Link
          to="/leaderboard"
          className={`text-[#34D399] hover:text-white transition-colors ${
            location.pathname === "/leaderboard" ? "font-bold" : ""
          }`}
        >
          Leaderboard
        </Link>
        <Link
          to="/account"
          className={`text-[#34D399] hover:text-white transition-colors ${
            location.pathname === "/account" ? "font-bold" : ""
          }`}
        >
          Account
        </Link>
        <Link
          to="/timeline"
          className={`text-[#34D399] hover:text-white transition-colors ${
            location.pathname === "/timeline" ? "font-bold" : ""
          }`}
        >
          Timeline
        </Link>
      </BottomBar>
    </div>
  );
};

export default DashboardHome;
