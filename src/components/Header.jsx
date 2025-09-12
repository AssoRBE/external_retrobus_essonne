import "../styles.css";
import { useLocation } from "react-router-dom";

// Logos
import logoDefault from "../assets/rbe_logo.svg";
import logoMerch from "../assets/rbe_logo_merch.svg";   // optionnel

import bg from "../assets/rbe_920.jpg";

export default function Header(){
  const { pathname } = useLocation();

  // Choix du logo selon la route
  let logo = logoDefault;
  if (pathname.startsWith("/parc")) logo = logoParc || logoDefault;
  if (pathname.startsWith("/retromerch")) logo = logoMerch || logoDefault;

  return (
    <header
      className="site-header"
      style={{
        "--header-h":"120px",
        "--bg-pos-y":"50%",
        "--blur-width":"33%"
      }}
    >
      {/* Image nette */}
      <div className="header-bg" style={{ backgroundImage:`url(${bg})` }} aria-hidden="true" />

      {/* Fallback flou clippé */}
      <div className="header-bg-blur" style={{ backgroundImage:`url(${bg})` }} aria-hidden="true" />
      <div className="blur-gradient" aria-hidden="true" />

      {/* Verre dépoli */}
      <div className="frosted" aria-hidden="true" />

      {/* Contenu */}
      <div className="header-inner">
        <img src={logo} alt="RétroBus Essonne" className="header-logo" />
      </div>
    </header>
  );
}

