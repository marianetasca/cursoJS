// reduce
const numeros = [5, 50, 80, 1, 2, 4, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) {
        acumulador += valor;
    }
    return acumulador;
}, 0); // valor inicial

console.log(total)

//retorne a pessoa mais velha
const pessoas = [
    { nome: 'maria', idade: 62},
    { nome: 'mariane', idade: 20},
    { nome: 'julia', idade: 55},
    { nome: 'luis', idade: 19},
    { nome: 'marta', idade: 32},
    { nome: 'marlene', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(maisVelha);