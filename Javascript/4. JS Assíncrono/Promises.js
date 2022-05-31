/*
As promessas servem para substituir o If,Else, e While, 
em situações que não sabemos quando o código deverá ser ativado,
como: a compra de produtos digitais por exemplo.

SENDO ASSIM, as promessas servem para agilizar o loading dos outros códigos da página,
já que não sabemos quando será executada a operação de promessa.
*/

var DoYouBuyTheProducts = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var products = ['Camisa', 'Sapato', 'Calça']; //Variável da promessa
    resolve(products); //Aprova a promessa, para não aprovar: reject();
  }, 1000);
});
/*
Se a promessa for aprovada, ou seja: resolve(),
o JS insere o comando ".then" após o nome da variável da promessa
*/
DoYouBuyTheProducts.then(function (products) {
  console.log('Os produtos que você comprou foram: ');
  console.log(products);
  //Caso a promessa seja rejeitada, é acionado o catch como tratamento de erro:
}).catch(function (error) {
  console.log('A compra dos produtos falhou :c');
});
