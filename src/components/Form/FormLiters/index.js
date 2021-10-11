import { useEffect, useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.scss";

import { arrayLiters } from "../../../utils/isLiters";
import { formatAmount } from "../../../utils/formatAmount";
import { StoreContext } from "../../../context/storeContext";
import { Input } from "../../UI/Input";
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
        priceTotal: formatAmount(result.priceTotal),
        qtd: result.qtd,
        volume,
        price: formatAmount(price),
        value: value,
        title,
      },
    ]);
  }
  console.log(result, "color: red");
  return (
    <div className={styles.form}>
      <div className={styles.input}>
        <Input label="Preço" type="text" value={price} setValue={setPrice} />
      </div>
      <div className={styles.input}>
        <Input
          label="Quantidade (ML)"
          type="text"
          value={value}
          setValue={setValue}
        />
      </div>
      <div className={styles.input}>
        <Input
          label="Total de litros(ML)"
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
        s
        disabled={!(!!price && !!value && !!volume && !!title)}
        onClick={handleClick}
      >
        + Comparar
      </button>
    </div>
  );
}

export default FormLiters;
