/*
Operador ternário
? --> Realiza um If e Else numa só linha
*/
var age = 15;
var result2 = age >= 18 ? "Ok" : "Não ta ok >:c";
console.log(result2);
/*Mesma coisa que:
If age >= 18 {
    result = "Ok"
} else {
    result = "Não ta ok >:c"
}
*/

/*
Operadores lógicos
&& --> "e"
|| --> "Ou"
! --> "Not" --> Inverte o valor boolean da variável
*/
var isActive = true;
isActive = !isActive;
if (isActive == false) {
  console.log("A variável não está ativa! ^^");
}

/*
Operadores de comparação
> --> Maior que (x)
< --> Menor que (x)
== (2*=) --> Tem valor igual a (x) 
!= (!+=) -->  É diferente de (x)
=== (3*=)--> Tem valor e tipo igual a (x) 
>= (2*>) --> Maior ou igual a (x)
<= (2*<) --> Menor ou igual a (x)
*/
var sex = "M";
if (age >= 18 || sex == "M") {
  console.log("Entrada liberada");
} else {
  console.log("Entrada barrada!");
}

/* 
Operadores de atribuição
Exemplo: "x = x * y"
Operador *= -> x *= y

Exemplo: "x = x / y"
Operador /= -> x /= y

Exemplo: "x = x % y"
Operador /= -> x %= y
*/
var product = ["camisa", "calça", "blusa"];
var text = "Temos no estoque: ";
text += product;
console.log(text);

/* 
Operadores aritméticos
'+' 
'-' 
'*' 
'/' 
'%'->(mod = resto da operação) 
'++'->(incrementar +1) 
'--'->(decrementar)
*/
var x = 10;
var y = 2;
console.log(y++); //o ++ somou +1, y era 2 e virou 3
var result = x * y + y;
console.log("O resultado da operação é: " + result);
