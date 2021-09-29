import { useContext } from "react";
import "./styles.css";
import { StoreContext } from "../../context/storeContext";
import Beer from "../../components/Beer";
import { FormPacks } from "../../components/Form/FormPack";
export const CalcPacks = () => {
  const { packs, handleDeletePacks } = useContext(StoreContext);
  return (
    <div className="container">
      <div className="form">
        <FormPacks />
      </div>
      <div className="card">
        {packs &&
          packs
            .sort((a, b) => a.priceTotal - b.priceTotal)
            .map((item) => (
              <Beer key={item.id} {...item} handle={handleDeletePacks} />
            ))}
      </div>
    </div>
  );
};
