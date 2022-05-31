if (true) {
  var car = 'BMW';
}
console.log(car);

/*
Em cima, usamos o exemplo do uso de uma variável 
criada e definida num escopo local
*/

var bike = '';
if (true) {
  bike = 'HarleyDavidson';
}
console.log(bike);
/*
Agora nesse exemplo, criamos uma variável globalmente
e defini-la num escopo local
*/
if (true) {
  let boat = 'Caravela';
}
console.log(boat);
/*
No ECMAScript 6+ (extensão do JS), 
esse comando "let" foi adicionado para permitir
que uma variável criada e definida num escopo local
NÃO possa ser exibida no escopo global 
(mostrando no console, que a variável não está definida (no escopo global))

PORÉM, como o ECMAScript 6+ se trata de uma extensão do JS,
navegadores ou editores de código sem essa extensão do JS,
NÃO são capazes de ler esse comando.
*/
