"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//! Decorators (usados para customizar algum metodo ou funcao)
//! @nomeDaFuncao
//! Lembrar de ajustar o tsconfig.json para que o decorators funcione
/*
 * Pode trabalhar com argumentos especiais (target, propertyKey, descriptor)
 * Grande vantagem:  permite localizar onde foi executado o decorator
 */
//! 1 Exemplo de decorator
function myDecorator() {
    //* 1 a ser executado
    console.log('Fui executado - function myDecorator');
    //? sintaxe basica do decorator
    return function (
    //* 2 a ser executado
    target, propertyKey, descriptor) {
        console.log('Decorator em execucao, cheguei no return function');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class Myclass {
    //? Chamando o decorator
    testing() {
        //* ultimo a ser executado
        console.log('Terminando a execucao do metodo');
    }
}
__decorate([
    myDecorator()
], Myclass.prototype, "testing", null);
const myObj = new Myclass();
myObj.testing();
//! 2 Multiplos decorators
