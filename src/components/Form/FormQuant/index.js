import { useEffect, useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.scss";

import { arrayQuant } from "../../../utils/isQuant";
import { StoreContext } from "../../../context/storeContext";
import { Input } from "../../UI/Input";
import { formatAmount } from "../../../utils/formatAmount";
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
        priceTotal: formatAmount(result.priceTotal),
        qtd: result.qtd,
        volume,
        price,
        value,
        title,
      },
    ]);
  }
  return (
    <div className={styles.form}>
      <div className={styles.input}>
        <Input
          label="Quantidade (Unidade)"
          type="text"
          value={value}
          setValue={setValue}
        />
      </div>
      <div className={styles.input}>
        <Input label="Preço" type="text" value={price} setValue={setPrice} />
      </div>
      <div className={styles.input}>
        <Input
          label="Quantidade (ML)"
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
    </div>
  );
}

export default FormQuant;
