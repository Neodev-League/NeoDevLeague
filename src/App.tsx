import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sponsor from "./pages/Sponsor/sponsor";
import Team from "./pages/Team/team";


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/sponsor" element={<Sponsor />} />
    </Routes>
  );
};

export default App;
