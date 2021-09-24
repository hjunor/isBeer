import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function Header() {
  return (
    <header className="container">
      <nav className="nav">
        <ul className="ul__list">
          <li>
            <Link to="/">Compara</Link>
          </li>
          <li>
            <Link to="/liters">Litros</Link>
          </li>
          <li>
            <Link to="/quant">Quantidade</Link>
          </li>
          <li>
            <Link to="/pack">Pack</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
