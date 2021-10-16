import { useContext } from "react";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.scss";

import { StoreContext } from "../../../context/storeContext";
import { formatAmount } from "../../../utils/formatAmount";
import { arrayPacks } from "../../../utils/isPacks";

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
    .max(
      yup.ref("volume"),
      "O Quantidade por garrafa deve ser menor que os Litros que você precisa."
    )
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

export function FormPacks() {
  const { setPacks, packs } = useContext(StoreContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormBeerVolume) });

  const handleAddItem = async (values) => {
    if (Object.keys(errors).length === 0) {
      const result = arrayPacks(values.price, values.value, values.volume);

      setPacks([
        ...packs,
        {
          id: uuid(),
          totalVolume: result.priceTotal,
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
            {" "}
            Valor do Pack
          </div>
        </div>
        {errors?.price && (
          <span className={styles.error__input}>{errors.price.message}</span>
        )}
      </div>
      <div className={styles.wrapper__input}>
        <div className={errors?.value ? styles.wrapper__error : styles.wrapper}>
          <input type="text" {...register("value")} />
          <div className={register ? styles.isValue : styles.label}>
            Quantidade de Unidades
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
            ML por Unidade
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
