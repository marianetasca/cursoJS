// function saudacao(nome) {
//     return`bom dia ${nome}`;
// }
// const variavel = saudacao('luis');
// console.log(variavel);

// function soma(x = 1, y = 1) {
//     const resultado = x + y;
//     return resultado;
// }
// const resultado = soma(40, 2);
// console.log(resultado);

// funcao anonima
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));

//arrow funcion
const raiz2 = n => n ** 0.5;
console.log(raiz(9));
console.log(raiz(64));
