import { Routes, Route, Navigate } from "react-router-dom";
import ThemePreview2 from "./pages/ThemePreview2";
import FreedomTech from "./pages/FreedomTech";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ThemePreview2 />} />
      <Route path="/theme2" element={<Navigate to="/" replace />} />
      <Route path="/freedomtech" element={<FreedomTech />} />
    </Routes>
  );
};

export default App;


