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
