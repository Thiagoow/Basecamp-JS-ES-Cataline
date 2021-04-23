//Quando você realiza um ação na página, ela carrega algum dado, SEM a necessidade de recarregar a página
//Tal requisição AJAX, se dá gerando um arquivo .json

/*
Tipos de requisições AJAX xhr:
GET = Carrega informações X do server pro website;
POST = Enviar/criar informações no server;
PUT = Atualizar informações no server;
DELETE = Deletar informações no server;
*/

//1º Selecionamos o elemento no HTML que chamará a requisição AJAX:
var button2 = document.querySelector("button");

//2º Criamos a função AJAX com o método desejado:
button2.addEventListener("click", function () {
  var xhr = new XMLHttpRequest(); //Cria o request do arquivo
  xhr.open("GET", "https://api.github.com/users"); //Usa o GET pra pegar a informação do link tal
  xhr.send(); //Colocamos dentro dos () se a requisição for do tipo PUT ou POST, os dados que queremos enviar pro server

  //3º Vemos se a requisição XHR deu certo, e exibimos no console.log:
  xhr.onreadystatechange = function () {
    //Requisição de valor 4 = Requisição finalizada
    if (xhr.readyState === 4) {
      // Armazena a reposta da requisição
      var data = JSON.parse(xhr.responseText);
      // Requisição de valor 200 = Requisição finalizada e bem sucedida
      //Mostra a resposta da requisição:
      if (xhr.status === 200) console.log(data);
      //Filtra a resposta da requisição em arquivo JSON com array:
      if (xhr.status === 200) console.log(data[0].login); //Sintaxe --> data[PosiçãoXdaResposta].atributoYdaResposta
    }
  };
});

/*
O comando :
    if ((xhr.status = 200)) console.log(xhr.responseText);

Retorna a resposta, mas apenas como texto, não sendo muito navegável, 
sendo assim, devemos transformar a resposta de texto para um arquivo .json
adicionando antes do (xhr.responseText), o comando "JSON.parse", ficando assim:
    (JSON.parse(xhr.responseText))
*/
