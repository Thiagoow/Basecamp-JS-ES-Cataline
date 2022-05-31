var person = {
  name: 'Thiago Lopes',
  weight: 70.5
};

var any = {
  sex: 'M'
};

//Adicionando atributos no objeto pessoa
person.age = 18;

//Freezando um objeto pra não permitir alterações em escopo global
//Object.freeze(person);

//Tentando mudar o nome do objeto pra ver se testou
person.name = 'Hacked';
console.log(person);
//Não funciona enquanto o freeze estiver funcionando

//Mesclando 2 arrays (NÃO FUNCIONA SE O FREEZE ESTIVER ATIVO, e não existe comando pra "desfreezar" um array)
person = Object.assign(person, any);
console.log(person);
console.log(any);
