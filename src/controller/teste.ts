import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa (`Yasmim`,
                        `111111111111`,
                        new Date(2006,11,4),
                        `994019898`,
                        `Rua número 1`,
                        172,
                        65);
pessoa.falar();

pessoa.falarFrase("VAI CURINTIA!!! BANDO DE OREIUDO");

pessoa.andar();

pessoa.andarQuilometros(30);

pessoa.comer();

pessoa.comerPrato("Prato de macarronada");

pessoa.mostrarPeso();

