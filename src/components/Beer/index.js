import React from "react";
import "./styles.css";
export default function Beer({
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
  return (
    <div key={id} className="cardList">
      <h2>{title}</h2>
      <h2>{`${totalVolume} ML` ?? ""}</h2>
      <h2>{price}</h2>
      <h2>{qtd}</h2>
      <h2>{value}</h2>
      <h2>{volume} ML</h2>
      <h2>{priceTotal ?? ""}</h2>

      <button
        onClick={() => {
          handle(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
