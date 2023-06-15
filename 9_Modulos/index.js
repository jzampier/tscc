"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//! Trabalhando com modulos
/*
 * exportar com export default
 * importar com import
 * Criar arquivos com extensao .ts mas importar .js
 */
//! 1 Importacao de modulo
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
//! 2 Importando/Exportando variaveis
/*
 * Exporta com export
 * importa com destructuring
 */
const variables_js_1 = require("./variables.js");
console.log('X exportada com sucesso: ' + variables_js_1.x);
//! 3 Realizar multiplas importacoes/exportacoes
/*
 * import {item1, item2, func1, func2 ... itemn}
 */
const multiple_js_1 = require("./multiple.js");
console.log(multiple_js_1.a);
console.log(multiple_js_1.b);
(0, multiple_js_1.myFunc)();
//! 4 Exportando com alias (apelido)
/*
 *Mudar o nome do que foi importado para simplificar
 *import { fjsowfjaslfslajfaljsfsaloasjffsjf as nosdaj }
 */
// destructuring {}
const changeName_js_1 = require("./changeName.js");
console.log(changeName_js_1.someName);
//! 5 Importar tudo de um modulo
/*
? Usamos o * para importar tudo
*/
const myImports = __importStar(require("./numbers.js"));
console.log(myImports);
console.log(myImports['n1']);
const y = myImports.n2;
console.log(`LOG ~ y:`, y);
console.log(myImports.n3);
//implementando a interface de um modulo em outra classe
class User {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const nosdaj = new User('Nosdaj', 3212, 'Elf');
console.log(`LOG ~ nosdaj:`, nosdaj);
