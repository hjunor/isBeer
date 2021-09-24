export function arrayLiters(price, value, volume) {
  const amount = Math.floor(volume / value);
  return { priceTotal: amount * price, qtd: amount };
}
