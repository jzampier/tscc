"use strict";
//? passamos a interface como tipo do parametro da funcao
function showProductDetails(product) {
    console.log(`O produto ${product.name} custa ${product.price} reais`);
    if (product.isAvailable) {
        console.log('Produto disponivel');
    }
    else {
        console.log('Produto indisponivel');
    }
}
const unhaGalo = {
    name: 'Unha de galo',
    price: 1000,
    isAvailable: false,
};
showProductDetails(unhaGalo);
showProductDetails({ name: 'Feijao', price: 10, isAvailable: true });
function showUserDetails(user) {
    console.log(`O usuario tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A funcao do usuario eh: ${user.role}`);
    }
}
const nosdaj = {
    email: 'sindarinxxd@lorien.valfenda.com',
    role: 'administradeiro',
};
const arievilo = { email: 'Arievilo' };
showUserDetails(nosdaj);
showUserDetails(arievilo);
const fusca = { marca: 'VW', modelo: 'Fusca 1986' };
let coords = { x: 10 };
coords.y = 115;
coords.omega = [365, 72];
console.log(coords);
const julio = {
    name: 'Julio',
    age: 42,
};
const nosdaj2 = {
    name: 'Nosdaj',
    age: 3233,
    superPowers: ['World of Warcrafter', 'Speaks Sindarin'],
};
console.log(julio);
console.log(nosdaj2.superPowers[1]);
const schwarzenegger = {
    name: 'Arnold Schwarzenegger',
    type: 'Rifle',
    caliber: 30,
};
console.log(schwarzenegger);
console.log(schwarzenegger.caliber);
//! 7 Readonly array
//* alteracao apenas por metodo (mas nao da pra aumentar o tamanho do array)
let myArray = ['Maca', 'Laranja', 'Banana'];
console.log(myArray);
myArray.forEach((item) => {
    console.log(item.toUpperCase());
});
//*modificacao por metodo
myArray = myArray.map((item) => {
    return item.toUpperCase();
});
console.log(myArray);
const myTouple = [1, 2, 3, 4, 7, 'julio'];
const numberAndAge = ['Julio', 42];
console.log(numberAndAge);
//! 9 Tupla com Readonly
//* no typescript as tuplas normais podem ser alteradas
const showNumbers = (numbers) => {
    //numbers[0]=1000 erro
    console.log(numbers[0]);
    console.log(numbers[1]);
};
console.log(showNumbers([110, 220]));
