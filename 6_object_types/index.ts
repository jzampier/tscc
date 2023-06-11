//! 1 - Interface
/* Ao inves de passar cada parametro de uma funcao, podemos passar uma 
interface
 */
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}
//? passamos a interface como tipo do parametro da funcao
function showProductDetails(product: Product) {
  console.log(`O produto ${product.name} custa ${product.price} reais`);
  if (product.isAvailable) {
    console.log('Produto disponivel');
  } else {
    console.log('Produto indisponivel');
  }
}
const unhaGalo: Product = {
  name: 'Unha de galo',
  price: 1000,
  isAvailable: false,
};
showProductDetails(unhaGalo);
showProductDetails({ name: 'Feijao', price: 10, isAvailable: true });

//! 2 Interface com propriedade opcional ?:
interface User {
  email: string;
  role?: string;
}
function showUserDetails(user: User): void {
  console.log(`O usuario tem o e-mail: ${user.email}`);
  if (user.role) {
    console.log(`A funcao do usuario eh: ${user.role}`);
  }
}
const nosdaj: User = {
  email: 'sindarinxxd@lorien.valfenda.com',
  role: 'administradeiro',
};
const arievilo: User = { email: 'Arievilo' };

showUserDetails(nosdaj);
showUserDetails(arievilo);

//! 3 readonly
//* a propriedade readonly nao pode ser alterada
//* uma forma de criar um valor constante em um objeto
interface Carro {
  marca: string;
  readonly modelo: string;
}
const fusca: Carro = { marca: 'VW', modelo: 'Fusca 1986' };
//fusca.modelo = 'Fiat'; erro devido ao readonly

//! 4 Index signature
//* acessando propriedades quando nao sabemos o nome da propriedade
interface CoordObject {
  /*desde que eu mantenha esta estrutura, posso atribuir infinitas props para o
objeto*/
  [index: string]: number | number[];
}
let coords: CoordObject = { x: 10 };

coords.y = 115;
coords.omega = [365, 72];
console.log(coords);

//! 5 Extends interface (heranca paracida com a de classes)
interface Human {
  name: string;
  age: number;
}
//herda tudo da interface Human e adiciona a propriedade superPowers
interface SuperHuman extends Human {
  superPowers: string[];
}
const julio: Human = {
  name: 'Julio',
  age: 42,
};
const nosdaj2: SuperHuman = {
  name: 'Nosdaj',
  age: 3233,
  superPowers: ['World of Warcrafter', 'Speaks Sindarin'],
};
console.log(julio);
console.log(nosdaj2.superPowers[1]);

//! 6 Intersection Types &
//* podemos combinar interfaces
interface Character {
  name: string;
}
interface Gun {
  type: string;
  caliber: number;
}

//? uniao das interfaces character & Gun
type CharWithGun = Character & Gun;
const schwarzenegger: CharWithGun = {
  name: 'Arnold Schwarzenegger',
  type: 'Rifle',
  caliber: 30,
};
console.log(schwarzenegger);
console.log(schwarzenegger.caliber);

//! 7 Readonly array
//* alteracao apenas por metodo (mas nao da pra aumentar o tamanho do array)
let myArray: ReadonlyArray<string> = ['Maca', 'Laranja', 'Banana'];
console.log(myArray);
myArray.forEach((item) => {
  console.log(item.toUpperCase());
});

//*modificacao por metodo
myArray = myArray.map((item) => {
  return item.toUpperCase();
});
console.log(myArray);

//!8 Tuplas (um tipo de array que define o tamanho e o tipo de cada posicao)
//* apenas para dados que nao sejam mutaveis

type fiveNumbersOneString = [number, number, number, number, number, string];
const myTouple: fiveNumbersOneString = [1, 2, 3, 4, 7, 'julio'];

type nameAndAge = [string, number];
const numberAndAge: nameAndAge = ['Julio', 42];
console.log(numberAndAge);

//! 9 Tupla com Readonly
//* no typescript as tuplas normais podem ser alteradas
const showNumbers = (numbers: readonly [number, number]) => {
  //numbers[0]=1000 erro
  console.log(numbers[0]);
  console.log(numbers[1]);
};
console.log(showNumbers([110, 220]));
