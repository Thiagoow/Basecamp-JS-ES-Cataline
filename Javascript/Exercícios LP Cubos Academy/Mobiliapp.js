const tempo = 2;
const distancia = 1;

//Colocar lá:
let preco = 0;
if (tempo < 5) {
  preco = 600;
  console.log(preco);
} else if (tempo > 5 && tempo < 60) {
  preco = 100 * tempo + 50 * distancia;
  console.log(preco);
} else if (tempo > 60) {
  if (distancia >= 100) {
    preco = 150 * distancia;
    console.log(preco);
  } else {
    preco = 200 * distancia;
    console.log(preco);
  }
}

//Se der 600 tá certp :)
