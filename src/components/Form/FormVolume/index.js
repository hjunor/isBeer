import { arrayBeer } from "../../../utils/isBeer";
import { useContext } from "react";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.scss";
import { formatAmount } from "../../../utils/formatAmount";
import { StoreContext } from "../../../context/storeContext";

//FIXME: validação de formulários
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormBeerVolume = yup.object().shape({
  price: yup
    .number()
    .typeError("O campo deve receber um número.")
    .positive("O numero deve ser maior que 0.")
    .min(0, "O numero deve ser maior que 0.")
    .required("Preço Obrigatório"),
  value: yup
    .number()
    .typeError("O campo deve receber um número.")
    .positive("O numero deve ser maior que 0.")
    .min(0, "O numero deve ser maior que 0.")
    .max(yup.ref("price"), "O Preço deve ser menor que a grana que você tem.")
    .required("Value é obrigatório"),

  volume: yup
    .number()
    .typeError("O campo deve receber um número.")
    .positive("O numero deve ser maior que 0.")
    .min(0, "O numero deve ser maior que 0.")
    .required("Categoria é obrigatório")
    .required("Volume é obrigatório"),
  title: yup.string().required("Titulo é obrigatório"),
});

function FormVolume() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormBeerVolume) });

  const { setBeers, beers } = useContext(StoreContext);

  const handleAddItem = async (values) => {
    if (Object.keys(errors).length === 0) {
      const result = arrayBeer(values.price, values.value, values.volume);
      setBeers([
        ...beers,
        {
          id: uuid(),
          totalVolume: result.volume,
          qtd: result.qtd,
          volume: values.volume,
          price: formatAmount(values.price),
          value: formatAmount(values.value),
          title: values.title,
        },
      ]);

      reset();
    }
  };

  const validate =
    !!errors["price"] ||
    !!errors["value"] ||
    !!errors["volume"] ||
    !!errors["title"] ||
    !(Object.keys(errors).length === 0)
      ? true
      : false;

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleAddItem)}>
      <div className={styles.wrapper__input}>
        <div className={errors?.price ? styles.wrapper__error : styles.wrapper}>
          <input type="text" {...register("price")} />
          <div className={register ? styles.isValue : styles.label}>
            Grana que eu tenho
          </div>
        </div>
        {errors?.price && (
          <span className={styles.error__input}>{errors.price.message}</span>
        )}
      </div>
      <div className={styles.wrapper__input}>
        <div className={errors?.value ? styles.wrapper__error : styles.wrapper}>
          <input type="text" {...register("value")} />
          <div className={register ? styles.isValue : styles.label}>Preço</div>
        </div>
        {errors?.value && (
          <span className={styles.error__input}>{errors.value.message}</span>
        )}
      </div>
      <div className={styles.wrapper__input}>
        <div
          className={errors?.volume ? styles.wrapper__error : styles.wrapper}
        >
          <input type="text" {...register("volume")} />
          <div className={register ? styles.isValue : styles.label}>
            Volume (ML)
          </div>
        </div>
        {errors?.volume && (
          <span className={styles.error__input}>{errors.volume.message}</span>
        )}
      </div>
      <div className={styles.wrapper__input}>
        <div className={errors?.title ? styles.wrapper__error : styles.wrapper}>
          <input type="text" {...register("title")} />
          <div className={register ? styles.isValue : styles.label}>
            Cerveja
          </div>
        </div>
        {errors?.title && (
          <span className={styles.error__input}>{errors.title.message}</span>
        )}
      </div>
      <button
        className={styles.wrapper__button}
        disabled={validate}
        type="submit"
      >
        + Comparar
      </button>
    </form>
  );
}

export default FormVolume;
