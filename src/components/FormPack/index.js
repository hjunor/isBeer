import { arrayPacks } from "../../utils/isPacks";
import { useEffect, useState, useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import { v4 as uuid } from "uuid";
import "./styles.css";
import { formatAmount } from "../../utils/formatAmount";
export function FormPacks() {
  const [title, setTitle] = useState("");
  const [volume, setVolume] = useState(0);
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState(0);
  const [result, setResult] = useState([]);
  const { setPacks, packs } = useContext(StoreContext);
  useEffect(() => {
    const result = arrayPacks(price, value, volume);
    setResult(result);
  }, [volume, price, value]);

  function handleClick() {
    setPacks([
      ...packs,
      {
        id: uuid(),
        totalVolume: result.priceTotal,
        qtd: result.qtd,
        volume,
        price: formatAmount(price),
        value: formatAmount(value),
        title,
      },
    ]);
  }
  return (
    <div className="form">
      <div className="input">
        <label htmlFor="">valor do pack</label>
        <input
          placeholder=" "
          onChange={({ target }) => setPrice(target.value)}
          type="text"
        />
      </div>
      <div className="input">
        <label htmlFor="">quantidade no pack</label>

        <input
          placeholder=""
          onChange={({ target }) => setValue(target.value)}
          type="text"
        />
      </div>
      <div className="input">
        <label htmlFor="">quantidade de ml por un</label>

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

      <h2>{!!result.priceTotal ? `${result.priceTotal} ML` : "..."}</h2>
      <button
        disabled={!(!!price && !!value && !!volume && !!title)}
        onClick={handleClick}
      >
        add
      </button>
    </div>
  );
}
