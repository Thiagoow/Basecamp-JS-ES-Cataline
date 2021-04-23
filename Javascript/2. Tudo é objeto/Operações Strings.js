var text = "Hello World!";
console.log(text);

var text2 = "https://cataline.io/";
console.log(text2);

//Mostra no console o comprimento da variável
var v = text.length;
console.log(v);

//Substitúi palavras ou letra numa variável
v1 = text.replace("World", "Cataline");
console.log(v1);

//Deixa todos os caracteres de uma variável em letra maiúscula
//Para deixar todos em minúscula, basta trocar o comando para toLowerCase
v2 = text.toUpperCase();
console.log(v2);

//Divide o texto de uma string para um vetor, a partir do argumento informado no ()
var v3 = text.split(" "); // O argumento é o caractere de espaço ( )
console.log(v3);
var v4 = text2.split("//"); // O argumento são as duas barras (//)
console.log(v4);
