import { useContext } from "react";
import "./styles.css";
import { StoreContext } from "../../context/storeContext";
import CardVolume from "../../components/Cards/Volume";
import FormVolume from "../../components/Form/FormVolume";
export const CalcVolume = () => {
  const { beers, handleDeleteBeer } = useContext(StoreContext);
  console.log(beers);
  return (
    <div className="container">
      <div className="form">
        <FormVolume />
      </div>

      {beers &&
        beers
          .sort((a, b) => b.totalVolume - a.totalVolume)
          .map((item) => (
            <CardVolume key={item.id} {...item} handle={handleDeleteBeer} />
          ))}
    </div>
  );
};
