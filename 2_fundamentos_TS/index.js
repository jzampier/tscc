"use strict";
//!Primitivos
//!1 - numbers let/const variavel:number
let num = 1000;
let num2 = 15.454;
console.warn('numero:', num, 'numero2:', num2.toPrecision(4));
//!2 - strings let/const variavel:string
let nome = 'Nosdaj';
let sobrenome = 'Arievilo';
let fullName;
fullName = nome + ' ' + sobrenome;
console.log(fullName.toUpperCase(), typeof fullName);
//!3 - boolean let/const variavel:boolean, nao aceita mais 0 / 1
let boolBoy = true;
boolBoy = false;
//* TS e a aplicacao
// pair programming, alguem que nos ajuda a programar
//? Type annotation (explicita) e Type inference (implicito)
//? type annotation
let ann = 'teste';
console.log(ann, typeof ann);
//? type inference
let inf = 'teste';
console.log(inf, typeof inf);
