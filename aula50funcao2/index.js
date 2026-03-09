// @ts-nocheck
// function funcao(a,b,c) { // arguments que sustenta todos os argumentos enviados
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total, a, b, c);
// }
// funcao(1,1,2,2);

function funcao(a, b, c, d, e, f) { // arguments que sustenta todos os argumentos enviados
    console.log(a, b, c, d, e, f);
}
funcao(5, 6, 7);
// argumentos sao valores passados para o parametro

function funcao2(a, b = 2, c = 4) { // valor padrao
    // b = b || 2;
    console.log(a + b + c);
}
funcao2(2, undefined, 10);

function funcao3([valor1, valor2, valor3]) {// desestruturacao por atribuicao
    console.log(valor1, valor2, valor3);
}
funcao3(['maria', 'silva', 20]);

function conta(operador, acumulador, ...numeros) { // rest operator sempre deve ser o ultimo
    console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
        acumulador += numero;
    }
    console.log(acumulador);

}
conta('+', 0, 20, 30, 40, 50);