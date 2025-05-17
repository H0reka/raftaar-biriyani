import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BiriyaniHood from "./components/BiriyaniHood";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biriyanihood" element={<BiriyaniHood />} />
      </Routes>
    </Router>
  );
}
