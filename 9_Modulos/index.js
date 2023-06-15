"use strict";
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
