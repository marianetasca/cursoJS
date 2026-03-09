// funcao construtora -> objetos
// funcao fabrica -> objetos
// funcao construtora -> Pessoa (new) inicia com letra maiuscula
 function Pessoa(nome, sobrenome) {
    // atributos os metodos publicos
    this.nome = nome; // = pessoa.nome
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um metodo');
    }
}
const p1 = new Pessoa('maria', 'ramos');

console.log(p1.nome);
p1.metodo();