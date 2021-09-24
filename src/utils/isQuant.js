export function arrayQuant(price, value, volume) {
  const amount = volume * value;

  return { priceTotal: value * price, qtd: amount };
}
