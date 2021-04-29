//Hoje é domingo (dia 1), que dia da semana será daqui a X dias?
let dias = 1;

console.log("Hoje é domingo, que  dia vai ser daqui a " + dias + " dia(s)?");

const resto = dias % 7;
var message = "";

//Depois de uma semana, o mesmo dia repete, ou seja:
switch (resto) {
  case 0:
    //Sempre 7 dias depois do domingo
    console.log("Domingo");
    break;
  case 1:
    //Sempre 1 dia depois do domingo
    console.log("Segunda");
    break;
  case 2:
    //Sempre 2 dias depois do domingo
    console.log("Terça");
    break;
  case 3:
    //Sempre 3 dias depois do domingo
    console.log("Quarta");
    break;
  case 4:
    //Sempre 4 dias depois do domingo
    console.log("Quinta");
    break;
  case 5:
    //Sempre 5 dias depois do domingo
    console.log("Sexta");
    break;
  case 6:
    //Sempre 6 dias depois do domingo
    console.log("Sábado");
    break;
}
