export class Pessoa {

    //Atributos da classe
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    // Método construtor
    public constructor(
        _nome: string,
        _cpf: string,
        _data_nascimento: Date,
        _telefone: string,
        _endereco: string,
        _altura: number,
        _peso: number) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.data_nascimento = _data_nascimento
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }
    public getNome() { //get = recuperar
        return this.nome;
    }

    public setNome(_nome: string) { //set = atribuir
        this.nome = _nome;
    }
    /**
     * Retorna o CPF da pessoa
     * 
     * @returns cpf : cpf da pessoa
     */

    public getCPF() {
        return this.cpf;
    }
    /**
     * Atribui o parametro ao atributo
     * @param _cpf : cpf da pessoa
     */
    public setCPF(_cpf: string) {
        this.cpf = _cpf;
    }

    public getData_nascimeto() {
        return this.data_nascimento;
    }

    public setData_nascimento(_data_nascimento: Date) {
        this.data_nascimento = _data_nascimento;
    }

    public getTelefone() {
        return this.telefone;
    }

    public setTelefone(_telefone: string) {
        this.telefone = _telefone;
    }

    public getEndereco() {
        return this.endereco;
    }

    public setEndereco(_endereco: string) {
        this.endereco = _endereco;
    }

    public getAltura() {
        return this.altura;
    }

    public setAltura(_altura: number) {
        this.altura = _altura;
    }

    public getPeso() {
        return this.peso;
    }

    public setPeso(_peso: number) {
        this.peso = _peso;
    }

    public mostraPessoa() {
        console.log(`Nome: ${this.nome}
                CPF: ${this.cpf}
                Data: ${this.data_nascimento}
                Telefone: ${this.telefone}
                Endereço: ${this.endereco}
                Altura:${this.altura}
                Peso: ${this.peso}`);
    }

    // implementar os métodos
    public falar(): void {
        //lógica de negócio
        console.log(`${this.nome} está falando`);
    }

    public falarFrase(_frase: string): void {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }

    public andar(): void {
        console.log(`${this.nome} está andando`);
    }

    public andarQuilometros(_quilometros: number): void {
        console.log(`${this.nome} quilometragem: ${_quilometros}`);
    }

    public comer(): void {
        console.log(`${this.nome} está comendo`);
    }

    public comerPrato(_prato: string): void {
        console.log(`${this.nome} come: ${_prato}`);
    }

}
