import { arrayBeer } from "../../utils/isBeer";
import { useEffect, useState, useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import { v4 as uuid } from "uuid";
import "./styles.css";
import { formatAmount } from "../../utils/formatAmount";
function FormVolume() {
  const [title, setTitle] = useState("");
  const [volume, setVolume] = useState(0);
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState(0);
  const [result, setResult] = useState([]);
  const { setBeers, beers } = useContext(StoreContext);
  useEffect(() => {
    const result = arrayBeer(price, value, volume);
    setResult(result);
  }, [volume, price, value]);
  function handleClick() {
    setBeers([
      ...beers,
      {
        id: uuid(),
        totalVolume: result.volume,
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
        <label htmlFor="">grana que eu tenho</label>
        <input
          placeholder=" "
          onChange={({ target }) => setPrice(target.value)}
          type="text"
        />
      </div>
      <div className="input">
        <label htmlFor="">preço</label>

        <input
          placeholder=""
          onChange={({ target }) => setValue(target.value)}
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

      <h2>{!!result.volume ? `${result.volume} ML` : "..."}</h2>
      <button
        disabled={!(!!price && !!value && !!volume && !!title)}
        onClick={handleClick}
      >
        add
      </button>
    </div>
  );
}

export default FormVolume;
