import { useContext } from "react";
import "./styles.css";
import { StoreContext } from "../../context/storeContext";
import { FormPacks } from "../../components/Form/FormPack";
import CardPack from "../../components/Cards/Pack";
export const CalcPacks = () => {
  const { packs, handleDeletePacks } = useContext(StoreContext);
  return (
    <div className="container">
      <div className="form">
        <FormPacks />
      </div>
      {packs &&
        packs
          .sort((a, b) => a.priceTotal - b.priceTotal)
          .map((item) => (
            <CardPack key={item.id} {...item} handle={handleDeletePacks} />
          ))}
    </div>
  );
};
