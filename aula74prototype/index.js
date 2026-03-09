// prototype -- para metodos

// contrutora - molde(classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// instancia
const pessoa1 = new Pessoa('maria', 'O.');
const pessoa2 = new Pessoa('marli', 'A.');

console.dir(pessoa1);
console.dir(pessoa2);