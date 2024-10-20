"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  Lightbulb,
  ArrowUpDown,
  Users,
  School,
  MessageCircle,
  LockKeyhole,
} from "lucide-react";
import { Button } from "../../../components/Dashboard/button";
import SparklesText from "../../../components/Dashboard/sparkles-text";

const leaderboardData = [
  { rank: 1, school: "Tech University", score: 1000, members: 8 },
  { rank: 2, school: "Innovation College", score: 950, members: 7 },
  { rank: 3, school: "Digital Institute", score: 900, members: 8 },
  { rank: 4, school: "Code Academy", score: 850, members: 6 },
  { rank: 5, school: "Data Science School", score: 800, members: 7 },
  { rank: 6, school: "AI University", score: 750, members: 8 },
  { rank: 7, school: "Cyber Security College", score: 700, members: 6 },
  { rank: 8, school: "Web Dev Institute", score: 650, members: 7 },
  { rank: 9, school: "Mobile App Academy", score: 600, members: 8 },
  { rank: 10, school: "Cloud Computing School", score: 550, members: 7 },
];

export default function NeoLeaderboard() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedSchool, setSelectedSchool] = useState<number | null>(null);

  const sortedData = [...leaderboardData].sort((a, b) =>
    sortOrder === "desc" ? b.score - a.score : a.score - b.score
  );

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  return (
    <div className="relative min-h-screen pb-20 flex justify-center items-center">
      <div className="absolute inset-0 bg-[url('../../assets/Neo-city.png')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
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

        {/* Victory Podium */}
        <div className="flex justify-center items-end mb-16">
          {[1, 0, 2].map((index, podiumIndex) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * podiumIndex }}
              className={`text-center mx-4 ${
                podiumIndex === 1 ? "mb-8" : podiumIndex === 0 ? "mb-4" : "mb-12"
              }`}
            >
              <div
                className={`bg-gradient-to-b ${
                  index === 0
                    ? "from-[#FFD700] to-[#FFA500]"
                    : index === 1
                    ? "from-[#C0C0C0] to-[#A9A9A9]"
                    : "from-[#CD7F32] to-[#8B4513]"
                } ${
                  podiumIndex === 1 ? "h-40 w-40" : "h-32 w-32"
                } flex items-center justify-center rounded-t-lg`}
              >
                <Trophy
                  className={`text-gray-800 ${
                    podiumIndex === 1 ? "h-20 w-20" : "h-16 w-16"
                  }`}
                />
              </div>
              <div className="bg-gray-800 bg-opacity-80 p-4 rounded-b-lg">
                <p className="font-bold text-[#34D399]">
                  {sortedData[index].school}
                </p>
                <p className="text-white">{sortedData[index].score}</p>
              </div>
            </motion.div>
          ))}
        </div>

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
            <Button
              variant="outline"
              size="sm"
              onClick={toggleSortOrder}
              className="text-[#34D399] border-[#34D399] hover:bg-[#34D399] hover:text-white"
            >
              Sort {sortOrder === "desc" ? "Ascending" : "Descending"}
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-[#D1FAE5] border-b border-[#34D399]">
                  <th className="text-left p-2">Rank</th>
                  <th className="text-left p-2">School</th>
                  <th className="text-left p-2">Score</th>
                  <th className="text-left p-2">Members</th>
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
                    <td className="p-2">
                      {sortOrder === "desc"
                        ? index + 1
                        : sortedData.length - index}
                    </td>
                    <td className="p-2">{school.school}</td>
                    <td className="p-2">{school.score}</td>
                    <td className="p-2">{school.members}</td>
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
                  <span className="text-white">
                    Rank:{" "}
                    {sortOrder === "desc"
                      ? selectedSchool + 1
                      : sortedData.length - selectedSchool}
                  </span>
                </div>
                <div className="flex items-center">
                  <Trophy className="text-[#34D399] mr-2" />
                  <span className="text-white">
                    Score: {sortedData[selectedSchool].score}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="text-[#34D399] mr-2" />
                  <span className="text-white">
                    Members: {sortedData[selectedSchool].members}
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
              <h4 className="text-xl font-bold text-white">Jane Doe</h4>
              <p className="text-[#34D399]">Tech University</p>
              <p className="mt-2 text-white">
                Outstanding performance across all challenges
              </p>
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
              <h4 className="text-xl font-bold text-white">Team Innovators</h4>
              <p className="text-[#34D399]">Innovation College</p>
              <p className="mt-2 text-white">
                Revolutionizing AI-driven sustainable energy solutions
              </p>
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
    </div>
  );
}
