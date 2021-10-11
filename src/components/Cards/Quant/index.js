import React from "react";
import styles from "./styles.module.scss";
export default function CardQuant({
  id,
  title,
  totalVolume,
  priceTotal,
  price,
  value,
  volume,
  handle,
  qtd,
}) {
  console.log({
    id,
    title,
    totalVolume,
    priceTotal,
    price,
    value,
    volume,
    handle,
    qtd,
  });
  return (
    <div key={id} className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.total}>{`${qtd} ML` ?? ""}</div>
      <div className={styles.wrapper__button}>
        <button
          onClick={() => {
            handle(id);
          }}
        >
          Delete
        </button>
        <span>{priceTotal}</span>
      </div>
    </div>
  );
}
