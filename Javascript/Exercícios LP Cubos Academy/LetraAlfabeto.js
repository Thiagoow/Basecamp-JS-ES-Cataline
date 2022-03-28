//Entry values of the variables:
const letter1 = prompt("Digite a letra mais próxima do A");
const letter2 = prompt("Digite a letra mais próxima do Z");

//Arrays do alfabeto:
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const alphabetUp = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
console.log(alphabet);

function distanceToLastLetter(letra1) {
  const isString = alphabet.includes(letra1);
  const typeOfLetra1 = typeof letra1;
  /* Verifying with objet constructor:
  Object.prototype.toString.call(letra1) === "[object Number]"; 
  */

  if (isString) {
    let exists = alphabet.indexOf(letra1);

    //+1 pq array começa em 0:
    const res = alphabet.length - (exists + 1);

    console.log(
      `A distância entre "${letra1}" e 
       "${alphabet.slice(-1)[0]}" é de ${res}`
    );
  } else if (typeOfLetra1 === "number") {
    console.log("Digite uma letra, não um número❗");
  } else if (!isString) {
    console.log("Digite uma letra, não outra coisa 🤨");
  } else if (letra1 === "" || " ") {
    console.log("Digite uma letra do alfabeto");
  } else {
    console.log("Q? 🤔");
  }
}
distanceToLastLetter("1");

function distanceBetweenTwoLetters() {
  const isValid1 = alphabet.includes(letter1);
  const isValid2 = alphabet.includes(letter2);

  let valid = false;
  if (isValid1 && isValid2) {
    valid = true;
  }

  if (valid) {
    console.log("Letras válidas :D");
  } else {
    console.log("Ambos ou 1 dos valores recebidos não era uma letra válida❗");
  }
}
distanceBetweenTwoLetters();
