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
function a() {
    return function (target, propertyKey, descriptor) {
        console.log('Executando a()');
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log('Executando b()');
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log('Executando c()');
    };
}
class MultipleDecorators {
    testing() {
        console.log('Testando multiple decorators');
    }
}
__decorate([
    c() //? 3 decorator a ser executado
    ,
    b() //? 2 decorator a ser executado
    ,
    a() //? 1 decorator a ser executado
], MultipleDecorators.prototype, "testing", null);
const multipleDecorators = new MultipleDecorators();
multipleDecorators.testing();
//! 3 Decorator de classes
/*
 * Ligado ao constructor (sempre que o constructor for chamado o decorator sera
 * executado)
 */
//? Para o decorator de classe=> criar funcao e passar o constructor como param
function classDecorator(constructor) {
    console.log(constructor);
    if (constructor.name === 'User') {
        console.log('Criando usuario');
    }
}
//*chamar ele antes da classe igual aos decorators de metodos
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const julio = new User('Julio');
console.log(julio);
//! 4 Decorator de metodos
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da maquina é ${this.name}!`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine('Trator');
trator.showName();
console.log(trator.showName());
//! 5 Acessor decorator
