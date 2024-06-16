import Ripple from "../../components/Ripple";
import Texttt from "../../components/Texttt";
import Logo from "../../assets/logo";
import "../../style.css";
import "../../glitch.css";
import WordRotate from "../../components/textreveal";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <a
          href="https://neoleague.dev"
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
                  "Problem Solving",
                  "Teamwork",
                  "Creativity",
                  "Challenges",
                  "Efficiency",
                  "Optimization",
                  "Software Development",
                  "Programming Contests",
                  "Debugging",
                  "Peer Learning",
                  "Knowledge Sharing",
                  "Project Management",
                  "Technical Skills",
                  "Strategic Thinking",
                  "Brainstorming",
                  "Adaptability",
                  "Software Engineering",
                  "Code Quality",
                  "Algorithmic Thinking",
                  "Research and Development",
                  "Innovative Solutions",
                  "Collaborative Coding",
                  "Tech Community",
                  "Code Optimization",
                  "Technical Competitions",
                  "Knowledge Exchange",
                  "Code Competitions",
                  "System Design",
                  "Interdisciplinary Skills",
                  "Technical Challenges",
                  "Prototyping",
                  "Functional Programming",
                  "Software Proficiency",
                  "Solution Implementation",
                  "Skill Development",
                  "Innovative Thinking",
                  "Dynamic Programming",
                  "Technical Problem Solving",
                  "Software Optimization",
                  "System Efficiency",
                  "Tech Innovation",
                  "Knowledge Integration",
                  "Project Collaboration",
                  "Distributed Systems",
                  "Software Projects",
                  "Tech Solutions",
                  "Programming Practice",
                  "Technical Expertise",
                  "Code Collaboration",
                  "Research Projects",
                  "Code Strategies",
                  "Collaborative Projects",
                  "Engineering Solutions",
                  "Innovation Challenges",
                  "Tech Ecosystem",
                  "Skill Competitions",
                  "Code Efficiency",
                  "Software Challenges",
                  "Team Innovation",
                  "Project Development",
                  "Programming Skills",
                  "Software Solutions",
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
      <div className="!text-white pt-10 absolute bottom-10 w-full text-center text-xl font-bold">
        <span>
          Coming soon to the Waterloo Region
          <br /> . . .{" "}
        </span>
      </div>
    </div>
  );
};

export default Home;
