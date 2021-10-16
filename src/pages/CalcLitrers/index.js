import React, { useContext } from "react";
import CardLitres from "../../components/Cards/Litrers";
import FormLiters from "../../components/Form/FormLiters";
import { StoreContext } from "../../context/storeContext";

export default function CalcLiters() {
  const { liters, handleDeleteLiters } = useContext(StoreContext);
  return (
    <div className="container">
      <div className="form ">
        <FormLiters />
      </div>
      {liters &&
        liters
          .sort((a, b) => b.qtd - a.qtd)
          .map((item) => (
            <CardLitres key={item.id} {...item} handle={handleDeleteLiters} />
          ))}
    </div>
  );
}
