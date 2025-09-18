import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./styles.css";
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
        </Routes>
      </main>
    </Router>
  );
}
