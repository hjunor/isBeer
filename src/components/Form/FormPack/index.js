import { useEffect, useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.scss";

import { StoreContext } from "../../../context/storeContext";
import { formatAmount } from "../../../utils/formatAmount";
import { arrayPacks } from "../../../utils/isPacks";
import { Input } from "../../UI/Input";
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
    <div className={styles.form}>
      <div className={styles.input}>
        <Input
          label="Valor do Pack"
          type="text"
          value={price}
          setValue={setPrice}
        />
      </div>
      <div className={styles.input}>
        <Input
          label="Quantidade Pack"
          type="text"
          value={value}
          setValue={setValue}
        />
      </div>
      <div className={styles.input}>
        <Input
          label="ML por Unidade"
          type="text"
          setValue={setVolume}
          value={volume}
        />
      </div>
      <div className={styles.input}>
        <Input label="Cerveja" type="text" setValue={setTitle} value={title} />
      </div>
      <button
        className={styles.wrapper__button}
        disabled={!(!!price && !!value && !!volume && !!title)}
        onClick={handleClick}
      >
        + Comparar
      </button>
    </div>
  );
}
