"use strict";
//! 1 Campos em classes
class User {
}
const julio = new User();
console.log(`LOG ~ julio:`, julio);
julio.name = 'Julio';
julio.age = 25;
console.log(julio);
//! 2 - Constructor
class User2 {
    //?tipagem no constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const nosdaj = new User2('Nosdaj Arievilo', 3213);
console.log(nosdaj);
//! 3 - readonly properties
//? Valores so pra consulta
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fosca = new Car('Fosca');
console.log(fosca);
fosca.name = 'Fosca 2';
console.log(fosca);
// fosca.wheels = 5; erro,pois a propriedade esta como readonly
//! 4 Heranca e super
//? metodu super server para enviar tudo da classe pai para a classe filha
class Machine {
    constructor(name) {
        this.name = name;
    }
}
class KillerMachine extends Machine {
    constructor(name, guns) {
        //? usando super para passar a prop name da cls pai para a cls filha
        super(name);
        this.guns = guns;
    }
}
const razorSaw = new KillerMachine('Razor Saw', 12);
console.log(razorSaw);
//! 5 class methods
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('Hola Infermera');
    }
}
const turin = new Dwarf('Turin');
console.log(turin.name);
turin.greeting();
//! 6 - this
//?quando referimos ao objeto instanciado this.name = nosdaj.name
class Caminhao {
    constructor(name, category, hp) {
        this.name = name;
        this.category = category;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Truck information:\n
      Name: ${this.name}
      Category: ${this.category}
      HP: ${this.hp}
    `);
    }
}
const vuc = new Caminhao('VUC', 'Veiculo urbano de carga', 2000);
vuc.showDetails();
const tanque = new Caminhao('Tanque', 'Caminhao Tanque', 2600);
tanque.showDetails();
//! 8 - Getters
//? Leitura de propriedades
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const nosdaj2 = new Person('Nosdaj', 'Arievilo');
//? para chamar o getter usamos o nome do objeto e o nome do getter sem ()
console.log(nosdaj2.fullName);
//! 9 - Setters
//? Atribuidor de valores para propriedades
class Coords {
    //? setter com typescript
    set setX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('X value inserted successfully');
    }
    set setY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('Y value inserted successfully');
    }
    get coordValues() {
        return `X: ${this.x} Y: ${this.y}`;
    }
}
const initialCoords = new Coords();
initialCoords.setX = 45;
initialCoords.setY = 98;
console.log(initialCoords);
initialCoords.setX = 120;
initialCoords.setY = 321;
console.log(initialCoords.coordValues);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do blog e ${this.title}`;
    }
}
const myBlog = new BlogPost('My First Blog');
console.log(myBlog.itemTitle());
//! 11 - Override de metodos
/*
 * Quando uma classe herda outra, ela pode sobrescrever o metodo da classe pai
 * Basta usar o mesmo nome do metodo e escreve-lo de forma diferente
 */
class Base {
    someMethod() {
        console.log('testando alguma coisa');
    }
}
class Nova extends Base {
    //?Override do metod someMethod (basta reescreve-lo)
    someMethod() {
        console.log('testando alguma coisa nova');
    }
}
const myObject = new Nova();
myObject.someMethod();
//! 12 - visibilidade de props
/*
 * public - acessivel em qualquer lugar da classe
 * protected - acessivel apenas na classe e as classes herdeiras (precisa de
 * ethodo para acessar a propriedade)
 * private - acessivel apenas na classe que declarou o method
 */
//! 12 Public
/*
 * Jah esta implicito e nao precisamos declarar
 * Qualquer method da classe pai podera ser utilizado pela filha
 */
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
//! 13- protected (acessado apenas por metodo e apenas em subclasses)
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log('Este eh um metodo protegido');
    }
}
class F extends E {
    //*usando metodo para acessar o protected x
    showX() {
        console.log('x:' + this.x);
    }
    //*usando metodo para acessar o metodo protegido
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
//! 14 - Private (nivel mais alto de protecao)
//* acessado somente na classe que o definiu (heranca nao consegue acessar)
//* além disso precisa de metodo
class PrivateClass {
    constructor() {
        this.name = 'Private';
    }
    //*metodo para acessar a private name
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('Este eh um metod privado');
    }
    //*metodo para acessar o metodo privado
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
console.warn(pObj.showName());
pObj.showPrivateMethod();
//! 15 - static members
/*
 * Acesso ou utlizacao nao dependem de objetos
 */
class StaticMembers {
    static staticMethod() {
        console.log('Este eh um metodo static');
    }
}
StaticMembers.prop = 'Teste static';
//?chamando a prop sem precisar instanciar um objeto da classe StaticMembers
console.log(StaticMembers.prop);
//?chamando o metodo static sem precisar instanciar um objeto da classe
StaticMembers.staticMethod();
//! 16 Generic class
/*
 * as propriedades dos argumentos podem ter os tipos definidos na hora da criacao
 * da instancia
 * maior flexibilidade em uma classe
 */
class GenericClass {
    //? usando generics para acessar qualquer tipo de dado
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `The first is: ${this.first}`;
    }
}
const newItem = new GenericClass(10, 'Surpresa');
console.log(newItem);
console.log(newItem.showFirst);
//! 17 Parameters properties, definir a privacidade nome e tipo das props do constructor
//* Resume a sintaxe das classes
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `The quantity is: ${this.qty}`;
    }
    get showPrice() {
        return `The Price is: ${this.price}`;
    }
}
const newShirt = new ParameterProperties('Shirt', 10, 59.9);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
//! 18 Class expressions
//* criar classe anonima e encapsular em uma variavel
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const jao = new myClass('Jao');
console.log(jao.name);
//! 19 - Abstract classes
//* Servir como molde para outra classe
//* Todos os metodos da classe abstrata devem ser implementados nas filhas
//* Nao pode ser instanciada (usar heranca e instanciar a filha)
class AbstractClass {
}
//const objeto = new AbstractClass(); erro nao da pra instanciar
class AbstractClassChild extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    //implementando metodo da classe abstrata (senao da erro)
    showName() {
        console.log(`O nome eh ${this.name}`);
    }
}
const objeto = new AbstractClassChild('Nosdaj');
objeto.showName();
//! 20 - Relacao entre Classes
//* desde que sejam identicas voce pode criar um objeto atraves da relacao
//* entre duas classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
