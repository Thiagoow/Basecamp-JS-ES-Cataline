/*
No JS, os intervalos são contados em milissegundos(ms), ou seja:
1000ms = 1seg 
*/

//Podemos criar uma função para o intervalo na própria sintaxe de intervalo:
setInterval(function () {
  console.log("executou");
}, 2000);

/*
Ou podemos criar uma função separadamente do intervalo e 
apenas inseri-la na sintaxe de intervalo
*/

//Criando a função:
function intervalo() {
  console.log("executouDoOutroJeito");
}
//Criando o intervalo e inserindo a função:
setInterval(intervalo, 4000);

/*
O setTimeOut também executa tarefas a partir de um tempo, mas...
Diferentemente do setInterval, ele executa uma tarefa apenas uma vez, e para.
*/
//USO DO setTimeOut:

setTimeout(function () {
  console.log("timeOutFuncionou😎");
}, 1000);
