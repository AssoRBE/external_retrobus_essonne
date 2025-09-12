// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import system from "./theme";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Vehicles from "./pages/Vehicles.jsx";
import RetroMerch from "./pages/RetroMerch.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider value={system}> {/* ⬅️ v3 = prop `value`, pas `theme` */}
      <BrowserRouter>
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parc" element={<Vehicles />} />
            <Route path="/retromerch" element={<RetroMerch />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
