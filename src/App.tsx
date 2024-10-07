import { Routes, Route } from "react-router-dom";
import StatusContext from "./contexts/StatusContext";
import Home from "./pages/Home/Home";
import Sponsor from "./pages/Sponsor/sponsor";
import Team from "./pages/Team/team";
import Login from "./pages/Login/Login";
import DashboardHome from "./pages/Dashboard/Dashboard";
import DashboardAccount from "./pages/Dashboard/Account/Account";
import DashboardTimeline from "./pages/Dashboard/Timeline/Timeline";
import DashboardLeaderboard from "./pages/Dashboard/Leaderboard/Leaderboard";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <StatusContext>
            <DashboardHome />
          </StatusContext>
        }
      />
      <Route
        path="/account"
        element={
          <StatusContext>
            <DashboardAccount />
          </StatusContext>
        }
      />
      <Route
        path="/leaderboard"
        element={
          <StatusContext>
            <DashboardLeaderboard />
          </StatusContext>
        }
      />
      <Route
        path="/timeline"
        element={
          <StatusContext>
            <DashboardTimeline />
          </StatusContext>
        }
      />
    </Routes>
  );
};

export default App;
