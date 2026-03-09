// filter - nao altera os valores
//  map, reduce
const numeros = [5, 50, 80, 1, 2, 4, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//    console.log(valor, indice);
//     return valor > 10;
// });
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

const pessoas = [
    { nome: 'maria', idade: 62},
    { nome: 'mariane', idade: 20},
    { nome: 'julia', idade: 55},
    { nome: 'luis', idade: 19},
    { nome: 'marta', idade: 32},
    { nome: 'marlene', idade: 47},
];
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasNomeGrande);

const pessoas50mais = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoas50mais);

const nomeTerminaA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(nomeTerminaA)