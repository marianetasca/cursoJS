// @ts-nocheck

// return retorna um valor
// termina a funcao
function soma(a,b) {
    return a + b;
}

// ...document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// });

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('luiz', 'silva');
const p2 = {
    nome: 'joao',
    sobrenome: 'augusto'
};
console.log(p1)
console.log(p2)


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const fala = falaFrase('ola');
const resto = fala('mundo!');
console.log(resto);
// const olaMundo = falaFrase('ola');
// console.log(olaMundo('mundo'));

// function duplica(n) {
//     return n * 2;
// }


function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
