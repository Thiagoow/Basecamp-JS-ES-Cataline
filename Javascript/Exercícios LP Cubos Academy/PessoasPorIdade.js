//Relatório do array de objetos: "pessoas"

const pessoas = [
  {
    nome: "José",
    idade: 30,
  },
  {
    nome: "Maria",
    idade: 16,
  },
  {
    nome: "Pedro",
    idade: 18,
  },
  {
    nome: "André",
    idade: 15,
  },
];

//Criando uma função pra criarRelatório de qualquer vetor de objetos:
function criarRelatório(vetor) {
  let maioresIdade = 0;
  let menoresIdade = 0;

  for (let item of vetor) {
    const idade = item.idade;
    if (idade >= 18) {
      //Soma mais um nos maiores de idade:
      maioresIdade++;
    } else {
      //Soma mais um nos menores de idade:
      menoresIdade++;
    }
  }

  const relatório = {
    qtdMaioresIdade: maioresIdade,
    qtdMenoresIdade: menoresIdade,
    percentualMaiores: (maioresIdade / pessoas.length) * 100 + "%",
    percentualMenores: (menoresIdade / pessoas.length) * 100 + "%",
  };

  console.log(relatório);
}

//Cria e exibe no console um relatório do objeto pessoas:
criarRelatório(pessoas);
