import { useContext } from "react";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.scss";

import { arrayLiters } from "../../../utils/isLiters";
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
    .min(1, "O numero deve ser maior que 0.")

    .required("Preço Obrigatório"),
  value: yup
    .number()
    .typeError("O campo deve receber um número.")
    .positive("O numero deve ser maior que 0.")
    .min(1, "O numero deve ser maior que 0.")
    .required("Preço é obrigatório"),
  volume: yup
    .number()
    .typeError("O campo deve receber um número.")
    .positive("O numero deve ser maior que 0.")
    .min(1, "O numero deve ser maior que 0.")
    .required("Total de litros é obrigatório")
    .required("Total de litros é obrigatório"),
  title: yup.string().required("Cerveja é obrigatório"),
});

function FormLiters() {
  const { liters, setLiters } = useContext(StoreContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormBeerVolume) });

  const handleAddItem = async (values) => {
    if (Object.keys(errors).length === 0) {
      const result = arrayLiters(values.price, values.value, values.volume);

      setLiters([
        ...liters,
        {
          id: uuid(),
          priceTotal: formatAmount(result.priceTotal),
          qtd: result.qtd,
          volume: values.value,
          price: formatAmount(values.price),
          value: values.value,
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
          <div className={register ? styles.isValue : styles.label}>Preço</div>
        </div>
        {errors?.price && (
          <span className={styles.error__input}>{errors.price.message}</span>
        )}
      </div>
      <div className={styles.wrapper__input}>
        <div className={errors?.value ? styles.wrapper__error : styles.wrapper}>
          <input type="text" {...register("value")} />
          <div className={register ? styles.isValue : styles.label}>
            Quantidade (ML)
          </div>
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
            Total de Litros(ML)
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

export default FormLiters;
