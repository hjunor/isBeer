import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.wrapper__nav}>
          <p>BeerWFH</p>
          <ul className={styles.ul__list}>
            <li>
              <Link to="/">Dinheiro</Link>
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
