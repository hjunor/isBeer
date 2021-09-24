export function arrayBeer(price, value, volume) {
  const amount = Math.floor(price / value);
  return { volume: amount * volume, qtd: amount };
}
