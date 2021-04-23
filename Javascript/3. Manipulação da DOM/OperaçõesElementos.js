var app = document.querySelector("div#app");

//Excluíndo elementos do HTML no JS com o querySelector:
//1º selecione o elemento:
var text = document.querySelector("div#app h1"); //No caso eu selecionei o título da div "app": "Cadastro"
//2º Removendo:
app.removeChild(text);
//Inserindo novamente:
app.appendChild(text);
//Ele será inserido, mas embaixo de tudo que já existe na div "app", pois td aquilo veio 1º

/*
Criando um link como no HTML, no JS:

    <a href="https://google.com">Visitar o Google</a>
*/
//JEITO MAIS DIFÍCIL DE TODOS (NÃO FAÇA ASSIM, POR FAVOR :v):
//Cria (e fecha tbm) a tag "a"
var link = document.createElement("a");
//Cria o atributo de (nomeX, AtributoRecebido) pra tag "a"
link.setAttribute("href", "https://google.com");
//Cria a anotação depois do atributo de URL
var textLink = document.createTextNode("Visitar Google");
//Aplica a anotação depois do atributo de URL na tag "a"
link.appendChild(textLink);
//Faz o link aparecer na div "app" do HTML"
app.appendChild(link);

/*
JEITO MAIS FÁCIL (USA ESSE JEITO PELO AMOR DE DEUS):
    Cria pelo HTML :)
*/
