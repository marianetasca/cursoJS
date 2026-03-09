// @ts-nocheck

// let a ='A';  // ATRIBUICAO VIA DESESTRUTURACAO
// let b ='B';
// let c ='C';

// const letras = [b, c, a];
// [a,b,c] = letras;
// console.log(letras);

// ...rest, ... spread
// const numeros = [1,2,3,4,5,6,7,8,9];
// const [primeroN, segundoN, ...resto] = numeros;
// console.log(primeroN, segundoN);
// console.log(resto);


// const numeros = [1,2,3,4,5,6,7,8,9];
// const [um, , tres, , cinco, ,sete] = numeros;
// console.log(um, tres, cinco, sete);

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2])