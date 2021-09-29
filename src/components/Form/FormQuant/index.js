import { useEffect, useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import "./styles.css";
import { arrayQuant } from "../../../utils/isQuant";
import { StoreContext } from "../../../context/storeContext";
function FormQuant() {
  const [title, setTitle] = useState("");
  const [volume, setVolume] = useState(0);
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState(0);
  const [result, setResult] = useState([]);
  const { setQuant, quant } = useContext(StoreContext);
  useEffect(() => {
    const result = arrayQuant(price, value, volume);
    setResult(result);
  }, [volume, price, value]);
  function handleClick() {
    setQuant([
      ...quant,
      {
        id: uuid(),
        totalVolume: result.priceTotal,
        qtd: result.qtd,
        volume,
        price,
        value,
        title,
      },
    ]);
  }
  return (
    <div className="form">
      <div className="input">
        <label htmlFor="">quantidade UND</label>
        <input
          placeholder=" "
          onChange={({ target }) => setValue(target.value)}
          type="text"
        />
      </div>
      <div className="input">
        <label htmlFor="">preço</label>

        <input
          placeholder=""
          onChange={({ target }) => setPrice(target.value)}
          type="text"
        />
      </div>
      <div className="input">
        <label htmlFor="">quantidade de ml</label>

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

      <h2>{!!result.qtd ? `${result.qtd} ML` : "..."}</h2>
      <button
        disabled={!(!!price && !!value && !!volume && !!title)}
        onClick={handleClick}
      >
        add
      </button>
    </div>
  );
}

export default FormQuant;
