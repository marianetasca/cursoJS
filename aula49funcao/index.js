// @ts-nocheck
// declaracao de funcao (function hoisting) pode executar a funcao antes de declarar a funcao
function falaOi() {
    console.log('oi');
}

// first-class objects (objetos de primeira clase)
// function expression
const souUmDado = function() { //funcao anonima
    console.log('sou um dado');
};
souUmDado();

function executaFuncao(funcao) {
    console.log('vou executar a funcao abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// arrow function
const funcaoArrow = () => {
    console.log('sou uma arrow function');
}
funcaoArrow();

// dentro de um objeto
const obj = {
    falar: function() {
        console.log('estou falando...');
    }
};
obj.falar();