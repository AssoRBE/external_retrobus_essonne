import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./styles.css";
import pageBg from "./assets/logo_arriere_plan.svg"; // ✅ ton fichier
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";

export default function App() {
  return (
    <Router>
      <Header />
      <main
        className="page-body page-with-mark"
        style={{
          "--page-mark": `url(${pageBg})`,
          "--mark-pos-x": "left",
          "--mark-pos-y": "center",
          "--mark-size": "620px",
          "--mark-opacity": "0.08",
          "--mark-offset-x": "0px",
          "--mark-offset-y": "0px",
        }}
      >
        <Routes>
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
        </Routes>
      </main>
    </Router>
  );
}
