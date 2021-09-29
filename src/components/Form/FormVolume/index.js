import { arrayBeer } from "../../../utils/isBeer";
import { useEffect, useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.scss";
import { formatAmount } from "../../../utils/formatAmount";
import { Input } from "../../UI/Input";
import { StoreContext } from "../../../context/storeContext";

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
    <div className={styles.form}>
      <div className={styles.input}>
        <Input
          label="Grana que tenho"
          type="text"
          value={price}
          setValue={setPrice}
        />
      </div>
      <div className={styles.input}>
        <Input label="Preço" type="text" value={value} setValue={setValue} />
      </div>
      <div className={styles.input}>
        <Input
          label="Volume (ML)"
          type="text"
          value={volume}
          setValue={setVolume}
        />
      </div>
      <div className={styles.input}>
        <Input label="Cerveja" type="text" value={title} setValue={setTitle} />
      </div>

      <button
        className={styles.wrapper__button}
        disabled={!(!!price && !!value && !!volume && !!title)}
        onClick={handleClick}
      >
        + Comparar
      </button>
      <h2>{!!result.volume ? `${result.volume} ML` : "..."}</h2>
    </div>
  );
}

export default FormVolume;
