// object.values
// Object.entries
// Object.assing(des, any)

// Object.getOwnPropertyDescriptor(o, 'prop')
// const produto = { nome: 'caneca', preco: 1.8 };
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'qualquer outra coisa'
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// ...(spread)

// object.keys (retorna as chaves)
// object.freeeze (congela os objetos)
// Object.freeze(produto);
// object.defineProperties (define varias propriedades)

// const produto = { nome: 'caneca', preco: 1.8 };
// // const caneca = Object.assign({}, produto, {material: porcelana}) // copiar um objeto
// const outraCoisa = { // para copiar
//     ...produto,
//     material: 'porcelana'
// };
// outraCoisa.nome = 'outro nome';
// console.log(produto);
// console.log(outraCoisa);

// console.log(Object.keys(produto));

const produto = { nome: 'caneca', preco: 1.8 };
console.log(Object.values(produto));
console.log(Object.entries(produto));

for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}
