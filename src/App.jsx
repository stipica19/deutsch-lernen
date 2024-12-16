import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main style={{ marginTop: "64px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:type" element={<GamePage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
