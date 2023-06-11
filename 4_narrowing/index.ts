//! 1 -Type Guard
function sum(a: number | string, b: number | string) {
  if (typeof a === 'string' && typeof b === 'string') {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === 'number' && typeof b === 'number') {
    console.log(a + b);
  } else {
    console.log('Impossível realizar a soma');
  }
}
sum(10, 20);
sum('10', '20');

//! 2 - Checagem se o valor existe
function operations(arr: number[], operation?: string | undefined) {
  //? Narrowing (checando se a opereacao existe)
  if (operation) {
    if (operation === 'sum') {
      const sum = arr.reduce((i, total) => i + total);
      console.log(sum);
    } else if (operation === 'multiply') {
      const multiply = arr.reduce((i, total) => i * total);
      console.log(multiply);
    }
  } else {
    console.log('Defina uma operacao');
  }
}
operations([1, 2, 3, 4]);
operations([1, 2, 3, 4], 'sum');
operations([1, 2, 3, 4], 'multiply');

//! 3 - instanceof
//* checa se a var eh instancia de uma classe
class User {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

function userGreeting(user: object) {
  //?Narrowing, verifica se user foi instanciado da classe SuperUser
  if (user instanceof SuperUser) {
    console.log(`Ola ${user.name}, deseja verificar os dados do sistema?`);
    //?Narrowing, verifica se user foi instanciado da classe User
  } else if (user instanceof User) {
    console.log(`Ola ${user.name}, tudo de boas?`);
  }
}
const jao = new SuperUser('Jao');
const nosdaj = new User('Nosdaj');

userGreeting(jao);
userGreeting(nosdaj);

//! 4 Operador in
class Dog {
  name;
  breed;
  constructor(name: string, breed?: string) {
    this.name = name;
    //? Narrowing, verifica se breed foi passada como parametro
    if (breed) {
      this.breed = breed;
    }
  }
}
const louise = new Dog('Louise', 'Shih Tzu');
const valentine = new Dog('Valentine');
console.log(valentine.name);

function showDogInfo(dog: Dog) {
  //? Narrowing, verifica se dog tem a propriedade breed e age de acordo
  if ('breed' in dog) {
    console.log(`${dog.name} é da raça ${dog.breed}`);
    //? caso nao tenha, imprime que o cachorro eh viralata
  } else {
    console.log(`O cao eh SRD`);
  }
}
showDogInfo(louise);
showDogInfo(valentine);
//*melhor jeito
// class Dog {
//   name: string;
//   breed?: string;

//   constructor(name: string, breed?: string) {
//     this.name = name;
//     this.breed = breed;
//   }
// }

// const louise = new Dog('Louise', 'Shih Tzu');
// const valentine = new Dog('Valentine');

// function showDogInfo(dog: Dog) {
//   if (dog.breed) {
//     console.log(`${dog.name} é da raça ${dog.breed}`);
//   } else {
//     console.log(`${dog.name} é SRD`);
//   }
// }

// showDogInfo(louise);
// showDogInfo(valentine);
