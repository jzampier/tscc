//! 1- void, funcao que nao tem retorno
function jackReacher(): void {
  console.log('Jack Reacher - void = SEM RETORNO');
}

jackReacher();

//! 2-  Callbacks
function callBack(nome: string): string {
  return `Olá ${nome}`;
}
//? f:(argumentos:tipos)=>tipo do retorno
function principal(f: (name: string) => string, nomeUsuario: string) {
  console.log('Preparando para executar o callback');
  const greet = f(nomeUsuario);
  console.log(greet);
}

principal(callBack, 'Nosdaj');

//! Generic function T ou U
//? function nomeDaFuncao<T>(meuArray: T[]): T{
//?   return meuArray[0];
//? }

function firstElementofArray<T>(arr: T[]): T {
  return arr[0];
}
console.log(firstElementofArray(['a', 'b', 'c']));
console.log(firstElementofArray([true, 'b', 'c']));
console.log(firstElementofArray([100, 'b', 'c']));
console.log(firstElementofArray([[0, 1, 2], 'b', 'c']));
console.log(firstElementofArray([{ name: 'Nosdaj', age: 20 }, 'b', 'c']));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  //retorna um objeto que contem os atributos de obj1 e obj2
  return {
    ...obj1,
    ...obj2,
  };
}
const newObject = mergeObjects({ name: 'Nosdaj' }, { lastname: 'Arievilo' });
console.log(newObject);

//! 4 - Constraints (restricoes)
//* quando temos a opcao de editar a funcao
//? restringir T a number e string somente
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;
  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '4'));
console.log(biggestNumber('4', '4'));

//! 5 - Definir os tipos de argumentos
//* quando nao temos a opcao de editar a funcao, definir os tipos de argumentos
//* na execucao myFunction<number|string>(1,'2')

function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}
//definicao na execucao
console.log(mergeArrays<number | string>([1, 2, 3], ['x4,5x', 6]));

//! 6 Parametros opcionais
//* declarar e deixar no fim da lista

function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}`;
  }
  return `Olá ${name}`;
}
console.log(modernGreeting('Nosdaj'));
console.log(modernGreeting('Nosdaj', 'Sindarin'));

//! 7 - Default Params igual ao JS
function sumDefault(n: number, m = 10): number {
  return n + m;
}
console.log(sumDefault(5, 20));

//! 8 - unknow, semelhante ao any, mas mais seguro
function doSomething(x: unknown) {
  //?por ser unknown, devemos checar a tipagem antes de trabalhar com a variavel
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === 'number') {
    console.log('x eh um numero');
  }
}

doSomething([5, 6, 7]);
doSomething(5);

//! 9 - never, semelhante ao void, nao retorna nada (ex retorno de errorss)
function showError(message: string): never {
  //?Parece um retorno mas nao eh
  throw new Error(message);
}

// showError('Erro de teste');

//! 10 - Rest parameters (...parametro:tipo[])
const sumAll = (...n: number[]): number => {
  return n.reduce((acc, value) => acc + value, 0);
};
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//! 11 - Destructuring (spread operator)
const showProductDetails = ({
  name,
  price,
}: {
  name: string;
  price: number;
}): string => {
  return `O produto ${name} custa ${price}`;
};
const camisaDeForca = {
  name: 'camisa de forca',
  sku: 1129,
  anoFab: 2023,
  price: 100,
};
console.log(showProductDetails(camisaDeForca));

/*
?melhor forma de fazer
interface Product {
  name: string;
  price: number;
}

const showProductDetails = ({ name, price }: Product): string => {
  return `O produto ${name} custa ${price}`;
};

const camisaDeForca: Product = { name: 'camisa de forca', price: 100 };
console.log(showProductDetails(camisaDeForca));
*/
