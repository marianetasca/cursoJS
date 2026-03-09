const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 25,

    fala() { //metodo
        console.log(`${this.nome} ${this.sobrenome} esta falando oi, ${this.idade}`);
    },

    icrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.icrementaIdade();
pessoa1.fala();

// console.log(pessoa1.nome);

// function criaPesssoa(nome, sobrenome, idade) { //parametro
//     return {
//         nome,
//         sobrenome,
//         idade,
//     };
// }
// const pessoa1 = criaPesssoa('luis', 'otavio', 25); // argumento é o valor passado para o parametro
// console.log(pessoa1);