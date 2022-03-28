const prices = [100, 100, 100, 50];

if (prices.length >= 5) {
  let maisBarato = Math.min(...prices);
  console.log(prices.reduce((a, b) => a + b, 0) - maisBarato);
} else {
  console.log(prices.reduce((a, b) => a + b, 0));
}
