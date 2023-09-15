"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    //Atributos da classe
    nome;
    cpf;
    data_nascimento;
    telefone;
    endereco;
    altura;
    peso;
    // Método construtor
    constructor(_nome, _cpf, _data_nascimento, _telefone, _endereco, _altura, _peso) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    /**
     * Retorna o CPF da pessoa
     *
     * @returns cpf : cpf da pessoa
     */
    getCPF() {
        return this.cpf;
    }
    /**
     * Atribui o parametro ao atributo
     * @param _cpf : cpf da pessoa
     */
    setCPF(_cpf) {
        this.cpf = _cpf;
    }
    getData_nascimeto() {
        return this.data_nascimento;
    }
    setData_nascimento(_data_nascimento) {
        this.data_nascimento = _data_nascimento;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(_telefone) {
        this.telefone = _telefone;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(_endereco) {
        this.endereco = _endereco;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(_altura) {
        this.altura = _altura;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
    mostraPessoa() {
        console.log(`Nome: ${this.nome}
                CPF: ${this.cpf}
                Data: ${this.data_nascimento}
                Telefone: ${this.telefone}
                Endereço: ${this.endereco}
                Altura:${this.altura}
                Peso: ${this.peso}`);
    }
    // implementar os métodos
    falar() {
        //lógica de negócio
        console.log(`${this.nome} está falando`);
    }
    falarFrase(_frase) {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }
    andar() {
        console.log(`${this.nome} está andando`);
    }
    andarQuilometros(_quilometros) {
        console.log(`${this.nome} quilometragem: ${_quilometros}`);
    }
    comer() {
        console.log(`${this.nome} está comendo`);
    }
    comerPrato(_prato) {
        console.log(`${this.nome} come: ${_prato}`);
    }
    mostrarPeso() {
        console.log(`${this.nome} está pesando ${this.peso}KG`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map