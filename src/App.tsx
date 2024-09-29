import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sponsor from "./pages/Sponsor/sponsor";
import Team from "./pages/Team/team";
import Login from "./pages/Login/Login";


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
