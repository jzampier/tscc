//! 1- Criacao de novos tipos (aprofundando em Generics)
function showData<T>(arg: T): string {
  return `O dado eh ${arg}`;
}
console.log(showData(5));
console.log(showData('cinco'));
console.log(showData([5, 5, 5, 5]));

//! 2- constraints em generics (restricoes para limitar os tipos aceitos)
// extends{name:string} so vai aceitar objs que tenha entre suas props a
// propriedade name de valor string
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto eh ${obj.name}`;
}
const myProduct = { name: 'Porta', cor: 'Azul' };
const myProduct2 = { name: 'Cadeira', cor: 'Preta' };
const myProduct3 = { cor: 'Branca' };
console.log(showProductName(myProduct));
console.log(showProductName(myProduct2));
//console.log(showProductName(myProduct3)); erro pois nao tem a prop name

//! 3 Interfaces com Generics
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}
type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

//usar o type Car ou Pen para criar um objeto e nao a interface, o type foi
//criado a partir da interface MyObject e seus generics atualizados de acordo
//com a necessidade do tipo
const myCar: Car = { name: 'Fosca', wheels: 4, engine: 2.0, color: 'branco' };
const myPen: Pen = {
  name: 'Caneta BISC',
  wheels: false,
  engine: false,
  color: 'azul',
};
console.log(myCar);
console.log(myPen);

//! 4 Type parameters (usado por exemplo como o parametro da func eh a chave de um objeto)
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${String(key)} é ${obj[key]}`;
}
const server = {
  hd: '500GB',
  ram: '8GB',
};
console.log(getSomeKey(server, 'hd'));
// console.log(getSomeKey(server, 'test')); erro pois a chave test nao existe

//!5 - keyof Type
/*
 * Criar novo tipo
 * aceita dados do tipo objeto (literals e arrays)
 * cria tipo baseado nas chaves de um objeto passado como parametro
 */
type Character = { name: string; age: number; hasDriveLicense: boolean };

//?cria um tipo baseado nas chaves do objeto Character (name, age, hasDriveLicense)
type C = keyof Character;
function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`;
}
const myChar: Character = { name: 'Maria', age: 30, hasDriveLicense: true };

console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriveLicense'));

//! 6 - typeof Type
/*
 * Criar novo tipo baseado em um tipo passado como parâmetro
 */
const userName: string = 'Maria';
//? cria um tipo baseado na variável userName
const userName2: typeof userName = 'Nosdaj';
//outro exemplo
type x = typeof userName;
const userName3: x = 'Arievilo';

//! 7 - Indexed Access types
/*
 * Cria um tipo baseado em uma chave de objeto.
 * consegue reaproveitar o tipo da chave em outros locais
 */
type Truck = { km: number; kg: number; description: string };

//? Criando o tipo Km baseado na chave km do objeto Truck
type Km = Truck['km'];

const toco = { km: 1000, kg: 3000, description: 'Caminhao com 2 eixos apenas' };

const showKm = (km: Km): void => {
  console.log(`o veiculo tem a km de : ${km} km`);
};
showKm(toco.km);

const carreta = { km: 8000, kg: 10000 };
showKm(carreta.km);

//! 8 - Conditional Types
/*
 * Cria um tipo baseado em if/else
 * usar ternarios para criar o tipo
 */
interface A {}
interface B extends A {}
//? se B extends A, mytype sera number, se nao sera string
type myType = B extends A ? number : string;
const someVar: myType = 5;
//const someVar2: myType = '5';

interface Teste {
  showName(): string;
}
//? resultado false ele fica com o tipo boolean (pq a interf Test nao tem o
//? metodo showNumber)
type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

//! 9 - Template Literal Types
/*
? forma de customizar tipos de maneiras infinitas
  */
type testA = 'text';
type CustomType = `some ${testA}`;

type a1 = 'Testando';
type a2 = 'Union';

//? tipo baseado em variaveis
type a3 = `${a1}` | `${a2}`;
