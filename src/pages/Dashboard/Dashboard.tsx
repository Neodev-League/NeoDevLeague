import React from "react";
import { Button } from "../../components/Dashboard/button";
import {
  Clock,
  MessageCircle,
  Users,
  // School,
  // Award,
  Rocket,
  // Code,
  // Trophy,
  CircleUserRound,
  LockKeyhole,
} from "lucide-react";
import SparklesText from "../../components/Dashboard/sparkles-text";
import { motion } from "framer-motion";
import BottomBar from "./DashNav";
import { useNavigate } from "react-router-dom";

const DashboardHome: React.FC = () => {
  const navigate = useNavigate();
  const eventDate = new Date("2024-10-26T12:00:00");
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

  const rulebookURL = 'https://docs.google.com/document/d/1qoSGdZYr7kTudDL1gKB1rxv1xctbXGhCMbqw9yvPbLA/edit?tab=t.0';

  return (
    <div className="relative min-h-screen pb-20">
      <div className="absolute inset-0 bg-[url('../../assets/Neo-city.png')] bg-cover bg-center z-0 " />
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
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
                <Clock className="text-[#34D399] mr-2 h-6 w-6" />
                <span className="text-lg">
                  Duration{" "}
                  <span className="text-[#34D399] font-semibold md:text-lg text-md flex">
                    10 hours of development
                  </span>
                </span>
              </motion.li>
              <motion.li
                className="items-center flex"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="text-[#34D399] mr-2 h-6 w-6" />
                <span className="text-lg">
                  Teams{" "}
                  <span className="text-[#34D399] font-semibold md:text-lg text-md flex">
                    10
                  </span>
                </span>
              </motion.li>
              <motion.li
                className="items-center flex"
                whileHover={{ scale: 1.05 }}
              >
                <CircleUserRound className="text-[#34D399] mr-2 h-6 w-6" />
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
        
        <div className="mt-20 flex items-center justify-center">
            <iframe src={rulebookURL} width={1200} height={1000} className="rounded-md" />
        </div>
      </main>
      <BottomBar />
    </div>
  );
};

export default DashboardHome;
