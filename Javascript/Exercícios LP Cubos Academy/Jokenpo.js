let joão = "";
let andre = "";

if (joao == andre) {
  console.log("EMPATE");
  //PEDRA E TESOURA
} else if (joao == "PEDRA" && andre == "TESOURA") {
  console.log("JOAO");
} else if (joao == "TESOURA" && andre == "PEDRA") {
  console.log("ANDRE");
  //PAPEL E TESOURA
} else if (joao == "PAPEL" && andre == "TESOURA") {
  console.log("ANDRE");
} else if (joao == "TESOURA" && andre == "PAPEL") {
  console.log("JOAO");
  //PAPEL E PEDRA
} else if (joao == "PAPEL" && andre == "PEDRA") {
  console.log("JOAO");
} else if (joao == "PEDRA" && andre == "PAPEL") {
  console.log("ANDRE");
}
