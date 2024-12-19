import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PeoplePage from "./pages/PeoplePage";
import PlanetsPage from "./pages/PlanetsPage";
import FilmsPage from "./pages/FilmsPage";
import StarshipsPage from "./pages/StarshipsPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/planets" element={<PlanetsPage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/starships" element={<StarshipsPage />} />
      </Routes>
    </div>
  );
}

export default App;
