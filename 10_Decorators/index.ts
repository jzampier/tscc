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
