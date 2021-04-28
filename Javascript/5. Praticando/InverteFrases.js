const frase = "Eu gosto de programação! 😁";
console.log(frase);

let palavra = "";
const fraseModded = [];
for (let i = 0; i < frase.length; i++) {
  //Verifica os espaços na frase:
  if (frase[i] === " ") {
    //Guarda todas as letras antes do espaço:
    fraseModded.push(palavra);
    /*
    Redefine as letras pra "", 
    depois que guardou toda a palavra, antes do espaço:
    */
    palavra = "";
    /*
    Continua a operação de guardar todas as letras 
    antes do espaço, em um array, sendo cada posição do array uma palavra:
    */
    continue;
    //Pra ver ele guardando em um array cada palavra, insira o comando:
    //console.log("palavra");
  }
  //Concatena cada uma das letras antes do parágrafo, até formar todas as palavras:
  palavra += frase[i];
  /*
    Pra ver a concatenação sendo feita, com um efeito 
    legal de cascata, insira o comando:
    */
  //console.log("palavra");
}
//Adiciona até as últimas palavras da frase, mesmo que não tenham espaço depois delas:
fraseModded.push(palavra);

//Define a frase que será invertida:
const fraseInvertida = [];
/*
Inverte a fraseModded(modificada/nova),
colocando em cada um dos vetores da fraseInvertida,
os últimos vetores da fraseModded (em ordem decrescente):
*/
for (let i = fraseModded.length - 1; i >= 0; i--) {
  fraseInvertida.push(fraseModded[i]);
}

//Exibe a frase nova/modificada, com posição de vetor invertidas 😊:
console.log(fraseInvertida);
//Exibe a frase invertida, transformando-a em string, com o comando "join", e com o separador " "(espaço):
console.log(fraseInvertida.join([(separador = " ")]));

/*
Se quiséssemos que a fraseInvertida virasse string permanentemente,
basta colocar o comando ".join" FORA DO "console.log" à fraseInvertida, 
e atribuindo ela a uma nova variável, observe:

    fraseInvertidaString = fraseInvertida.join([(separador = " ")]);

Exibindo ela depois, no console.log, apenas como a nova variável,
que recebeu a fraseInvertida como uma string:

    console.log(fraseInvertidaString);

Dessa forma, continuará existindo o array da fraseInvertida,
se você quiser fazer outras modificações, E a fraseInvertidaString.
*/
