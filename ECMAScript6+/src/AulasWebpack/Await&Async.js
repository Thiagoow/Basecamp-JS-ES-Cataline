//A partir do ES8(ES2017)

//Função de promessa, que executa uma promessa a cada 1seg:
const myPromise = () =>
  new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("Promessa realizada! 😁😎");
    }, 1000);
  });

//Agora se quisermos fazer mais de 1 promessa:
//Jeito CERTO (usando async):
const exec = async () => {
  await myPromise();
  console.log("Primeira promessa executada");

  await myPromise();
  console.log("Segunda promessa executada");

  await myPromise();
  console.log("Terceira promessa executada");
};
/*
Se esse função não fosse uma arrow function:

async function exec() {
  await myPromise();
  const response = await myPromise();
  console.log(response);
  console.log("Ok");
};
*/

//Executa a função para criar mais de uma promessa:
exec();

/*
Jeito ERRADO:

myPromise().then((response) => {
  console.log("Primeira promessa executada");
  myPromise().then((response) => {
    console.log("Segunda promessa executada");
    myPromise().then((response) => {
      console.log("Terceira promessa executada");
    });
  });
});
*/
