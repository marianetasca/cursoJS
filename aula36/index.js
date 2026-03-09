// @ts-nocheck

const frutass = ['Pera', 'Maça', 'uva'];

// for(let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for in = le os indices ou chaves do objeto
for (let i in frutass) {
    console.log(frutass[i]);
}

const pessoa = {
    nome: 'maria',
    idade: 32,
    sobrenome: 'silva'
}
console.log(pessoa.nome);
console.log(pessoa['nome']);

// for (let chave in pessoa) {
//     console.log(chave);
// }

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}