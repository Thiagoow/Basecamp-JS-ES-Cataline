// Mostra uma mensagem no console
console.log("Hello World! :D");

/* Atribuição dinâmica de variáveis 
(assim elas não precisam ter seu tipo atribuído) 
*/

var name = "Thiago Silva"; //STRING
var age = 18; //INTEGER
var weight = 65.5; //FLOAT
var alive = true; //BOOLEAN
var food = null; //NULL
var time; //UNDEFINED
var fruits = ["Maça", "Pêra", "Melão"]; //ARRAY (vetor)

var person = {
  name: "Thiago Silva",
  age: 18,
  alive: true,
  weight: 65.5,
  //OBJETO
};

// Mostra uma variável no console
console.log(fruits);
// Mostra oum dado específico de um array(vetor)
console.log(fruits[3]);
// Mostra o atributo de uma variável no console
console.log(person.name);
// Mostra o tipo de uma variável no console
console.log(typeof person);

var product = ["camisa", "calça", "blusa"];
var price = [12, 20, 80];
//Concatenação
console.log("O preço da(o) " + product[0] + " é: R$" + price[0]);
