//1º Selecionar a tag que você quer manipular tal evento com o querySelector:
//Sintaxe do querySelector --> var test = document.querySelector('#DivOUClasseDesejada TagOUElementoDesejado')
var button = document.querySelector('#app button');
var input = document.querySelector('#app input#idade'); // --> Esse armazena o valor digitado no input "idade"

//2º Selecione o evento desejado e o que executar com o addEventListener:
/*
//Sintaxe do addEventListener:
    NomeVarEventListener.addEventListener("EventoDesejado", function () {
    Código da função
    }); 

//OU, se a função for muito grande, crie a função:

    function NomeTal(event) {
    event.preventDefault() // Não permite a página recarregar quando envia-se as informações se não há o 'action' na div 'form'
    alert('Sua idade é: ' + NomeVarQuerySelector.value)
    }

//E coloque o nome da função como segundo argumento no addEventListener:
    NomeVarQuerySelector.addEventListener("click", NomeTal)
*/

button.addEventListener('click', function (event) {
  event.preventDefault(); // Não permite a página recarregar quando envia-se as informações se não há o 'action' na div 'form'
  alert('Sua idade é: ' + input.value);
});
