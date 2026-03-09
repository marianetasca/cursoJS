//  retornar a soma do dobro de todos os pares
// filtrar pares
// reduzir(somar tudo)
const numeros = [5, 50, 80, 1, 2, 4, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor *2)
.reduce((ac, valor ) => ac + valor);

// [ 50, 80, 2, 4, 8, 22 ]
// [ 100, 160, 4, 8, 16, 44 ]

// console.log(numerosPares);

// const numeros = [5, 50, 80, 1, 2, 4, 8, 7, 11, 15, 22, 27];
// const numerosPares = numeros.filter(function(valor) {
//     return valor % 2 === 0;
// }).map(function(valor){
//     return valor *2;
// }).reduce(function(ac, valor ){
//     return ac + valor;
// });