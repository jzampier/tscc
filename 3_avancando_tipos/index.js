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
var numbers = [1, 2, 3, 4];
console.log("LOG ~ numbers:", numbers);
var names = ['Jao', 'Nosdaj', 'Pedroka'];
console.log("LOG ~ names:", names);
var numAndNames = [1, 2, 'Jao', 'Nosdaj', 'Pedroka'];
console.log("LOG ~ numAndNames:", numAndNames);
names.push('Arievilo');
console.log("LOG ~ names:", names);
