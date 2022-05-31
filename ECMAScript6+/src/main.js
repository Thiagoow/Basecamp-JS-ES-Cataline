console.log('Hello world! ;)');

//-----------------------A PARTIR DAQUI, OS CÓDIGOS SÃO PRA EXECUTAR O "calculator.js":

/*
//Importa do calculator.js as funções "sum" e "subtraction"
    import { sum, subtraction } from "./calculator";

//Exibindo e executando a função no console, do seguinte jeito:
    console.log(sum(10, 5));
    console.log(subtraction(10, 3));
*/

//MAS, como nesse caso, eu quero usar todas as funções do calculator.js,
//a sum e subtraction, pois só tem elas lá). Eu poderia usar o "*", para importar TUDO:
import * as calculator from './calculator.js';

//Definindo então, aqui no console.log, qual a função que desejamos
//de toda a importação "calculator", do calculator.js:

console.log(calculator.subtraction(10, 3));
console.log(calculator.sum(10, 5));
/*
Porém, como o calculator é do tipo .js,
as funções tem suas vars como padrão
do tipo "any". Por causa da tipagem dinâmica.

Oq significa que, se colocarmos os números com ""
(duas strings), a função irá CONCATENÁ-LOS,
invés de realmente somar. Veja:
*/
console.log(sum('10', '5'));
/*
Para impedir isso, não tem jeito, ou declaramos as
vars no próprio arquivo Js, ou transformamos ele pra
Ts (apenas mudando sua extensão (.js pra .ts)), mas também
declarando todas as variáveis. Para evitar esses erros.
*/
