//! Decorators (usados para customizar algum metodo ou funcao)
//! @nomeDaFuncao
//! Lembrar de ajustar o tsconfig.json para que o decorators funcione
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

//! 5 Acessor decorator
