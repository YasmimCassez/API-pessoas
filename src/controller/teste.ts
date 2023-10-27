import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa (`Maria Zeferina`,
                        `333333333333`,
                        new Date (1972,8,29),
                        `9999999999`,
                        `Rua das corridas`,
                        165,
                        55)

pessoa.cadastroPessoa(pessoa);

