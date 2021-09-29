import { useEffect, useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import "./styles.css";
import { arrayLiters } from "../../../utils/isLiters";
import { formatAmount } from "../../../utils/formatAmount";
import { StoreContext } from "../../../context/storeContext";
function FormLiters() {
  const [title, setTitle] = useState("");
  const [volume, setVolume] = useState(0);
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState(0);
  const [result, setResult] = useState([]);
  const { liters, setLiters } = useContext(StoreContext);
  useEffect(() => {
    const result = arrayLiters(price, value, volume);
    setResult(result);
  }, [volume, price, value]);

  function handleClick() {
    setLiters([
      ...liters,
      {
        id: uuid(),
        totalVolume: result.volume,
        qtd: result.qtd,
        volume,
        price: formatAmount(price),
        value: value,
        title,
      },
    ]);
  }
  return (
    <div className="form">
      <div className="input">
        <label htmlFor="">preço</label>
        <input
          placeholder=" "
          onChange={({ target }) => setPrice(target.value)}
          type="text"
        />
      </div>
      <div className="input">
        <label htmlFor="">quantidade de ml</label>

        <input
          placeholder=""
          onChange={({ target }) => setValue(target.value)}
          type="text"
        />
      </div>
      <div className="input">
        <label htmlFor="">quantidade total de litro</label>

        <input
          placeholder=""
          onChange={({ target }) => setVolume(target.value)}
          type="text"
        />
      </div>
      <div className="input">
        <label htmlFor=""> Cerveja</label>

        <input
          placeholder=""
          onChange={({ target }) => setTitle(target.value)}
          type="text"
        />
      </div>

      <h2>{!!result.qtd ? `${result.qtd} unidades - rf` : "..."}</h2>
      <h2>{!!result.priceTotal ? `R$ ${result.priceTotal}` : "..."}</h2>
      <button
        disabled={!(!!price && !!value && !!volume && !!title)}
        onClick={handleClick}
      >
        add
      </button>
    </div>
  );
}

export default FormLiters;
