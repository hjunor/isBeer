import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { RiMenu3Fill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";
function Header() {
  const { pathname } = useLocation();
  const { isActiveMenu, setIsActiveMenu } = useContext(StoreContext);
  useEffect(() => {
    setIsActiveMenu(false);
    // eslint-disable-next-line
  }, [pathname]);
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.wrapper__nav}>
          <p>BeerWFH</p>
          <button className={styles.menu_nav}>
            <RiMenu3Fill
              onClick={() => setIsActiveMenu(!isActiveMenu)}
              color="#fe0"
              size={32}
            />
          </button>
          <ul className={styles.ul__list}>
            <li>
              <Link className={pathname === "/" && styles.color_path} to="/">
                Dinheiro
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/liters" && styles.color_path}
                to="/liters"
              >
                Litros
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/quant" && styles.color_path}
                to="/quant"
              >
                Quantidade
              </Link>
            </li>
            <li>
              <Link
                className={pathname === "/pack" && styles.color_path}
                to="/pack"
              >
                Pack
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
