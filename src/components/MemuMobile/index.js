import styles from "./styles.module.scss";

import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import { Link, useLocation } from "react-router-dom";

const MenuMobile = () => {
  const { pathname } = useLocation();

  const { isActiveMenu } = useContext(StoreContext);
  if (isActiveMenu)
    return (
      <div className={styles.container}>
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
    );

  return "";
};

export default MenuMobile;
