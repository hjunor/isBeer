import { useContext } from "react";
import "./styles.css";
import { StoreContext } from "../../context/storeContext";
import FormVolume from "../../components/FormVolume";
import Beer from "../../components/Beer";
export const CalcVolume = () => {
  const { beers, handleDeleteBeer } = useContext(StoreContext);
  console.log(beers);
  return (
    <div className="container">
      <div className="form">
        <FormVolume />
      </div>
      <div className="card">
        {beers &&
          beers
            .sort((a, b) => b.totalVolume - a.totalVolume)
            .map((item) => (
              <Beer key={item.id} {...item} handle={handleDeleteBeer} />
            ))}
      </div>
    </div>
  );
};
