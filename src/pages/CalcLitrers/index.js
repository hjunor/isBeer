import React, { useContext } from "react";
import Beer from "../../components/Beer";
import FormLiters from "../../components/Form/FormLiters";
import { StoreContext } from "../../context/storeContext";

export default function CalcLiters() {
  const { liters, handleDeleteLiters } = useContext(StoreContext);
  return (
    <div className="container">
      <div className="form">
        <FormLiters />
      </div>
      <div className="card">
        {liters &&
          liters
            .sort((a, b) => b.totalVolume - a.totalVolume)
            .map((item) => (
              <Beer key={item.id} {...item} handle={handleDeleteLiters} />
            ))}
      </div>
    </div>
  );
}
