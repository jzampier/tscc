"use strict";
//! 1- Criacao de novos tipos (aprofundando em Generics)
function showData(arg) {
    return `O dado eh ${arg}`;
}
console.log(showData(5));
console.log(showData('cinco'));
console.log(showData([5, 5, 5, 5]));
//! 2- constraints em generics (restricoes para limitar os tipos aceitos)
// extends{name:string} so vai aceitar objs que tenha entre suas props a
// propriedade name de valor string
function showProductName(obj) {
    return `O nome do produto eh ${obj.name}`;
}
const myProduct = { name: 'Porta', cor: 'Azul' };
const myProduct2 = { name: 'Cadeira', cor: 'Preta' };
const myProduct3 = { cor: 'Branca' };
console.log(showProductName(myProduct));
console.log(showProductName(myProduct2));
//usar o type Car ou Pen para criar um objeto e nao a interface, o type foi
//criado a partir da interface MyObject e seus generics atualizados de acordo
//com a necessidade do tipo
const myCar = { name: 'Fosca', wheels: 4, engine: 2.0, color: 'branco' };
const myPen = {
    name: 'Caneta BISC',
    wheels: false,
    engine: false,
    color: 'azul',
};
console.log(myCar);
console.log(myPen);
//! 4 Type parameters (usado por exemplo como o parametro da func eh a chave de um objeto)
function getSomeKey(obj, key) {
    return `A chave ${String(key)} é ${obj[key]}`;
}
const server = {
    hd: '500GB',
    ram: '8GB',
};
console.log(getSomeKey(server, 'hd'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = { name: 'Maria', age: 30, hasDriveLicense: true };
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriveLicense'));
//! 6 - typeof Type
/*
 * Criar novo tipo baseado em um tipo passado como parâmetro
 */
const userName = 'Maria';
//? cria um tipo baseado na variável userName
const userName2 = 'Nosdaj';
const userName3 = 'Arievilo';
const toco = { km: 1000, kg: 3000, description: 'Caminhao com 2 eixos apenas' };
const showKm = (km) => {
    console.log(`o veiculo tem a km de : ${km} km`);
};
showKm(toco.km);
const carreta = { km: 8000, kg: 10000 };
showKm(carreta.km);
const someVar = 5;
