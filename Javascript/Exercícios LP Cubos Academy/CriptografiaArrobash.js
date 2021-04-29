/*
Alfabeto que contém APENAS as letras: C U B A D E M Y

Sendo cada letra codificada por: @ e #;
São cada uma delas criptografadas em:

C=  ###
U=  ##@
B=  #@#
A=  #@@
D=  @##
E=  @#@
M=  @@#
Y=  @@@

Descriptografe a mensagem a seguir 😎:
*/
const mnsg1 = "#@@####@@@##@#@@@#@@@";
const chaveCriptográfica = {
  "###": "C",
  "##@": "U",
  "#@#": "B",
  "#@@": "A",
  "@##": "D",
  "@#@": "E",
  "@@#": "M",
  "@@@": "Y",
  " ": " ",
};

//Solucionando:
let Descript = "";
//A cade 3 caractéres temos uma letra, então:
for (i = 0; i < mnsg1.length; i += 3) {
  const letra = mnsg1[i] + mnsg1[i + 1] + mnsg1[i + 2];
  Descript += chaveCriptográfica[letra];
}
console.log(Descript);

/*
Agora, criptografe a mnsg que vpcê descriptografou 
PRA VER SE TÁ CERTO 😈👹:
*/

const mnsg2 = "ACADEMY";
let Cript = "";
const criptografia = {
  C: "###",
  U: "##@",
  B: "#@#",
  A: "#@@",
  D: "@##",
  E: "@#@",
  M: "@@#",
  Y: "@@@",
  " ": " ",
};

//Criptografando:
for (i = 0; i < mnsg2.length; i += 1) {
  const letra = mnsg2[i];
  Cript += criptografia[letra];
}

//Vendo se a criptografia deu certo 😎:
if (Cript === mnsg1) {
  console.log("Você criptografou a mensagem corretamente 😱😎 PARABÉNS 🤩");
} else {
  console.log("Deu errado :/ 🥺😢");
}

console.log("Sua criptografia:");
console.log(Cript);

console.log("Criptografia original/correta:");
console.log(mnsg1);
