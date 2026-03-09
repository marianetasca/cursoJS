// @ts-nocheck
const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco: {
        rua: 'av brasil',
        numero: 320
    }
}

// const nome = pessoa.nome;
const {endereco: {rua, numero}, endereco} = pessoa;
// const {nome, sobrenome} = pessoa; // atribuicao via desestruturacao
console.log(rua, numero, endereco);