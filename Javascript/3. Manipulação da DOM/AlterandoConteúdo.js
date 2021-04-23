var app = document.querySelector("div#app");

/*
Formas de retorno (console.log) e troca ( = X) do elemento:
    NomeElemento - retorna o próprio elemento e suas propriedades
    NomeElemento.outerHTML - todo o conteúdo HTML do elemento
    NomeElemento.innerHTML - conteúdo HTML interno com tags
    NomeElemento.innerText - todo o texto, mas sem tags (string)
*/

//Exemplo de troca de outerHTML(todo o conteúdo) da div app pelo texto "Olá":

console.log(app.outerHTML);
app.outerHTML = "Olá";
