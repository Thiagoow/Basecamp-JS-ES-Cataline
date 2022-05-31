/*
A AXIOS é uma biblioteca online pra praticar requisições AJAX, acesse em:
https://www.npmjs.com/package/axios
OU
https://github.com/axios/axios
*/

//1º Insira a tag de importação "UNPKG CDN" no seu arquivo HTML.
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

//2º Instale a extensão JSON viewer no seu navegador, recomendamos:
// https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=pt-BR

/*
3º Utilize os conceitos aprendidos no RequisiçõesAJAX.js mas ao invés de
usar a variável "xhr", use os comandos da biblioteca axios :)
*/

var button = document.querySelector('button');

button.addEventListener('click', function () {
  axios
    .get('https://api.github.com/users')
    .then(function (response) {
      //Mostra a resposta do get Axios
      console.log(response);
      //Filtrando a resposta
      console.log(response.data[0].login);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      console.log('Requisição AJAX Finalizada :)');
    });
});
