import Ripple from "../../components/Ripple";
import Navbarr from "../../components/Navbar";
import Texttt from "../../components/Texttt";
import MNav from "../../components/mNavbar"; // THESE TWO NAVS ARE OUT OF USE WHILE THE UNDER ONE IS IN USE
import Logo from "../../assets/logo";
import { Dock, DockIcon } from "../../components/nDock";
import "../../style.css";
import "../../glitch.css";
import WordRotate from "../../components/textreveal";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <a
          href="http://localhost:5173"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo />
        </a>
      </div>

      <div className="relative flex items-center justify-center min-h-screen">
        <div className="text-center relative z-10 mt-24">
          <Texttt />
          <div className="mt-10">
            <span className="!text-2xl md:text-6xl font-bold">
              The Future of
            </span>
            <br />
            <span className="text-2xl md:text-4xl font-bold">
              <WordRotate
                className="font-bold"
                words={[
                  "Algorithm Design",
                  "Problem Solving",
                  "Teamwork",
                  "Creativity",
                  "Coding Challenges",
                  "Efficiency",
                  "Optimization",
                  "Hackathons",
                  "Data Structures",
                  "Mathematics",
                  "Software Development",
                  "Programming Contests",
                  "Debugging",
                  "Skill Enhancement",
                  "Logical Thinking",
                  "Performance Tuning",
                  "Computational Thinking",
                  "Peer Learning",
                  "Knowledge Sharing",
                  "Project Management",
                  "Technical Skills",
                  "Strategic Thinking",
                  "Code Review",
                  "Mentorship",
                  "Brainstorming",
                  "Adaptability",
                  "Continuous Improvement",
                  "Software Engineering",
                  "Code Quality",
                  "Algorithmic Thinking",
                  "Research and Development",
                  "Innovative Solutions",
                  "Collaborative Coding",
                  "Tech Community",
                  "Problem Decomposition",
                  "Code Optimization",
                  "Performance Analysis",
                  "Solution Architecture",
                  "Programming Languages",
                  "Technical Competitions",
                  "Efficient Algorithms",
                  "Knowledge Exchange",
                  "Competitive Analysis",
                  "Code Competitions",
                  "Scalability",
                  "System Design",
                  "Programming Puzzles",
                  "Interdisciplinary Skills",
                  "Technical Challenges",
                  "Prototyping",
                  "Functional Programming",
                  "Software Proficiency",
                  "Solution Implementation",
                  "Technological Advances",
                  "Skill Development",
                  "Innovative Thinking",
                  "Dynamic Programming",
                  "Algorithmic Efficiency",
                  "Technical Problem Solving",
                  "Software Optimization",
                  "Data Analysis",
                  "System Efficiency",
                  "Code Debugging",
                  "Collaboration Tools",
                  "Tech Innovation",
                  "Analytical Skills",
                  "Knowledge Integration",
                  "Project Collaboration",
                  "Distributed Systems",
                  "Software Projects",
                  "Tech Solutions",
                  "Hands-On Coding",
                  "Programming Practice",
                  "Technical Expertise",
                  "Code Collaboration",
                  "Innovation Labs",
                  "Research Projects",
                  "Efficient Coding",
                  "Tech Insights",
                  "Code Strategies",
                  "Collaborative Projects",
                  "Engineering Solutions",
                  "Innovation Challenges",
                  "Tech Ecosystem",
                  "Skill Competitions",
                  "Data Management",
                  "Code Efficiency",
                  "Software Challenges",
                  "Team Innovation",
                  "Project Development",
                  "Problem Analysis",
                  "Programming Skills",
                  "Software Solutions",
                  "Tech Synergy",
                  "Innovative Projects",
                  "Engineering Skills",
                  "Coding Efficiency",
                  "Tech Skills",
                  "Team Solutions",
                  "Collaborative Efforts",
                  "Solution Development",
                  "Tech Collaboration",
                  "Knowledge Advancement",
                ]}
              />
            </span>
          </div>
        </div>
        <Ripple />
      </div>
      <div className="pt-10 absolute bottom-10 w-full text-center text-xl font-bold">
        <span>
          Coming soon to the Waterloo Region
          <br /> . . .{" "}
        </span>
      </div>
    </div>
  );
};

export default Home;
 