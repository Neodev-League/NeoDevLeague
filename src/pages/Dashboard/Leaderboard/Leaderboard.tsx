import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  Lightbulb,
  School,
  MessageCircle,
  LockKeyhole,
} from "lucide-react";
import BottomBar from "../DashNav";
import { Button } from "../../../components/Dashboard/button";
import SparklesText from "../../../components/Dashboard/sparkles-text";

const leaderboardData = [
  { rank: 1, school: "Waterloo CI", score: 92.5 },
  { rank: 2, school: "Laurel Heights SS (1)", score: 82 },
  { rank: 3, school: "Kitchener CI", score: 72 },
  { rank: 4, school: "Laurel Heights SS (2)", score: 69.5 },
  { rank: 5, school: "Bluevale CI", score: 68.5 },
  { rank: 6, school: "Cameron Heights CI", score: 65 },
  { rank: 7, school: "Mixed", score: 64.5 },
  { rank: 8, school: "Grand River CI", score: 63 },
  { rank: 9, school: "Forest Heights CI", score: 55.5 },  
];

export default function NeoLeaderboard() {
  const [selectedSchool, setSelectedSchool] = useState<number | null>(null);

  const sortedData = [...leaderboardData].sort((a, b) => b.score - a.score);

  const TopThree = () => (
    <div className="flex justify-center items-end mb-16 space-x-4">
      {[1, 0, 2].map((index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index }}
          className="text-center"
        >
          <div
            className={`flex flex-col items-center justify-center rounded-lg overflow-hidden ${
              index === 0
                ? "bg-gradient-to-b from-[#FFD700] to-[#FFA500] h-80 w-64"
                : index === 1
                ? "bg-gradient-to-b from-[#C0C0C0] to-[#A9A9A9] h-72 w-56"
                : "bg-gradient-to-b from-[#CD7F32] to-[#8B4513] h-64 w-48"
            }`}
          >
            <Trophy
              className={`text-gray-800 ${
                index === 0
                  ? "h-24 w-24"
                  : index === 1
                  ? "h-20 w-20"
                  : "h-16 w-16"
              } mb-4`}
            />
            <div className="bg-gray-800 bg-opacity-80 p-4 w-full">
              <p className="font-bold text-[#34D399] text-lg">
                {sortedData[index].school}
              </p>
              <p className="text-white text-2xl font-bold mt-2">
                {`${sortedData[index].score} pts`}
              </p>
              <p className="text-[#D1FAE5] mt-1">Rank #{index + 1}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen pb-20 flex justify-center items-center">
      <div className="absolute inset-0 bg-[url('../../assets/Neo-city.png')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
      <main className="relative z-20 p-8 w-full max-w-6xl">
        <motion.div
          className="text-center pb-12 pt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="pt-8 text-xl md:text-4xl font-extrabold text-[#D1FAE5]">
            NeoDev League
          </h1>
          <SparklesText text="Leaderboard" />
        </motion.div>

        <TopThree />

        {/* Full Leaderboard */}
        <motion.div
          className="mb-8 bg-gray-900 bg-opacity-90 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-[#D1FAE5]">
              Full Leaderboard
            </h3>
          </div>
          <div>
            <table className="w-full">
              <thead>
                <tr className="text-[#D1FAE5] border-b border-[#34D399]">
                  <th className="text-left p-2">Rank</th>
                  <th className="text-left p-2">School</th>
                  <th className="text-left p-2">Score</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((school, index) => (
                  <motion.tr
                    key={school.rank}
                    className="text-white hover:bg-gray-800 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() =>
                      setSelectedSchool(selectedSchool === index ? null : index)
                    }
                  >
                    <td className="p-2">{school.rank}</td>
                    <td className="p-2">{school.school}</td>
                    <td className="p-2">{school.score}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* School Details */}
        <AnimatePresence>
          {selectedSchool !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 bg-gray-900 bg-opacity-90 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-[#D1FAE5] mb-4">
                {sortedData[selectedSchool].school} Details
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center">
                  <School className="text-[#34D399] mr-2" />
                  <span className="text-white">Rank: {selectedSchool + 1}</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="text-[#34D399] mr-2" />
                  <span className="text-white">
                    Score: {sortedData[selectedSchool].score}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MVP and Most Innovative Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            className="bg-gray-900 bg-opacity-90 p-6 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-[#D1FAE5] mb-4 flex items-center">
              <Award className="mr-2 text-[#34D399]" /> MVP of the League
            </h3>
            <div>
              <h4 className="text-xl font-bold text-white">TBD</h4>
              <p className="text-[#34D399]">School</p>
              <p className="mt-2 text-white">Description...</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-900 bg-opacity-90 p-6 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#D1FAE5] mb-4 flex items-center">
              <Lightbulb className="mr-2 text-[#34D399]" /> Most Innovative
              Solution
            </h3>
            <div>
              <h4 className="text-xl font-bold text-white">School TBD</h4>
              <p className="text-[#34D399]">Project Name</p>
              <p className="mt-2 text-white">Description ...</p>
            </div>
          </motion.div>
        </div>

        {/* Quick Links */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-[#D1FAE5] mb-4">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="w-full bg-gradient-to-r from-[#34D399] to-green-500 hover:from-[#34D399] hover:to-green-600 text-white text-lg py-6 transition-all duration-300 transform hover:scale-105">
              <a
                className="flex flex-row items-center text-mms"
                href="https://discord.gg/ZvKXEKsuA7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-6 w-6" /> Join Discord
              </a>
            </Button>
            <Button className="w-full bg-darkerGreen text-white text-lg py-6 transition-all duration-300 transform hover:scale-105 pointer-events-none">
              <LockKeyhole className="mr-2 h-6 w-6" /> Submissions
            </Button>
          </div>
        </motion.div>
      </main>
      <BottomBar />
    </div>
  );
}
