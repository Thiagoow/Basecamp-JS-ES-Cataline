//Entry values of the variables:
const letter1 = prompt("Digite uma letra");
const letter2 = prompt("Digite outra letra");

//Arrays do alfabeto:
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const alphabetUp = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
console.log(alphabetUp);

function distanceBetweenTwoLetters() {
  const isValid1 = alphabet.includes(letter1);
  const isValid2 = alphabet.includes(letter2);

  let valid = false;
  if (isValid1 && isValid2) {
    valid = true;
  }

  if (valid) {
    //+1 pq array começa em 0:
    const indexOfFirst = alphabet.indexOf(letter1) + 1;
    const indexOfLast = alphabet.indexOf(letter2) + 1;

    //-1 pq é quantas letras existem entre essas letras:
    const res = indexOfLast - indexOfFirst - 1;

    console.log(
      `A distância entre "${letter1.toUpperCase()}" e "${letter2.toUpperCase()}" é de ${res} letras`
    );
  } else {
    console.log("Ambos ou 1 dos valores recebidos não era uma letra válida❗");
  }
}
distanceBetweenTwoLetters();

function distanceToLastLetter(letra1) {
  const isString = alphabet.includes(letra1);

  const typeOfVar = typeof letra1;
  /* Verifying with objet constructor:
  Object.prototype.toString.call(letra1) === "[object Number]"; 
  */

  if (isString) {
    let exists = alphabet.indexOf(letra1);
    //+1 pq array começa em 0:
    const res = alphabet.length - (exists + 1);

    console.log(
      `A distância de "${letra1.toUpperCase()}" até 
    "${alphabet.slice(-1)[0].toUpperCase()}" é de ${res}`
    );
  } else if (typeOfVar === "number") {
    console.log("Digite uma letra, não um número❗");
  } else if (!isString) {
    console.log("Digite uma letra, não outra coisa 🤨");
  } else if (letra1 === "" || " ") {
    console.log("Digite uma letra do alfabeto");
  } else {
    console.log("Q? 🤔");
  }
}
distanceToLastLetter("a");
