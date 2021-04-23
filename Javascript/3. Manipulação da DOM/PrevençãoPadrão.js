//COMO NÃO ADICIONAR UM LINK NA URL DE UMA PÁGINA HTML (com o Js)

//1º Selecionar a tag que você quer manipular tal evento com o querySelector:
var link = document.querySelector("a");

//2º Selecione o evento desejado e o que executar com o addEventListener:
link.addEventListener("click", function (event) {
  event.preventDefault(); // Não permite a página recarregar quando envia-se as informações se não há o 'action' na div 'form'
  console.log("Foi clicado");
});
