import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sponsor from "./pages/Sponsor/Sponsor";
import Team from "./pages/Team/Team";


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
