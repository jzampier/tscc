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

//! 4 Exportando com alias (apelido)
/*
 *Mudar o nome do que foi importado para simplificar
 *import { fjsowfjaslfslajfaljsfsaloasjffsjf as nosdaj }
 */
// destructuring {}
import { someName as newName } from './changeName.js';
console.log(newName);

//! 5 Importar tudo de um modulo
/*
? Usamos o * para importar tudo
*/
import * as myImports from './numbers.js';
console.log(myImports);
console.log(myImports['n1']);
const y = myImports.n2;
console.log(`LOG ~ y:`, y);
console.log(myImports.n3);

//! 6 - Importar tipos ou interfaces (TypeScript only)
import { Human } from './myType.js';
//implementando a interface de um modulo em outra classe
class User implements Human {
  name: string;
  age: number;
  gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const nosdaj = new User('Nosdaj', 3212, 'Elf');

console.log(`LOG ~ nosdaj:`, nosdaj);
