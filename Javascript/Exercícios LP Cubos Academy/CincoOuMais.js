const precos = [100, 100, 100, 50];

if (precos.length >= 5) {
  let maisBarato = Math.min(...precos);
  console.log(precos.reduce((a, b) => a + b, 0) - maisBarato);
} else {
  console.log(precos.reduce((a, b) => a + b, 0));
}
