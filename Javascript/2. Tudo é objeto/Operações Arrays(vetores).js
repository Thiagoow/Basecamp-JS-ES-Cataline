var array = ["Lulee", "Thiago", "Millena"];
array1 = array;
array2 = array;
array3 = array;
array4 = array;

//Mostra o comprimento da array
console.log(array.length);

//Mostra todos os valores da Array
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}

/* Mostra a posição do argumento na array
Se o retorno for 0 = Primeira posição (PQ TD ARRAY INICIA A CONTAGEM POR 0)
Se o retorno for -1 = O argumento bão existe na array.
*/
var v = array.indexOf("Lulee");
console.log(v);

//Excluindo o último valor de uma array
array1.pop();
console.log(array1);

//Incrementando na array
array2.push("Isabelli");
console.log(array2);

//Deletar valor na posição X, Y vezes
array2.splice(0, 1); //Deletando o 1º item 1 vez apenas
console.log(array2);
/*
Deletando um valor na posição X, 2 vezes:
Você deleta também o 2º valor, pois ele passará a ser o primeiro,
depois de deletado pela primeira vez o 1º valor
*/
