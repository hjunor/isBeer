import React from "react";
import styles from "./styles.module.scss";
export default function CardPack({
  id,
  title,
  totalVolume,

  price,

  handle,
}) {
  return (
    <div key={id} className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.total}>{`${totalVolume.toFixed(2)} ML` ?? ""}</div>
      <div className={styles.wrapper__button}>
        <button
          onClick={() => {
            handle(id);
          }}
        >
          Delete
        </button>
        <span>{price}</span>
      </div>
    </div>
  );
}
