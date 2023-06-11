//! Avancando em tipos
/*
! Arrays
const numbers: number[]
const names: string[]
const booleans: boolean[]

Alternativamente:
let variavel: Array<tipo>
const numbers: Array<number>
const names: Array<string>
 */
const numbers: number[] = [1, 2, 3, 4];
console.log(`LOG ~ numbers:`, numbers);

const names: Array<string> = ['Jao', 'Nosdaj', 'Pedroka'];
console.log(`LOG ~ names:`, names);

const numAndNames: (string | number)[] = [1, 2, 'Jao', 'Nosdaj', 'Pedroka'];
console.log(`LOG ~ numAndNames:`, numAndNames);
names.push('Arievilo');
console.log(`LOG ~ names:`, names);

//! Tipo Any , nao recomendado pois vai de encontro a ideia fundamental do TS
let anything: any = 'Jao';
console.log(typeof anything);

const arrAny: any[] = [1, 'Jao', true, { nome: 'Jao' }];
console.log(`LOG ~ arrAny:`, arrAny);

//! Tipo de parametro de funcoes
/*
 * myFunction(param: tipo){}
 * myFunction(name: string, age: number){}
 */
function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(1, 2));

//! Tipando o retorno da funcao
/*
 * myFunction(param: tipo): tipo{}
 */
function greeting(name: string): string {
  return `Ola ${name}`;
}
console.log(greeting('Jao'));

//! Tipando funcoes anonimas
// setTimeout(() => {
//   const salary:number = 1000
//   console.log(parseFloat(salary)); erro, o parseFloat eh metodo para string
// }, 2000);

//! Tipando objetos
/* {prop:tipo, prop2:tipo2} */
function passCoordinates(coord: { lat: number; long: number }) {
  console.log('Latitude:' + coord.lat);
  console.log('Longitude:' + coord.long);
}
const myCoordinates = { lat: 329, long: -123 };
passCoordinates(myCoordinates);

//! Propriedades opcionais
//* {nome:string, sobrenome?:string}
function showNumbers(a: number, b: number, c?: number) {
  console.log('A: ' + a);
  console.log('B: ' + b);
  if (c) {
    console.log('C: ' + c);
  }
}
showNumbers(1, 2);
showNumbers(1, 2, 3);

//! Validar props adicionais
/*
o primeiro paramentro nao pode ser opcional, os opcionais devem ficar para o
final da lista de parametros
 */
function advancedGreeting(name: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Ola ${name} ${lastName}`;
  }
  return `Ola ${name}`;
}
console.log(advancedGreeting('Jao'));
console.log(advancedGreeting('Jao', 'Nosdaj'));
