// map vai sempre ter o tamanho original do array
const numeros = [5, 50, 80, 1, 2, 4, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2);
console.log(dobro);

const pessoas = [
    { nome: 'maria', idade: 62},
    { nome: 'mariane', idade: 20},
    { nome: 'julia', idade: 55},
    { nome: 'luis', idade: 19},
    { nome: 'marta', idade: 32},
    { nome: 'marlene', idade: 47},
];

const nome = pessoas.map(obj => obj.nome)
const idade = pessoas.map(obj => ({ idade: obj.idade}));
console.log(nome);

const comIds = pessoas.map(function(obj, indice) {
    const newObjs = {...obj}; // para nao afetar o objeto original
    newObjs.id = indice;
    return newObjs;
})
console.log(comIds);
