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
