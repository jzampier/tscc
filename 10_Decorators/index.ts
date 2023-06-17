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
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Decorator em execucao, cheguei no return function');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}
class Myclass {
  //? Chamando o decorator
  @myDecorator()
  testing(): void {
    //* ultimo a ser executado
    console.log('Terminando a execucao do metodo');
  }
}

const myObj = new Myclass();
myObj.testing();

//! 2 Multiplos decorators
function a() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Executando a()');
  };
}
function b() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Executando b()');
  };
}
function c() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Executando c()');
  };
}

class MultipleDecorators {
  @c() //? 3 decorator a ser executado
  @b() //? 2 decorator a ser executado
  @a() //? 1 decorator a ser executado
  testing() {
    console.log('Testando multiple decorators');
  }
}

const multipleDecorators = new MultipleDecorators();
multipleDecorators.testing();

//! 3 Decorator de classes
/*
 * Ligado ao constructor (sempre que o constructor for chamado o decorator sera
 * executado)
 */
//? Para o decorator de classe=> criar funcao e passar o constructor como param
function classDecorator(constructor: Function) {
  console.log(constructor);
  if (constructor.name === 'User') {
    console.log('Criando usuario');
  }
}

//*chamar ele antes da classe igual aos decorators de metodos
@classDecorator
class User {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
const julio = new User('Julio');
console.log(julio);

//! 4 Decorator de metodos
function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}
class Machine {
  name;
  constructor(name: string) {
    this.name = name;
  }
  @enumerable(false)
  showName() {
    console.log(this);
    return `O nome da maquina é ${this.name}!`;
  }
}
const trator = new Machine('Trator');
trator.showName();
console.log(trator.showName());

console.clear();
//! 5 Acessor decorator
/*
 * Serve somente para getter e setter
 */
class Monster {
  name;
  age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  @enumerable(false)
  get showName() {
    return `O nome do monstro é ${this.name}`;
  }
  @enumerable(false)
  get showAge() {
    return `A idade do monstro é ${this.age}`;
  }
}
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
function validate(target: Object, propertyKey: string) {
  let value: string;

  const getter = function () {
    return value;
  };

  const setter = function (newVal: string) {
    value = newVal.padStart(5, '0');
  };

  Object.defineProperty(target, propertyKey, {
    set: setter,
    get: getter,
  });
}

class Id {
  @validate
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new Id('389');
console.log(newItem);
console.log(newItem.id);

console.clear();
//! 7 Exemplo de class decorator
//*influenciando o construtor, vamos criar uma funcao para inserir data na
//*criacao dos objetos
function dataCadastro(cadastro: Function) {
  //? o decorator vai criar e atribuir valor para essa propriedade na classe
  //? que utilizar ele
  cadastro.prototype.cadastradoEm = new Date();
}
@dataCadastro
class Book {
  id: number;
  //*para acessar a propriedade
  cadastradoEm?: Date;
  constructor(id: number) {
    this.id = id;
  }
}
@dataCadastro
class Pen {
  id: number;
  //*para acessar a propriedade (pode ser Date ou undefined)
  cadastradoEm?: Date;
  constructor(id: number) {
    this.id = id;
  }
}

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
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] == true) {
        console.warn('Usuario Jah Postou!!!!');
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}
class Post {
  alreadyPosted: boolean = false;
  @checkPosts()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Usuario postou:  ${content}`);
  }
}

const newPost = new Post();
newPost.post('Oi', newPost.alreadyPosted);
newPost.post('Oi dinovo', newPost.alreadyPosted);
newPost.post('Oi dinovo dinovo', newPost.alreadyPosted);

console.clear();
//! Exemplo real de property decorator
//?Vamos criar uma validacao de numero maximo de caracteres
function max(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;
    const getter = () => value;
    const setter = (newVal: string) => {
      if (newVal.length > limit) {
        console.warn(`Voce nao pode inserir mais que ${limit} caracteres`);
        return;
      } else {
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
  @max(10)
  username: string;
  constructor(username: string) {
    this.username = username;
  }
}

const jao = new Admin('Jao');
console.log(jao);
const ralphaelson = new Admin('skfsfsfjsfklsflsflsflsflsflslflf');
console.log(ralphaelson);
