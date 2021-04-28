//Hoje é domingo (dia 1), que dia da semana será daqui a X dias?
let dias = 2;
const resto = dias / 7;
console.log("Hoje é domingo, quantos  dias vão ser daqui a " + dias + " dias?");

switch (resto) {
  //Depois de uma semana, o mesmo dia repete, ou seja:
  case 0 : 
    console.log("Hoje é domingo");
    break;
    
    case 1:
    //Sempre 1 dia demais do domingo
    console.log("Hoje é segunda");
    break;
  } else if (resto === 2) {
    console.log("Hoje é terça");
  } else if (resto === 3) {
    console.log("Hoje é quarta");
  } else if (resto === 4) {
    console.log("Hoje é quinta");
  } else if (resto === 6) {
    console.log("Hoje é sexta");
  } else if (resto === 7) {
    console.log("Hoje é sábado");
  }
}

//Uso de condicionais CASE
switch (trafficLight) {
    case "verde":
      message += " Pode passar";
      break;
    case "amarelo":
      message += " Atenção O_O";
      break;
    case "vermelho":
      message += " PARAAAAA! XoX";
      break;
    default:
      message += " Valor inválido >:c";
  }

console.log(diaDaSemana());
