/*
Para interromper os comandos de um "for" ou "while", usamos o comando "break",
como no exemplo:
*/
const listaCompras = ['Arroz', 'Feijão', 'Banana', 'Farinha'];

for (let item of listaCompras) {
  console.log('Verificando item:' + item);
  if (item == 'Banana') {
    console.log('Banana existe na array lista :)');
    break;
    /*
    Com o comando break, nosso "if" verifica até encontrar
    o item desejado, e aí para de executar. Não exibindo então, 
    o último item da array "listaCompras" = "Farinha".
    */
  }
}

/*
Estrutura do FOR = quando souber quando o loop termina
for (apartirdovalor; condição; incremento/decremento){
  //Código aqui
}
*/
console.log("Contando de 0 - 10 com 'for':");
for (i = 0; i <= 10; i++) {
  console.log(i);
}

/*
Estrutura do WHILE = quando é algo muito extenso, e não sabe quando termina
while (x >= 2){
  console.log(i);
  i++;
}
*/
var i = 0;
console.log("Contando de 0 - 2 com 'while':");
while (i <= 2) {
  console.log(i);
  i++;
}
