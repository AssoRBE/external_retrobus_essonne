import { Link, useLocation } from "react-router-dom";

export default function Nav(){
  const { pathname } = useLocation();
  const LinkBtn = ({ to, children }) => (
    <Link
      to={to}
      className={`nav-btn ${pathname === to ? "active" : ""}`}
    >
      {children}
    </Link>
  );

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <LinkBtn to="/">Accueil</LinkBtn>
        <LinkBtn to="/parc">Parc de Véhicules</LinkBtn>
        <LinkBtn to="/retromerch">RétroMerch</LinkBtn>
      </div>
    </nav>
  );
}
