import React from "react";
import { Button } from "../../components/Dashboard/button";
import {
  Clock,
  MessageCircle,
  Users,
  School,
  Award,
  Rocket,
  // Code,
  Trophy,
  LockKeyhole,
} from "lucide-react";
import SparklesText from "../../components/Dashboard/sparkles-text";
import { motion } from "framer-motion";
import BottomBar from "./DashNav";
import { useNavigate } from "react-router-dom";

const DashboardHome: React.FC = () => {
  const navigate = useNavigate();
  const eventDate = new Date("2024-10-26T07:00:00");
  const [timeLeft, setTimeLeft] = React.useState(getTimeLeft());

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
    { name: "Member", role: "Frontend Dev", avatar: "🧑‍💻" },
    { name: "Member", role: "Backend Dev", avatar: "👩🏼‍💻" },
    { name: "Member", role: "UI/UX Designer", avatar: "🎨" },
    { name: "Member", role: "Backend Dev", avatar: "🧑🏾‍💻" },
    { name: "Member", role: "Frontend Dev", avatar: "👩🏽‍💻" },
    { name: "Member", role: "Backend Dev", avatar: "🧑🏿‍💻" },
    { name: "Member", role: "Team Leader", avatar: "👨🏻‍💻" },
    { name: "Member", role: "Pitch Specialist", avatar: "🗣️" },
  ];

  return (
    <div className="relative min-h-screen pb-20">
      <div className="absolute inset-0 bg-[url('../../assets/Neo-city.png')] bg-cover bg-center z-0 " />
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      <main className="relative z-20 p-8">
        <motion.div
          className="text-center pb-12 pt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="pt-8 text-xl md:text-4xl font-extrabold text-[#D1FAE5]">
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
          <h2 className="text-4xl font-bold pt-24 text-[#D1FAE5] mb-4">
            WE ARE
          </h2>
          <div className="flex justify-center md:space-x-10 md:flex-row flex-col">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="md:text-6xl text-4xl font-bold text-white">
                  {value}
                </span>
                <p className="text-2xl text-white">{unit}</p>
              </motion.div>
            ))}
          </div>
          <h2 className="text-4xl font-bold text-[#D1FAE5] mt-4">
            AWAY FROM THE EVENT
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 bg-opacity-10 backdrop-blur-sm z-50 mt-10" />
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#D1FAE5]  mb-6 text-center">
              <span className="text-white">Team: </span>Coming Soon!
            </h2>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <School className="text-white mr-2" />
                  <span className="md:text-xl sm:text-lg text-mdtext-white">
                    School: Coming Soon!
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="text-white mr-2" />
                  <span className="md:text-xl sm:text-lg text-md text-white">
                    ? Members
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="text-white mr-2" />
                  <span className="md:text-xl sm:text-lg text-md text-white">
                    Rank: Coming Soon!
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
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
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-[#D1FAE5] mb-4">
              Quick Links
            </h3>
            <Button className="w-full mb-4 bg-gradient-to-r from-[#34D399] to-green-500 hover:from-[#34D399] hover:to-green-600 text-white text-lg py-6 transition-all duration-300 transform">
              <a
                className="flex flex-row items-center text-mms"
                href="https://discord.gg/ZvKXEKsuA7"
                target="_blank"
              >
                <MessageCircle className="mr-2 h-6 w-6" /> Join Discord
              </a>
            </Button>
            <Button
              className="w-full mb-4 bg-gradient-to-r from-[#34D399] to-green-500 hover:from-[#34D399] hover:to-green-600 text-white text-lg py-6 transition-all duration-300 transform"
              onClick={() => navigate("/")}
            >
              <Rocket className="mr-2 h-6 w-6" /> Navigate To NeoDev Home
            </Button>
            <Button className="w-full bg-darkerGreen text-white text-lg py-6 transition-all duration-300 transform pointer-events-none">
              <LockKeyhole className="mr-2 h-6 w-6" /> Submissions
            </Button>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#D1FAE5] mb-4">
              Coming Soon
            </h3>
            <ul className="space-y-4 text-white">
              <motion.li
                className="items-center flex"
                whileHover={{ scale: 1.05 }}
              >
                <Trophy className="text-[#34D399] mr-2 h-6 w-6" />
                <span className="text-lg">
                  Prize Pool{" "}
                  <span className="text-[#34D399] font-semibold md:text-lg text-md flex">
                    $1,000,000
                  </span>
                </span>
              </motion.li>
              <motion.li
                className="items-center flex"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="text-[#34D399] mr-2 h-6 w-6" />
                <span className="text-lg">
                  Duration{" "}
                  <span className="text-[#34D399] font-semibold md:text-lg text-md flex">
                    15 hours of intense coding
                  </span>
                </span>
              </motion.li>
              <motion.li
                className="items-center flex"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="text-[#34D399] mr-2 h-6 w-6" />
                <span className="text-lg">
                  Participants{" "}
                  <span className="text-[#34D399] font-semibold md:text-lg text-md flex">
                    100+ developers region-wide
                  </span>
                </span>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </main>
      <BottomBar />
    </div>
  );
};

export default DashboardHome;
