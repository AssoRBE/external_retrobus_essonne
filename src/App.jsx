import React from "react";
import Header from "./components/Header.jsx";
import "./styles.css";
import pageBg from "./assets/logo_arriere_plan.svg"; // ✅ ton fichier

export default function App() {
  return (
    <>
      <Header />
      <main
        className="page-body page-with-mark"
        style={{
          // réglages rapides (tu peux changer à la volée)
          "--page-mark": `url(${pageBg})`,
          "--mark-pos-x": "left",   // left | center | right | 40px
          "--mark-pos-y": "center", // top | center | bottom | 20%
          "--mark-size": "620px",   // 520px, 40vw, contain...
          "--mark-opacity": "0.08", // 0.05–0.12 selon ton goût
          "--mark-offset-x": "0px", // décalage fin horizontal (+/-)
          "--mark-offset-y": "0px", // décalage fin vertical (+/-)
        }}
      >
        <h1>Bienvenue sur le site internet de l'Association RétroBus Essonne</h1>
        <p>Un peu de patience, le site internet arrive !</p>
        {/* ... tes sections/cartes ... */}
      </main>
    </>
  );
}
