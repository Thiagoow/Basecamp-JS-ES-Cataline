/*
Criando uma mini aplicação de consulta de CEPs a partir do webservice:
https://viacep.com.br/
*/

//1º selecionamos o elemento da DOM com o querySelector:
var submitButton = document.querySelector('#app form button');
var zipCodeField = document.querySelector('#app form input');
var content = document.querySelector('#app main');

//2º Criando a função para quando clicarmos no botão de consulta:
function run(event) {
  //Não deixa a página atualizar quando clicamos no botão consulta
  event.preventDefault();
  //Dá o valor para a variável zipCode, o que o usuário digitou no zipCodeField
  var zipCode = zipCodeField.value;
  //Remove um possível espaço entre os números
  zipCode = zipCode.replace(' ', '');
  //Remove um possível . entre os números
  zipCode = zipCode.replace('.', '');
  //Remove um possível - entre os números
  zipCode = zipCode.replace('-', '');
  //Remove um espaçamento no final ou início do número
  zipCode = zipCode.trim();
  //Mostra o CEP digitado
  console.log(zipCode);

  //Mostra os dados do CEP abaixo do botão de consulta
  function createLine(text) {
    var line = document.createElement('p');
    var text = document.createTextNode(text);

    line.appendChild(text);
    content.appendChild(line);
  }

  //Faz a consulta com o server utilizando a axios
  axios
    .get('https://viacep.com.br/ws/' + zipCode + '/json/')
    .then(function (response) {
      //Se digita um CEP inexistente
      if (response.data.erro) {
        createLine('Opa, esse CEP não existe! 😱');
      }
      //Apaga os dados da consulta anterior
      content.innerHTML = '';
      //Usa a função de criar linhas pra inserir os dados do CEP consultado
      createLine(response.data.localidade + '/' + response.data.uf);
      createLine(response.data.logradouro);
      createLine('Bairro: ' + response.data.bairro);
    })
    .catch(function (error) {
      console.log(error);
      //Apaga os dados da consulta anterior
      content.innerHTML = '';
      createLine('Ops, algo deu errado! 🥺');
    });
}

//3º Executa a função quando clicamos no botão de consulta:
submitButton.addEventListener('click', run);
