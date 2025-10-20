import { Routes, Route, Navigate } from "react-router-dom";
import ThemePreview2 from "./pages/ThemePreview2";
import FreedomTech from "./pages/FreedomTech";
import TimeForce from "./pages/TimeForce";
import Jobs from "./pages/Jobs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ThemePreview2 />} />
      <Route path="/theme2" element={<Navigate to="/" replace />} />
      <Route path="/freedomtech" element={<FreedomTech />} />
      <Route path="/timeforce" element={<TimeForce />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  );
};

export default App;


