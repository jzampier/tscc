"use strict";
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
const numbers = [1, 2, 3, 4];
console.log(`LOG ~ numbers:`, numbers);
const names = ['Jao', 'Nosdaj', 'Pedroka'];
console.log(`LOG ~ names:`, names);
const numAndNames = [1, 2, 'Jao', 'Nosdaj', 'Pedroka'];
console.log(`LOG ~ numAndNames:`, numAndNames);
names.push('Arievilo');
console.log(`LOG ~ names:`, names);
//! Tipo Any , nao recomendado pois vai de encontro a ideia fundamental do TS
let anything = 'Jao';
console.log(typeof anything);
const arrAny = [1, 'Jao', true, { nome: 'Jao' }];
console.log(`LOG ~ arrAny:`, arrAny);
//! Tipo de parametro de funcoes
/*
 * myFunction(param: tipo){}
 * myFunction(name: string, age: number){}
 */
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
//! Tipando o retorno da funcao
/*
 * myFunction(param: tipo): tipo{}
 */
function greeting(name) {
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
function passCoordinates(coord) {
    console.log('Latitude:' + coord.lat);
    console.log('Longitude:' + coord.long);
}
const myCoordinates = { lat: 329, long: -123 };
passCoordinates(myCoordinates);
//! Propriedades opcionais
//* {nome:string, sobrenome?:string}
function showNumbers(a, b, c) {
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
function advancedGreeting(name, lastName) {
    if (lastName !== undefined) {
        return `Ola ${name} ${lastName}`;
    }
    return `Ola ${name}`;
}
console.log(advancedGreeting('Jao'));
console.log(advancedGreeting('Jao', 'Nosdaj'));
//! Union Types
function showNumbersOrString(a, b) {
    console.log('A: ' + a);
    console.log('B: ' + b);
}
const arr2 = [1, 2, 'Jao', 'Nosdaj', 'Pedroka'];
const arr3 = [
    1,
    2,
    'Jao',
    'Nosdaj',
    'Pedroka',
    false,
];
console.log(arr3);
//!Avancando em union types
//conditionals/type of
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuario nao aprovado!';
    }
    return `Usuario aprovado com role ${role}`;
}
showUserRole('Admin');
console.log(`LOG ~ showUserRole('Admin');:`, showUserRole('Admin'));
console.log(showUserRole(false));
function showId(id) {
    console.log(`O ID eh ${id}`);
}
showId(100);
showId(`200`);
function showCoordinates(obj) {
    console.log(`x:${obj.x} y: ${obj.y} z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: -15,
    z: 30,
};
showCoordinates(coordObj);
//const alguem:Person = {name:'Julio', age:42}
const alguem = { name: 'Julio' };
console.log(`LOG ~ alguem:`, alguem);
//! Literal Types crio o meu tipo
/*
 *const direction: 'left' | 'right' | 'top' | 'bottom' = 'left';
 *const luckyNumber: 13
 */
function showDirection(direction) {
    console.log(`A direcao escolhida foi ${direction}`);
}
showDirection('left');
showDirection('top');
showDirection('right');
showDirection(13);
console.clear();
//!Non-null Assertion Operator !
//! utilizamos ! para avisar que o elemento vai estar disponivel
//! util na manipulacao do DOM
const p = document.querySelector('#some-p');
console.log(p.textContent);
console.log(p);
//! Bigint (nao padronizado para os navegadores ainda)
/* numeros grandes que podem ser armazenados em um numero inteiro  */
/* Alterar  config para ES2020*/
let n;
n = 1000n;
console.log(n);
console.log(typeof n);
console.clear();
//! Symbol
// Cria uma referencia unica para um valor
// mesmo que tenha o valor de outra variavel os valores
// serao considerados diferentes
let symbolA = Symbol('a');
let symbolB = Symbol('a');
console.log(symbolA === symbolB); //mesmo valor, mas referencias diferentes
console.log(symbolA == symbolB);
