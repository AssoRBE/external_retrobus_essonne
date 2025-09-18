import "../styles.css";
import { useLocation } from "react-router-dom";

// Logos
import logoDefault from "../assets/rbe_logo.svg";
import logoMerch from "../assets/rbe_logo.svg";

import bg from "../assets/rbe_920.jpg";

export default function Header() {
  const { pathname } = useLocation();

  // Choix du logo selon la route
  let logo = logoDefault;
  if (pathname.startsWith("/retromerch")) logo = logoMerch || logoDefault;

  return (
    <header
      className="site-header"
      style={{
        "--header-h": "117px",
        "--bg-pos-y": "25%",     // hauteur de l’image
      }}
    >
      {/* Image de fond */}
      <div
        className="header-bg"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden="true"
      />
      {/* Contenu */}
      <div className="header-inner">
        <img src={logo} alt="RétroBus Essonne" className="header-logo" />
      </div>
    </header>
  );
}
