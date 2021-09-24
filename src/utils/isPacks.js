export function arrayPacks(price, value, volume) {
  const qtd = volume * value;
  const amount = (price * 1000) / qtd;
  return { priceTotal: amount, qtd };
}
