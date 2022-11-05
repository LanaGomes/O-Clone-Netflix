import React from "react";
import "./ColorsVariables.css";
import "./Header.css";
import logoNetflix from "../imagens/logoNetflix.png";

function Header() {
  return (
    <div className="header-Container">
      <img src={logoNetflix} alt="logo netflix" />
      <h2>Início</h2>
      <h2>Séries</h2>
      <h2>Filmes</h2>
    </div>
  );
}

export default Header;
