"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("../model/Pessoa");
let pessoa = new Pessoa_1.Pessoa(`João`, `111111111111`, new Date(2006, 11, 4), `994019898`, `Rua número 1`, 170, 70);
pessoa.falar();
pessoa.falarFrase("VAI CURINTIA!!! BANDO DE OREIUDO");
pessoa.andar();
pessoa.andarQuilometros(30);
pessoa.comer();
pessoa.comerPrato("Prato de macarronada");
pessoa.mostrarPeso();
//# sourceMappingURL=teste.js.map