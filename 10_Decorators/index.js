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
//? SAO MUITO BONS PARA REALIZAR VALIDACOES E REAPROVEITAMENTO DE CODIGO
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
console.clear();
//! 5 Acessor decorator
/*
 * Serve somente para getter e setter
 */
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome do monstro é ${this.name}`;
    }
    get showAge() {
        return `A idade do monstro é ${this.age}`;
    }
}
__decorate([
    enumerable(false)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const pikaku = new Monster('Pikaku', 25);
console.log(pikaku);
console.clear();
//! 6 Property decorator
/*
 * com eles eh possivel ativar uma funcao na hora da definicao da classe
 * bom para validar modificar dados
 */
// function validate() {
//   //?preparando o decorator que Atuara num Objeto com chave string
//   return function (target: Object, propertyKey: string) {
//     let value: string;
//     //? definindo o getter
//     const getter = function () {
//       return value;
//     };
//     //? definindo o setter (com a estrutura de validacao de 5 digitos)
//     const setter = function (newVal: string) {
//       value = newVal.padStart(5, '0');
//     };
//     Object.defineProperty(target, propertyKey, {
//       set: setter,
//       get: getter,
//     });
//   };
// }
// class Id {
//   @validate()
//   id;
//   constructor(id: string) {
//     this.id = id;
//   }
// }
// const newItem = new Id('389');
// console.log(newItem);
function validate(target, propertyKey) {
    let value;
    const getter = function () {
        return value;
    };
    const setter = function (newVal) {
        value = newVal.padStart(5, '0');
    };
    Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter,
    });
}
class Id {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    validate
], Id.prototype, "id", void 0);
const newItem = new Id('389');
console.log(newItem);
console.log(newItem.id);
console.clear();
//! 7 Exemplo de class decorator
//*influenciando o construtor, vamos criar uma funcao para inserir data na
//*criacao dos objetos
function dataCadastro(cadastro) {
    //? o decorator vai criar e atribuir valor para essa propriedade na classe
    //? que utilizar ele
    cadastro.prototype.cadastradoEm = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    dataCadastro
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    dataCadastro
], Pen);
const ilhaMisteriosa = new Book(12);
const bic = new Pen(553);
console.log(ilhaMisteriosa);
console.log(bic);
console.log(ilhaMisteriosa.cadastradoEm);
console.log(bic.cadastradoEm);
console.clear();
//! 8 Exemplo de method decorator
/*
 *Vamos verificar se um usuario pode ou nao uma alteracao no sistema
 */
function checkPosts() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] == true) {
                console.warn('Usuario Jah Postou!!!!');
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Usuario postou:  ${content}`);
    }
}
__decorate([
    checkPosts()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Oi', newPost.alreadyPosted);
newPost.post('Oi dinovo', newPost.alreadyPosted);
newPost.post('Oi dinovo dinovo', newPost.alreadyPosted);
console.clear();
//! Exemplo real de property decorator
//?Vamos criar uma validacao de numero maximo de caracteres
function max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = () => value;
        const setter = (newVal) => {
            if (newVal.length > limit) {
                console.warn(`Voce nao pode inserir mais que ${limit} caracteres`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    max(10)
], Admin.prototype, "username", void 0);
const jao = new Admin('Jao');
console.log(jao);
const ralphaelson = new Admin('skfsfsfjsfklsflsflsflsflsflslflf');
console.log(ralphaelson);
