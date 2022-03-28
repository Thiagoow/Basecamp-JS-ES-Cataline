const tempo = 2;
const distancia = 1;

//Colocar lá:
let price = 0;
if (tempo < 5) {
  price = 600;
  console.log(price);
} else if (tempo > 5 && tempo < 60) {
  price = 100 * tempo + 50 * distancia;
  console.log(price);
} else if (tempo > 60) {
  if (distancia >= 100) {
    price = 150 * distancia;
    console.log(price);
  } else {
    price = 200 * distancia;
    console.log(price);
  }
}

//Se der 600 tá certp :)
