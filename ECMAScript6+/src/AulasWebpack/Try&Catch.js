/*
"try" --> Se a promessa for aceita(resolve) ele tenta executar 
o código, se consegue faz o que tá dentro das chaves;

"Catch" --> Se a promessa for rejeitada, ou se 
der erro no try, faz oq tá entre as chaves.
*/

//Função de promessa, que executa uma promessa a cada 1seg:
const myPromise = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      //TODO: Colocar tipo um if de resolve e reject
      reject("Promessa REJEITADA! (reject) 🥺😕");
    }, 1000);
  });

//-------------------Como fazer Try e Catch numa promessa com Async e Await:
const exec = async () => {
  try {
    await myPromise();
    console.log("Promessa REALIZADA! (resolve) 🤩😎");
  } catch (error) {
    console.warn(error);
  }
};

//Executa a função para criar uma promessa:
exec();

/*
---------------------Try e Catch numa promessa sem Async/Await:

myPromise()
  .then(() => {
    console.log("Primeira promessa executada");
  })
  .catch((error) => {
    console.warn(error);
  });

  //Executa a função para criar uma promessa:
myPromise();
*/
