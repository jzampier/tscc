//! Trabalhando com modulos
/*
 * exportar com export default
 * importar com import
 * Criar arquivos com extensao .ts mas importar .js
 */
//! 1 Importacao de modulo
import importGreet from './greet.js';
importGreet();

//! 2 Importando/Exportando variaveis
/*
 * Exporta com export
 * importa com destructuring
 */
import { x } from './variables.js';
console.log('X exportada com sucesso: ' + x);

//! 3 Realizar multiplas importacoes/exportacoes
/*
 * import {item1, item2, func1, func2 ... itemn}
 */
import { a, b, myFunc } from './multiple.js';
console.log(a);
console.log(b);
myFunc();
