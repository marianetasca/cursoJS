// '' "" string literal
// array literal []
// 

// const pessoa = { //literal
//     nome: 'maria',
//     sobrenome: 'fonseca'
// };

// const chave = 'nome';
// console.log(pessoa['nome']);
// console.log(pessoa.sobrenome);

// new array(); = []

// const pessoa1 = new Object(); // contrutor
// pessoa1.nome = 'maria';
// pessoa1.sobrenome = 'silva';
// pessoa1.idade = 30;
// pessoa1.falarNome = function() {
//     return(`${this.nome} esta falando seu nome`);
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }
// console.log(pessoa1.falarNome());
// console.log(pessoa1.getDataNascimento());
// // // delete pessoa1.nome;
// // console.log(pessoa1);

// for (let chave in pessoa1) {
//     console.log(chave);
// }


// factory functions / sontructor functions / classes

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('maria', 'silva');
// console.log(p1.nomeCompleto());

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this); // para travar tudo
}
const p1 = new Pessoa('maria', 'silva');
Object.freeze(p1); // nao deixa alterar
p1.nome = 'outra coisa';
console.log(p1);