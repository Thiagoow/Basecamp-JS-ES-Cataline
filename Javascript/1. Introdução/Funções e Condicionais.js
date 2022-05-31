/*Função serve para executar uma ação, 
quando você quiser, usando apenas o comando de chamar a função 
*/

//Define os parâmetros da função
function sum(n1, n2) {
  var result = n1 + n2;
  return result;
}
//Chama a função utilizando os argumentos
console.log(
  "A soma de 3+3 usando a função 'sum' criada para soma é: " + sum(3, 3)
);

var trafficLight = 'verde';
var message = '';

//Uso de condicionais IF
if (trafficLight == 'verde') {
  message = 'Pode passar ^^';
} else if (trafficLight == 'amarelo') {
  message = 'Atenção O_O';
} else if (trafficLight == 'vermelho') {
  message = 'PARAAAAA! XoX';
} else {
  message = 'Valor inválido >:c';
}

//Uso de condicionais CASE
switch (trafficLight) {
  case 'verde':
    message += ' Pode passar';
    break;
  case 'amarelo':
    message += ' Atenção O_O';
    break;
  case 'vermelho':
    message += ' PARAAAAA! XoX';
    break;
  default:
    message += ' Valor inválido >:c';
}

//Mostra a mensagem de acordo com a condição
console.log(message);
