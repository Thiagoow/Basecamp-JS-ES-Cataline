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

//Muda as palavras desejadas na frase, pra o que você quiser 😎:
//Lembre-se que o vetor inicia SEMPRE sua posição em 0!!!
fraseModded[1] = "NÃO gosto 😭";
fraseModded[4] = "😠😡🤬";

//Exibe a frase nova/modificada, com as palavras desejadas 😊:
console.log(fraseModded);
/*
Exibe a modificada/nova frase(com o console.log(), e transforma 
a frase antes em vetor pra string, com o comando "join" ,
concatenando-a com o separador " "(espaço):
*/
console.log(fraseModded.join([(separador = " ")]));

/*
Se quiséssemos que a fraseModded virasse string permanentemente,
basta colocar o comando ".join" FORA DO "console.log" à fraseModded, 
e atribuindo ela a uma nova variável, observe:

    fraseModdedString = fraseModded.join([(separador = " ")]);

Exibindo ela depois, no console.log, apenas como a nova variável,
que recebeu a fraseModded como uma string:

    console.log(fraseModdedString);

Dessa forma, continuará existindo o array da fraseModded,
se você quiser fazer outras modificações, E a fraseModdedString.
*/
