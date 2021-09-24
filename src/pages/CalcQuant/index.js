import { useContext } from "react";
import "./styles.css";
import { StoreContext } from "../../context/storeContext";
import Beer from "../../components/Beer";
import FormQuant from "../../components/FormQuant";
export const CalcQuant = () => {
  const { quant, handleDeleteQuant } = useContext(StoreContext);

  console.log(quant);
  return (
    <div className="container">
      <div className="form">
        <FormQuant />
      </div>
      <div className="card">
        {quant &&
          quant
            .sort((a, b) => b.totalVolume - a.totalVolume)
            .map((item) => (
              <Beer key={item.id} {...item} handle={handleDeleteQuant} />
            ))}
      </div>
    </div>
  );
};
