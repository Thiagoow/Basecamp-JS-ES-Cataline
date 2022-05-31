//Criando alerta na página
// alert("Oi, isso é um teste :D");

//Mostra o código da página HTML
console.log(document);

//Mostra o código de uma div da página/objeto global HTML
// console.log(document.head);

//Mostra as propriedades da página/objeto global HTML
// console.log(window);

//Mostra a localização da página/objeto HTML :)
// location.href = "http://google.com";

//Mostra as propriedades de um elemento específico no HTML
var input = document.querySelector('input#idade');
//Sintaxe do querySelector -> var x = document.querySelector('DivOUClasseDesejada#TagOUElementoDesejado')
console.log(input);

/* Outras formas de selecionar um elemento: 
//By id:
var test = document.getElementById("idade");
console.log(test);
//ByClass:
var test1 = document.getElementsByClassName("idade");
console.log(test1);
*/

//Seleção com base em outras seleções:

//Seleção anterior da selecionada pelo querySelector
console.log(input.previousElementSibling);
//Seleção seguinte da selecionada pelo querySelector
console.log(input.nextElementSibling);
