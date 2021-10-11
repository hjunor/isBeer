import { useContext } from "react";
import "./styles.css";
import { StoreContext } from "../../context/storeContext";
import FormQuant from "../../components/Form/FormQuant";
import CardQuant from "../../components/Cards/Quant";
export const CalcQuant = () => {
  const { quant, handleDeleteQuant } = useContext(StoreContext);

  return (
    <div className="container">
      <div className="form">
        <FormQuant />
      </div>
      <div className="card">
        {quant &&
          quant
            .reverse()
            .map((item) => (
              <CardQuant key={item.id} {...item} handle={handleDeleteQuant} />
            ))}
      </div>
    </div>
  );
};
