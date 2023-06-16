"use strict";
//! Decorators (usados para customizar algum metodo ou funcao)
//! @nomeDaFuncao
//! Lembrar de ajustar o tsconfig.json para que o decorators funcione
/*
 * Pode trabalhar com argumentos especiais (target, propertyKey, descriptor)
 * Grande vantagem:  permite localizar onde foi executado o decorator
 */
//! 1 Exemplo de decorator
class Myclass {
    testing() {
        console.log('Terminando a execucao do metodo');
    }
}
const myObj = new Myclass();
myObj.testing();
