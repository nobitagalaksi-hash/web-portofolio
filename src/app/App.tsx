import { BrowserRouter, Routes, Route } from "react-router";
import { AchievementProvider } from "./contexts/AchievementContext";
import { Portfolio } from "./pages/Portfolio";
import { Admin } from "./pages/Admin";

export default function App() {
  return (
    <AchievementProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </AchievementProvider>
  );
}