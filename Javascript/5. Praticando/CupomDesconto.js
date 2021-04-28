/*

Cupom desconto: DESCONTA30

°Desconta 30% do valor total da compra, valendo APENAS 
das 12h até as 23h59min. Se for meia noite, já não vale o cupom;

ºSE a compra for de R$100 OU mais, desconta 40%.

*/

function valorDesconto(totalCompra, hora, cupom) {
  if (cupom === "DESCONTA30") {
    if (hora >= 12 && hora < 24) {
      if (totalCompra >= 100) {
        valorDesconto = totalCompra * (40 / 100);
        console.log(
          "Parabéns, seu cupom de 40% foi APLICADO!😁 -> R$" + valorDesconto
        );
      } else {
        valorDesconto = totalCompra * (30 / 100);
        console.log(
          "Parabéns, seu cupom de 30% foi APLICADO!😁 -> R$" + valorDesconto
        );
      }
    } else {
      console.log("Desculpe, mas o horário válido da promoção acabou! 🙁");
    }
  } else {
    console.log("Cupom INVÁLIDO! 🙁");
  }
}

valorDesconto(90.0, 13, "DESCONTA30");
